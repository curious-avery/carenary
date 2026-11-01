(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root)root.CareneryMatching=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const DEFAULT_THRESHOLD=.82;

  function normalizeText(value){
    return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  }

  function levenshteinDistance(left,right){
    const a=normalizeText(left),b=normalizeText(right);
    if(!a.length)return b.length;
    if(!b.length)return a.length;
    const row=Array.from({length:b.length+1},(_,index)=>index);
    for(let i=1;i<=a.length;i++){
      let diagonal=row[0];
      row[0]=i;
      for(let j=1;j<=b.length;j++){
        const previous=row[j];
        row[j]=Math.min(row[j]+1,row[j-1]+1,diagonal+(a[i-1]===b[j-1]?0:1));
        diagonal=previous;
      }
    }
    return row[b.length];
  }

  function similarityScore(left,right){
    const a=normalizeText(left),b=normalizeText(right),longest=Math.max(a.length,b.length);
    return longest?1-levenshteinDistance(a,b)/longest:1;
  }

  function conditionTerms(condition,aliases={}){
    return [...new Set([condition.name,condition.slug.replaceAll('-',' '),condition.trial,...(aliases[condition.slug]||[])]
      .map(normalizeText).filter(Boolean))];
  }

  function windowsFor(query,wordCount){
    const words=normalizeText(query).split(' ').filter(Boolean),windows=[];
    for(let size=Math.max(1,wordCount-1);size<=Math.min(words.length,wordCount+1);size++){
      for(let start=0;start<=words.length-size;start++)windows.push(words.slice(start,start+size).join(' '));
    }
    return windows;
  }

  function findConditionMatch(query,conditions,aliases={},options={}){
    const normalizedQuery=normalizeText(query),threshold=options.threshold||DEFAULT_THRESHOLD;
    if(!normalizedQuery)return null;
    const padded=` ${normalizedQuery} `;
    for(const condition of conditions){
      for(const term of conditionTerms(condition,aliases)){
        if(padded.includes(` ${term} `))return {condition,method:'exact',score:1,matchedTerm:term,input:term};
      }
    }
    let best=null;
    for(const condition of conditions){
      for(const term of conditionTerms(condition,aliases)){
        if(term.length<5)continue;
        const candidates=windowsFor(normalizedQuery,term.split(' ').length);
        for(const candidate of candidates){
          if(candidate.length<4)continue;
          const score=similarityScore(candidate,term);
          if(!best||score>best.score)best={condition,method:'spelling-aware',score,matchedTerm:term,input:candidate};
        }
      }
    }
    return best&&best.score>=threshold?best:null;
  }

  function cleanResearchTerm(query){
    const raw=String(query||'').trim();
    const cleaned=raw.replace(/^(?:please\s+)?(?:tell me about|what is|explain|can you (?:tell me about|explain)|i want to (?:learn|know) about|find information (?:on|about)|search for)\s+/i,'').replace(/[?.!]+$/,'').trim();
    return (cleaned||raw).slice(0,120);
  }

  function correctResearchTerm(query,vocabulary=[],options={}){
    const original=cleanResearchTerm(query),threshold=options.threshold||DEFAULT_THRESHOLD;
    if(!original)return {term:'',correctedFrom:null,method:'none',score:0};
    const exact=vocabulary.find(term=>normalizeText(term)===normalizeText(original));
    if(exact)return {term:exact,correctedFrom:null,method:'exact',score:1};
    let best=null;
    for(const term of vocabulary){
      const score=similarityScore(original,term);
      if(!best||score>best.score)best={term,score};
    }
    if(best&&best.score>=threshold)return {term:best.term,correctedFrom:original,method:'spelling-aware',score:best.score};
    return {term:original,correctedFrom:null,method:'none',score:0};
  }

  return {DEFAULT_THRESHOLD,normalizeText,levenshteinDistance,similarityScore,conditionTerms,findConditionMatch,cleanResearchTerm,correctResearchTerm};
});
