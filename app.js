const commonSources = [
  ['MedlinePlus by NLM','Health information from the National Library of Medicine.','https://medlineplus.gov/'],
  ['NIH GARD','Information about rare diseases.','https://rarediseases.info.nih.gov/'],
  ['CDC Chronic Disease Indicators','Data about long-term diseases.','https://www.cdc.gov/cdi/'],
  ['CDC PLACES','Local health data by county and ZIP code.','https://www.cdc.gov/places/'],
  ['CMS NPI Registry','Public records for health care providers.','https://npiregistry.cms.hhs.gov/'],
  ['FDA openFDA','Drug safety alerts, recalls, and labels.','https://open.fda.gov/'],
  ['ClinicalTrials.gov','Public records for health research studies.','https://clinicaltrials.gov/'],
  ['HHS Healthy People 2030','National goals for better health.','https://health.gov/healthypeople']
];

const guideSources={
  diabetes:['MedlinePlus | Type 2 Diabetes','https://medlineplus.gov/diabetestype2.html'],
  hypertension:['MedlinePlus | High Blood Pressure','https://medlineplus.gov/highbloodpressure.html'],
  asthma:['MedlinePlus | Asthma','https://medlineplus.gov/asthma.html'],
  copd:['MedlinePlus | COPD','https://medlineplus.gov/copd.html'],
  arthritis:['MedlinePlus | Osteoarthritis','https://medlineplus.gov/osteoarthritis.html'],
  eczema:['MedlinePlus | Eczema','https://medlineplus.gov/eczema.html'],
  celiac:['MedlinePlus | Celiac Disease','https://medlineplus.gov/celiacdisease.html'],
  ibd:["MedlinePlus | Crohn's Disease",'https://medlineplus.gov/crohnsdisease.html'],
  ibs:['MedlinePlus | Irritable Bowel Syndrome','https://medlineplus.gov/irritablebowelsyndrome.html'],
  ckd:['MedlinePlus | Chronic Kidney Disease','https://medlineplus.gov/chronickidneydisease.html'],
  depression:['MedlinePlus | Depression','https://medlineplus.gov/depression.html'],
  anxiety:['MedlinePlus | Anxiety','https://medlineplus.gov/anxiety.html'],
  adhd:['MedlinePlus | ADHD','https://medlineplus.gov/attentiondeficithyperactivitydisorder.html'],
  migraine:['MedlinePlus | Migraine','https://medlineplus.gov/migraine.html'],
  hiv:['MedlinePlus | HIV','https://medlineplus.gov/hiv.html'],
  hepatitis:['MedlinePlus | Hepatitis','https://medlineplus.gov/hepatitis.html'],
  'food-allergy':['MedlinePlus | Food Allergy','https://medlineplus.gov/foodallergy.html'],
  'sickle-cell':['MedlinePlus | Sickle Cell Disease','https://medlineplus.gov/sicklecelldisease.html']
};

const usStates={AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'District of Columbia'};

const conditionAliases={diabetes:['diabetes','t2d'],'hypertension':['high blood pressure','high bp'],asthma:['reactive airway disease'],copd:['chronic obstructive pulmonary disease'],arthritis:['arthritis','joint arthritis'],eczema:['atopic dermatitis'],celiac:['gluten disease'],ibd:['ibd','crohn disease',"crohn's disease",'ulcerative colitis'],ibs:['irritable bowel'],ckd:['ckd','kidney disease'],depression:['major depression'],anxiety:['anxiety','child anxiety'],adhd:['attention deficit disorder','attention deficit hyperactivity disorder'],migraine:['migraines'],hiv:['human immunodeficiency virus'],hepatitis:['hepatitis'], 'food-allergy':['food allergies'],'sickle-cell':['sickle cell anemia']};

const researchVocabulary=['neurofibromatosis','cystic fibrosis','Ehlers-Danlos syndrome','Huntington disease','Marfan syndrome','amyotrophic lateral sclerosis','multiple sclerosis','systemic lupus erythematosus','Duchenne muscular dystrophy','pulmonary hypertension'];

const conditions = [
  {slug:'diabetes',name:'Type 2 Diabetes',category:'Metabolic',icon:'T2',pediatric:false,desc:'Blood sugar, medicine, and long-term health checks.',overview:'Learn about blood sugar checks, medicines, healthy habits, and routine care for Type 2 Diabetes.',summary:'Diabetes care includes checking blood sugar, reviewing medicines, protecting your eyes and kidneys, and building healthy food and activity habits.',trial:'type 2 diabetes',specialty:'Endocrinology',drug:'metformin',priorities:[['Blood sugar','Ask what your A1C goal means for you.'],['Health checks','Keep up with eye, kidney, and heart checks.'],['Food and activity','Choose habits that you can keep doing.'],['Medicines','Review benefits and side effects with your doctor.']]},
  {slug:'hypertension',name:'High Blood Pressure',category:'Cardiovascular',icon:'BP',pediatric:false,desc:'Home blood pressure checks, medicine, and follow-up.',overview:'Learn how home readings, medicine, and regular care help manage high blood pressure.',summary:'Good care starts with correct blood pressure readings. Your doctor may also review medicines and check your heart and kidneys.',trial:'hypertension',specialty:'Cardiovascular Disease',drug:'lisinopril',priorities:[['Check at home','Use the right cuff and write down results.'],['Review medicines','Ask how each medicine helps.'],['Keep appointments','Share your home readings with your care team.'],['Protect your health','Ask about heart and kidney checks.']]},
  {slug:'asthma',name:'Asthma',category:'Respiratory',icon:'AS',pediatric:true,desc:'Inhalers, triggers, and an asthma action plan.',overview:'Learn about daily asthma control, correct inhaler use, triggers, and plans for school or work.',summary:'Asthma care includes daily control and a clear plan for breathing problems. Everyone who helps should know that plan.',trial:'asthma',specialty:'Allergy & Immunology',drug:'albuterol',priorities:[['Daily medicine','Know which inhaler is for daily use.'],['Action plan','Know what to do when breathing gets worse.'],['Triggers','Learn which things make symptoms worse.'],['School or work','Share the action plan with people who can help.']]},
  {slug:'copd',name:'COPD',category:'Respiratory',icon:'CP',pediatric:false,desc:'Breathing changes, lung rehab, medicine, and oxygen.',overview:'Learn how to watch breathing symptoms, stay active, use medicines, and plan care for COPD.',summary:'COPD care can help you breathe better and stay active. A care plan may include inhalers, lung rehab, vaccines, and oxygen checks.',trial:'COPD',specialty:'Pulmonary Disease',drug:'tiotropium',priorities:[['Breathing changes','Know when cough or shortness of breath gets worse.'],['Lung rehab','Ask about exercise and breathing support.'],['Medicines','Review inhaler use with your care team.'],['Oxygen','Ask if an oxygen check is needed.']]},
  {slug:'arthritis',name:'Osteoarthritis',category:'Inflammatory',icon:'OA',pediatric:false,desc:'Movement, strength, and safer ways to manage pain.',overview:'Learn how movement, physical therapy, and pain care may help with osteoarthritis.',summary:'Osteoarthritis care aims to lower pain and protect daily movement. Exercise, strength work, and medicine review may all help.',trial:'osteoarthritis',specialty:'Rheumatology',drug:'naproxen',priorities:[['Daily movement','Track which activities are getting harder.'],['Pain care','Ask about safe pain relief choices.'],['Physical therapy','Build strength and move with less pain.'],['Specialist care','Ask for help if movement keeps getting worse.']]},
  {slug:'eczema',name:'Eczema',category:'Inflammatory',icon:'EC',pediatric:true,desc:'Skin care, triggers, and treatment for flares.',overview:'Learn how daily skin care and the right treatment may lower itching and flares.',summary:'Eczema care starts with gentle skin care and regular moisturizer. Your care team can help find triggers and choose treatment for flares.',trial:'atopic dermatitis',specialty:'Dermatology',drug:'hydrocortisone',priorities:[['Daily skin care','Use gentle products and moisturize often.'],['Flares','Follow the treatment plan for red or itchy skin.'],['Triggers','Track products or exposures that make skin worse.'],['Family routine','Use a plan that everyone can follow.']]},
  {slug:'celiac',name:'Celiac Disease',category:'Inflammatory',icon:'CD',pediatric:false,desc:'Gluten-free food, nutrition checks, and safe kitchens.',overview:'Learn how to avoid gluten, prevent food contact, and check for nutrition problems.',summary:'People with celiac disease need to avoid gluten. Clear food labels, a safe kitchen, and regular care can help.',trial:'celiac disease',specialty:'Gastroenterology',drug:'',priorities:[['Avoid gluten','Learn which foods and labels to check.'],['Nutrition','Ask if blood tests or vitamins are needed.'],['Prevent contact','Keep gluten away from shared food and tools.'],['Follow-up care','Stay in touch with a stomach and bowel doctor.']]},
  {slug:'ibd',name:'Inflammatory Bowel Disease',category:'Inflammatory',icon:'IB',pediatric:false,desc:'Flares, nutrition, medicine, and specialist care.',overview:"Learn about care for Crohn's disease and ulcerative colitis, including symptoms, food, and medicines.",summary:'IBD care includes watching for flares, checking nutrition, and reviewing medicines with a stomach and bowel specialist.',trial:'inflammatory bowel disease',specialty:'Gastroenterology',drug:'mesalamine',priorities:[['Track flares','Write down new or worse symptoms.'],['Nutrition','Ask about weight loss or low vitamin levels.'],['Medicines','Review benefits and side effects.'],['Specialist care','Know when to call the care team.']]},
  {slug:'ibs',name:'Irritable Bowel Syndrome',category:'Other',icon:'IS',pediatric:false,desc:'Food, bowel symptoms, sleep, and stress.',overview:'Learn how food, sleep, stress, and daily habits may affect IBS symptoms.',summary:'IBS is different for each person. A simple symptom record can help you and your doctor look for patterns.',trial:'irritable bowel syndrome',specialty:'Gastroenterology',drug:'',priorities:[['Food patterns','Change one thing at a time.'],['Track symptoms','Note pain, bowel changes, sleep, and activity.'],['Medical care','Ask when more tests or a specialist may help.'],['Stress and sleep','Include sleep and stress support in the plan.']]},
  {slug:'ckd',name:'Chronic Kidney Disease',category:'Metabolic',icon:'KD',pediatric:false,desc:'Kidney tests, medicine safety, and long-term planning.',overview:'Learn how blood and urine tests, medicines, and follow-up visits help protect kidney health.',summary:'Kidney care uses test results over time. Your care team may adjust medicines and watch blood pressure and heart health.',trial:'chronic kidney disease',specialty:'Nephrology',drug:'',priorities:[['Kidney tests','Ask what your results mean over time.'],['Medicine safety','Check before taking a new medicine or supplement.'],['Plan ahead','Talk early about future care needs.'],['Heart health','Keep blood pressure and heart checks on track.']]},
  {slug:'depression',name:'Depression',category:'Mental health',icon:'DP',pediatric:false,desc:'Therapy, medicine, follow-up, and a safety plan.',overview:'Learn about treatment choices, regular follow-up, and help for urgent mental health needs.',summary:'Depression care may include therapy, medicine, support from others, and a safety plan. Regular follow-up helps the care team see what is working.',trial:'depression',specialty:'Psychiatry',drug:'sertraline',priorities:[['Therapy','Ask which type of therapy may fit your needs.'],['Medicines','Review benefits, side effects, and changes.'],['Safety plan','Know who to call during a crisis.'],['Follow-up','Track sleep, mood, and daily activity.']]},
  {slug:'anxiety',name:'Anxiety in Children',category:'Mental health',icon:'AX',pediatric:true,desc:'Home support, school help, and early care.',overview:'Learn how families, schools, and health professionals can support a child with anxiety.',summary:'A child may need support at home, at school, and in health care. Early help can make daily life easier.',trial:'pediatric anxiety',specialty:'Psychiatry',drug:'sertraline',priorities:[['School support','Ask about changes that may help at school.'],['Family tools','Practice the same calming skills at home.'],['Early help','Talk with a doctor when anxiety affects daily life.'],['Safety plan','Know where to get urgent help.']]},
  {slug:'adhd',name:'ADHD',category:'Mental health',icon:'AD',pediatric:true,desc:'Routines, school support, and medicine checks.',overview:'Learn about routines, school plans, behavior support, and medicine follow-up for ADHD.',summary:'ADHD care can include clear routines, school support, coaching, and medicine. The plan should fit the child and family.',trial:'ADHD',specialty:'Psychiatry',drug:'methylphenidate',priorities:[['Daily routines','Use clear steps and reminders.'],['Medicine checks','Track sleep, appetite, benefits, and side effects.'],['School support','Ask about a 504 plan or IEP.'],['Family support','Use the same plan at home and school.']]},
  {slug:'migraine',name:'Migraine',category:'Mental health',icon:'MG',pediatric:false,desc:'Headache patterns, triggers, and treatment choices.',overview:'Learn how to track migraine attacks and review treatment choices with a doctor.',summary:'A headache record can show how often migraine attacks happen and how they affect daily life. That record can help guide care.',trial:'migraine',specialty:'Neurology',drug:'sumatriptan',priorities:[['Track attacks','Note timing, symptoms, and possible triggers.'],['Treat an attack','Ask what to take and when to take it.'],['Prevent attacks','Ask if daily treatment may help.'],['Specialist care','Get help for new or hard-to-treat symptoms.']]},
  {slug:'hiv',name:'HIV',category:'Infectious',icon:'HIV',pediatric:false,desc:'Daily treatment, viral load tests, and long-term care.',overview:'Learn how HIV treatment and regular viral load tests help protect health.',summary:'HIV care includes taking medicine as planned, checking the viral load, and staying connected to a care team.',trial:'HIV',specialty:'Infectious Disease',drug:'emtricitabine',priorities:[['Daily treatment','Take HIV medicine as directed.'],['Viral load','Review test results with your care team.'],['Regular care','Keep visits with an HIV care specialist.'],['Support','Ask for help with cost, transport, or other barriers.']]},
  {slug:'hepatitis',name:'Chronic Hepatitis',category:'Infectious',icon:'HE',pediatric:false,desc:'Treatment, liver tests, and prevention.',overview:'Learn about treatment, liver health checks, and ways to prevent another infection.',summary:'Care depends on the type of hepatitis. Your care team may use medicine and blood tests to protect the liver.',trial:'chronic hepatitis',specialty:'Gastroenterology',drug:'',priorities:[['Finish treatment','Follow the full treatment plan.'],['Liver tests','Review results over time.'],['Prevent infection','Ask how to protect yourself and others.'],['Specialist care','Keep liver or infection care connected.']]},
  {slug:'food-allergy',name:'Food Allergy',category:'Other',icon:'FA',pediatric:true,desc:'Avoiding allergens and being ready for an emergency.',overview:'Learn how to avoid problem foods, keep epinephrine nearby, and share an emergency plan.',summary:'Food allergy care means preventing contact and being ready to act. Family, school, and caregivers should know the plan.',trial:'food allergy',specialty:'Allergy & Immunology',drug:'epinephrine',priorities:[['Avoid allergens','Read labels and prevent food contact.'],['Carry epinephrine','Keep it nearby and know how to use it.'],['School plan','Share clear steps with school staff.'],['Allergy care','Ask about testing and follow-up.']]},
  {slug:'sickle-cell',name:'Sickle Cell Disease',category:'Genetic',icon:'SC',pediatric:true,desc:'Pain care, health checks, medicine, and lifelong support.',overview:'Learn about pain plans, health checks, medicines, and the move from child to adult care.',summary:'Sickle cell disease needs lifelong care. A clear plan can help manage pain, prevent problems, and keep care on track.',trial:'sickle cell disease',specialty:'Hematology & Oncology',drug:'hydroxyurea',priorities:[['Pain plan','Know how to treat pain and when to get help.'],['Health checks','Watch for anemia and organ problems.'],['Medicines','Ask how hydroxyurea may help.'],['Adult care','Plan the move to an adult care team early.']]}
];

const {findConditionMatch,correctResearchTerm}=window.CareneryMatching;
const {buildAppointmentQuestions,buildAppointmentSheet,safeAppointmentFilename}=window.CareneryAppointment;

const categoryOrder=['All','Metabolic','Cardiovascular','Respiratory','Inflammatory','Mental health','Infectious','Genetic','Other','Saved'];
let activeCategory='All';
let favorites=JSON.parse(localStorage.getItem('carenery-favorites')||'[]');
const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>[...r.querySelectorAll(s)];

function route(name){
  $$('.view').forEach(v=>v.classList.toggle('active',v.dataset.view===name));
  $$('[data-route]').forEach(b=>b.classList.toggle('active',b.dataset.route===name));
  history.replaceState(null,'',`#${name}`); window.scrollTo({top:0,behavior:'smooth'});
  if(name==='conditions') setTimeout(()=>$('#conditionSearch').focus({preventScroll:true}),250);
}

function saveFavorites(){localStorage.setItem('carenery-favorites',JSON.stringify(favorites));$('#savedCount').textContent=favorites.length;renderConditions();}
function toggleFavorite(slug){favorites=favorites.includes(slug)?favorites.filter(x=>x!==slug):[slug,...favorites];saveFavorites();showToast(favorites.includes(slug)?'Saved to your care library':'Removed from saved');}
function showToast(text){const t=$('#toast');t.textContent=text;t.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('show'),2200)}

function renderFilters(){
  $('#categoryFilters').innerHTML=categoryOrder.map(c=>`<button class="filter-chip ${c===activeCategory?'active':''}" data-category="${c}">${c}${c==='Saved'?` (${favorites.length})`:''}</button>`).join('');
  $$('[data-category]').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.category;renderFilters();renderConditions()});
}

function conditionCard(c){return `<article class="condition-card"><div class="condition-top"><span class="condition-icon" aria-hidden="true">${c.icon}</span><button class="favorite-toggle ${favorites.includes(c.slug)?'saved':''}" data-favorite="${c.slug}" aria-label="${favorites.includes(c.slug)?'Remove from':'Add to'} saved topics">${favorites.includes(c.slug)?'Saved':'Save'}</button></div><h3>${c.name}</h3><p>${c.desc}</p><div class="condition-meta"><span>${c.pediatric?'<i class="pediatric-tag">Children</i>':c.category}</span><button data-condition="${c.slug}">Open guide</button></div></article>`}
function renderConditions(){
  renderFilters(); const q=$('#conditionSearch').value.trim().toLowerCase();
  let list=conditions.filter(c=>(activeCategory==='All'||c.category===activeCategory||(activeCategory==='Saved'&&favorites.includes(c.slug)))&&(!q||`${c.name} ${c.desc} ${c.category} ${c.priorities.flat().join(' ')}`.toLowerCase().includes(q)));
  $('#conditionGrid').innerHTML=list.map(conditionCard).join(''); $('#emptyResults').hidden=!!list.length;
  if(!list.length){const raw=$('#conditionSearch').value.trim(),research=generalResearch(raw);$('#emptyResultsText').textContent=raw?`There is no reviewed Carenery guide for "${research.term}" yet. You can still search trusted public sources.`:'Try another term or ask Health Copilot.';$('#researchEmpty').hidden=!raw;$('#researchEmpty').textContent=raw?`Research "${research.term}"`:'Research this condition'}
  bindDynamic();
}
function bindDynamic(){
  $$('[data-condition]').forEach(b=>b.onclick=()=>openCondition(b.dataset.condition));
  $$('[data-appointment]').forEach(b=>b.onclick=()=>openAppointmentSheet(conditions.find(c=>c.slug===b.dataset.appointment)));
  $$('[data-favorite]').forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFavorite(b.dataset.favorite)});
}

function buildSearchQuery(c){
  return `"${c.name}" current care guidance clinical trials safety alerts (site:cdc.gov OR site:nih.gov OR site:fda.gov OR site:clinicaltrials.gov)`;
}

function buildAssistantPrompt(c){
  return `Use current CDC, NIH, FDA, CMS, and ClinicalTrials.gov sources to explain ${c.name} in plain language. Cover the main care topics, safety concerns, current research, and direct source links. Keep proven guidance separate from early research. Do not diagnose or give personal treatment advice. Tell the reader to check health decisions with a licensed health professional.`;
}

function buildAgentResearchPrompt(c){
  return `Research ${c.name} with a clear step-by-step plan.\n\n1. Search current CDC, NIH, FDA, CMS, and ClinicalTrials.gov pages. Use original federal sources when possible. Record each page's date.\n2. Explain the main care topics in plain language. Keep proven guidance, active research, and early findings in separate sections.\n3. Find up to five recruiting studies about ${c.trial}. List the NCT number, study status, locations, key eligibility questions, and the ClinicalTrials.gov link. Do not say that a person qualifies.\n4. Explain when a ${c.specialty} specialist may help. Write five questions a family could take to an appointment.\n5. Link each health claim to its source. Point out old pages, missing facts, or sources that disagree.\n\nDo not diagnose, give personal treatment advice, or ask for private health information. End with a short list of facts to check with a licensed health professional.`;
}

function openWebSearch(engine,c){
  const base=engine==='google'?'https://www.google.com/search?q=':'https://www.bing.com/search?q=';
  window.open(base+encodeURIComponent(buildSearchQuery(c)),'_blank','noopener,noreferrer');
}

function copyText(text){
  const fallback=()=>{const box=document.createElement('textarea');box.value=text;box.style.position='fixed';box.style.opacity='0';document.body.appendChild(box);box.select();const copied=document.execCommand('copy');box.remove();return copied?Promise.resolve():Promise.reject()};
  return navigator.clipboard?.writeText?navigator.clipboard.writeText(text).catch(fallback):fallback();
}

function appointmentSelection(){
  const selected=$$('[data-appointment-question]:checked',$('#appointmentDetail')).map(input=>input.value);
  const custom=$('#customAppointmentQuestions')?.value||'';
  return {selected,custom};
}

function appointmentSheetText(c){
  const {selected,custom}=appointmentSelection();
  return buildAppointmentSheet(c,selected,custom,guideSources[c.slug]);
}

function updateAppointmentPreview(c){
  const {selected,custom}=appointmentSelection();
  const questions=[...selected,...window.CareneryAppointment.splitCustomQuestions(custom)];
  const source=guideSources[c.slug];
  $('#appointmentPrint').innerHTML=`<img src="./brand/carenery-verified-lockup.svg" alt="Carenery"/><p class="appointment-label">Appointment question sheet</p><h2 id="appointmentTitle">${c.name}</h2><div class="appointment-lines"><span>Appointment date: ____________________</span><span>Doctor or care professional: ____________________</span></div><h3>Questions to discuss</h3>${questions.length?`<ol>${questions.map(question=>`<li>${escapeHtml(question)}</li>`).join('')}</ol>`:'<p>Select or add at least one question.</p>'}<p class="appointment-source"><b>Guide source:</b> <a href="${source[1]}" target="_blank" rel="noreferrer">${source[0]}</a></p><p class="appointment-disclaimer">Carenery is for information only. A licensed health professional makes medical decisions.</p>`;
}

function downloadAppointmentSheet(c){
  const blob=new Blob([appointmentSheetText(c)],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=safeAppointmentFilename(c.name);document.body.appendChild(link);link.click();link.remove();URL.revokeObjectURL(url);
  showToast('Question sheet downloaded.');
}

function openAppointmentSheet(c){
  if(!c)return;
  const questions=buildAppointmentQuestions(c),source=guideSources[c.slug];
  if($('#conditionDialog').open)$('#conditionDialog').close();
  $('#appointmentDetail').innerHTML=`<header class="appointment-header"><div><span class="appointment-label">Prepare for a care visit</span><h2>${c.name} questions</h2><p>Choose, edit, copy, print, or download a question sheet. Your draft stays in this page and is not uploaded or saved by Carenery.</p></div></header><div class="appointment-layout"><form class="appointment-builder" id="appointmentForm"><fieldset><legend>Choose questions</legend>${questions.map((question,index)=>`<label><input type="checkbox" data-appointment-question value="${escapeHtml(question)}" ${index<5?'checked':''}/><span>${escapeHtml(question)}</span></label>`).join('')}</fieldset><label class="custom-questions"><span>Add your own questions, one per line</span><textarea id="customAppointmentQuestions" rows="4" placeholder="Example: What should we track at home?"></textarea><small>Nothing typed here is stored. Leave out private details if you plan to share the file.</small></label><div class="appointment-actions"><button type="button" class="primary-button" id="copyAppointment">Copy selected</button><button type="button" id="printAppointment">Print</button><button type="button" id="downloadAppointment">Download .txt</button></div><p class="appointment-privacy">Built from the ${c.name} guide and its care topics. Source: <a href="${source[1]}" target="_blank" rel="noreferrer">${source[0]}</a>.</p></form><section class="appointment-print" id="appointmentPrint" aria-live="polite"></section></div>`;
  $('#appointmentForm').addEventListener('input',()=>updateAppointmentPreview(c));
  $('#copyAppointment').onclick=()=>copyText(appointmentSheetText(c)).then(()=>showToast('Appointment questions copied.')).catch(()=>showToast('Copy failed. Select the preview text instead.'));
  $('#printAppointment').onclick=()=>window.print();
  $('#downloadAppointment').onclick=()=>downloadAppointmentSheet(c);
  updateAppointmentPreview(c);
  $('#appointmentDialog').showModal();
}

function continueWithAssistant(provider,c){
  const target=provider==='gemini'?'https://gemini.google.com/app':'https://copilot.microsoft.com/';
  window.open(target,'_blank','noopener,noreferrer');
  copyText(buildAssistantPrompt(c)).then(()=>showToast(`Research prompt copied. Paste it into ${provider==='gemini'?'Gemini':'Copilot'}.`)).catch(()=>showToast('The service opened. Copy the prompt from the preview.'));
}

function continueWithAgent(provider,c){
  const gemini=provider==='gemini';
  const target=gemini?'https://gemini.google.com/app':'https://go.microsoft.com/fwlink/?linkid=2334245';
  const mode=gemini?'Deep Research':'Researcher';
  window.open(target,'_blank','noopener,noreferrer');
  copyText(buildAgentResearchPrompt(c)).then(()=>showToast(`Research brief copied. Choose ${mode}, then paste.`)).catch(()=>showToast(`${mode} opened. Copy the brief from the preview.`));
}

function openCondition(slug){
  const c=conditions.find(x=>x.slug===slug); if(!c)return;
  const guideSource=guideSources[c.slug];
  const sources=commonSources.map(s=>`<a class="source-item" href="${s[2]}" target="_blank" rel="noreferrer"><b>${s[0]}</b><small>${s[1]}</small></a>`).join('');
  const priorities=c.priorities.map((p,index)=>`<div class="priority"><span>${index+1}</span><p><b>${p[0]}</b><small>${p[1]}</small><a class="priority-source" href="${guideSource[1]}" target="_blank" rel="noreferrer"><span class="evidence-pill official">MedlinePlus source</span>${guideSource[0]}</a></p></div>`).join('');
  $('#conditionDetail').innerHTML=`
    <header class="condition-detail-hero">
      <div class="detail-kicker"><span class="condition-code">${c.icon}</span>${c.pediatric?'Guide for children and families':'Health guide'}</div>
      <h2 id="conditionTitle">${c.name}</h2>
      <p>${c.overview}</p>
      <div class="detail-actions"><button class="light-button" data-appointment="${c.slug}">Prepare appointment questions</button><button class="save-guide" data-detail-favorite="${c.slug}">${favorites.includes(c.slug)?'Saved':'Save this guide'}</button><button class="save-guide" data-ask="Show trusted sources for ${c.name}">Ask Health Copilot</button></div>
    </header>
    <div class="detail-body">
      <p class="detail-summary"><b>Guide summary.</b> ${c.summary}<span class="summary-source"><span class="evidence-pill official">MedlinePlus source</span><a href="${guideSource[1]}" target="_blank" rel="noreferrer">${guideSource[0]}</a></span></p>
      <section class="detail-section"><h3>Main care topics</h3><p class="evidence-explainer">These points are based on the MedlinePlus page linked below. They are a starting point, not a personal care plan.</p><div class="priority-grid">${priorities}</div></section>
      <section class="detail-section"><h3>Search public records</h3><div class="live-grid">
        <div class="live-card"><span class="evidence-pill research">Recruiting studies</span><h4>Find a clinical trial</h4><p>Search ClinicalTrials.gov by condition and state. A result does not mean that you qualify.</p><form class="inline-form" id="trialForm"><input id="trialState" maxlength="2" value="CA" aria-label="Two-letter state code for clinical trials"/><button>Find studies</button></form><div class="live-results" id="trialResults"></div></div>
        <div class="live-card"><span class="evidence-pill official">Public provider records</span><h4>Find a specialist</h4><p>Search the CMS NPI Registry for ${c.specialty} providers in your state.</p><form class="inline-form" id="providerForm"><input id="providerState" maxlength="2" value="CA" aria-label="Two-letter state code for providers"/><button>Find providers</button></form><div class="live-results" id="providerResults"></div></div>
      </div></section>
      <section class="detail-section research-section"><div class="research-card">
        <div><span class="research-kicker">More research</span><h3>Search trusted health websites</h3><p>Carenery uses the condition name only. It does not send your messages, saved topics, or personal health details.</p></div>
        <div class="research-actions"><button data-web-search="google"><span class="service-mark google-mark">G</span><b>Search Google</b><small>Federal websites</small></button><button data-web-search="bing"><span class="service-mark bing-mark">B</span><b>Search Bing</b><small>Federal websites</small></button><button data-assistant="gemini"><span class="service-mark gemini-mark">G</span><b>Open Gemini</b><small>Copy a research prompt</small></button><button data-assistant="copilot"><span class="service-mark copilot-service-mark">M</span><b>Open Microsoft Copilot</b><small>Copy a research prompt</small></button></div>
        <details class="prompt-preview"><summary>Read the research prompt</summary><p>${escapeHtml(buildAssistantPrompt(c))}</p></details>
        <div class="agentic-panel"><div class="agentic-copy"><span class="agentic-badge">In-depth research</span><h4>Use a step-by-step research brief</h4><p>Some accounts include Gemini Deep Research or Microsoft Copilot Researcher. The brief also works in a normal chat.</p></div><div class="agentic-actions"><button data-agent-assistant="gemini"><span class="service-mark gemini-mark">G</span><b>Gemini Deep Research</b><small>Copy brief and open Gemini</small></button><button data-agent-assistant="copilot"><span class="service-mark copilot-service-mark">M</span><b>Copilot Researcher</b><small>Copy brief and open Copilot</small></button></div><details class="prompt-preview agent-prompt-preview"><summary>Read the research brief</summary><p>${escapeHtml(buildAgentResearchPrompt(c))}</p></details><p class="agent-availability">Access depends on the service, account, plan, age, region, and work or school settings.</p></div>
        <p class="third-party-note">Google, Bing, Gemini, and Microsoft Copilot have their own privacy rules. Carenery opens these services only after you click. Do not share private health details.</p>
      </div></section>
      <section class="detail-section"><h3>Sources used by Carenery</h3><div class="evidence-legend"><span><i class="evidence-pill official">Health information</i> Federal sources</span><span><i class="evidence-pill research">Research studies</i> Public study records</span></div><div class="source-list">${sources}</div></section>
      <p class="disclaimer">Carenery is for information only. Ask a doctor or other licensed health professional before making a health decision.</p>
    </div>`;
  $('[data-detail-favorite]').onclick=()=>{toggleFavorite(c.slug);openCondition(c.slug)};
  $('[data-appointment]',$('#conditionDetail')).onclick=()=>openAppointmentSheet(c);
  $('[data-ask]').onclick=()=>{const prompt=$('[data-ask]').dataset.ask;$('#conditionDialog').close();route('copilot');sendMessage(prompt)};
  $('#trialForm').onsubmit=e=>{e.preventDefault();loadTrials(c,$('#trialState').value)};
  $('#providerForm').onsubmit=e=>{e.preventDefault();loadProviders(c,$('#providerState').value)};
  $$('[data-web-search]',$('#conditionDetail')).forEach(b=>b.onclick=()=>openWebSearch(b.dataset.webSearch,c));
  $$('[data-assistant]',$('#conditionDetail')).forEach(b=>b.onclick=()=>continueWithAssistant(b.dataset.assistant,c));
  $$('[data-agent-assistant]',$('#conditionDetail')).forEach(b=>b.onclick=()=>continueWithAgent(b.dataset.agentAssistant,c));
  $('#conditionDialog').showModal();
}

async function loadTrials(c,state){
  const el=$('#trialResults');state=state.trim().toUpperCase();if(!usStates[state]){el.innerHTML='<small>Enter a valid two-letter US state.</small>';return}const stateName=usStates[state];el.innerHTML=`<small>Searching for recruiting studies in ${stateName}...</small>`;
  try{const url=`https://clinicaltrials.gov/api/v2/studies?query.cond=${encodeURIComponent(c.trial)}&query.locn=${encodeURIComponent(stateName)}&filter.overallStatus=RECRUITING&pageSize=10`;const r=await fetch(url);if(!r.ok)throw Error();const data=await r.json(),seen=new Set();const rows=(data.studies||[]).filter(s=>{const p=s.protocolSection||{},id=p.identificationModule?.nctId,locations=p.contactsLocationsModule?.locations||[],hasRecruitingSite=locations.some(x=>x.state?.toLowerCase()===stateName.toLowerCase()&&x.status==='RECRUITING');if(!id||seen.has(id)||!hasRecruitingSite)return false;seen.add(id);return true}).slice(0,5).map(s=>{const p=s.protocolSection||{},id=p.identificationModule?.nctId,title=p.identificationModule?.briefTitle||'Untitled study',e=p.eligibilityModule||{},locations=p.contactsLocationsModule?.locations||[],local=locations.find(x=>x.state?.toLowerCase()===stateName.toLowerCase()&&x.status==='RECRUITING'),age=[e.minimumAge,e.maximumAge].filter(Boolean).join(' to ')||'See study record',sex=e.sex&&e.sex!=='ALL'?titleCase(e.sex):'All sexes';return `<div class="live-result trial-result"><span class="evidence-pill research">Recruiting</span><a href="https://clinicaltrials.gov/study/${id}" target="_blank" rel="noreferrer"><b>${title}</b></a><small>${id} | ${age} | ${sex}</small><small>${local?.city?`${local.city}, ${local.state||stateName}`:'See the study record for the location'}</small></div>`}).join('');const checklist=`<div class="eligibility-check"><b>Questions for the study team</b><ul><li>Does the diagnosis match the study?</li><li>Is the person in the right age group?</li><li>Are current or past medicines allowed?</li><li>How many visits are needed?</li><li>Does the care team think the study is safe?</li></ul><small>Only the study team can decide who qualifies.</small></div>`;el.innerHTML=(rows||`<small>No matching study sites were found in ${stateName}. Try another state or open ClinicalTrials.gov.</small>`)+checklist}catch{el.innerHTML=`<small>Study results could not load. <a target="_blank" rel="noreferrer" href="https://clinicaltrials.gov/search?cond=${encodeURIComponent(c.trial)}&locStr=${encodeURIComponent(stateName)}&aggFilters=status%3Arec">Open ClinicalTrials.gov</a></small>`}
}
async function loadProviders(c,state){
  const el=$('#providerResults');state=state.trim().toUpperCase();if(!/^[A-Z]{2}$/.test(state)){el.innerHTML='<small>Enter a valid two-letter state.</small>';return}el.innerHTML='<small>Searching the CMS registry...</small>';
  try{const url=`https://npiregistry.cms.hhs.gov/api/?version=2.1&taxonomy_description=${encodeURIComponent(c.specialty)}&state=${state}&limit=3`;const r=await fetch(url);if(!r.ok)throw Error();const data=await r.json();const rows=(data.results||[]).map(x=>{const b=x.basic||{},a=(x.addresses||[]).find(y=>y.address_purpose==='LOCATION')||x.addresses?.[0]||{},name=b.organization_name||`${b.first_name||''} ${b.last_name||''}`.trim();return `<div class="live-result"><b>${name}</b><small>${a.city?`${titleCase(a.city)}, ${a.state}`:'Location unavailable'}</small></div>`}).join('');el.innerHTML=rows||'<small>No matching providers found.</small>'}catch{el.innerHTML='<small>The CMS search is unavailable right now. Please try again.</small>'}
}
function titleCase(s){return s.toLowerCase().replace(/\b\w/g,x=>x.toUpperCase())}

const messages=$('#messages');
function addMessage(role,text,condition,research,match){const el=document.createElement('div');el.className=`message ${role}`;const researchCard=research?`<div class="general-research"><span class="research-kicker">Search trusted sources</span><b>Research "${escapeHtml(research.term)}"</b>${research.correctedFrom?`<small>Spelling note: We changed "${escapeHtml(research.correctedFrom)}" to "${escapeHtml(research.term)}."</small>`:'<small>Carenery does not have a reviewed guide for this topic yet.</small>'}<div class="general-actions"><button data-general-action="official">NIH and MedlinePlus<small>Search official health pages</small></button><button data-general-action="rare">Rare disease sources<small>Search GARD and NIH</small></button><button data-general-action="trials">ClinicalTrials.gov<small>Search public study records</small></button><button data-general-action="copy">Copy a research brief<small>Use it with another service</small></button></div><p>Check the condition name and each source. Ask a licensed health professional before making a health decision.</p></div>`:'';const matchNote=match&&match.method==='spelling-aware'?`<small class="match-note">Text match: spelling-aware (${Math.round(match.score*100)}%)</small>`:'';const avatar=role==='user'?'You':'<img src="./brand/carenery-app-icon.svg" alt="">';el.innerHTML=`<span class="message-avatar">${avatar}</span><div class="message-bubble"><p>${escapeHtml(text).replace(/\n/g,'<br>')}</p>${condition?`<div class="suggested-guide"><span><b>${condition.name}</b><br><small>Reviewed health guide</small>${matchNote}</span><button data-condition="${condition.slug}">Open guide</button></div>`:''}${researchCard}</div>`;messages.appendChild(el);messages.scrollTop=messages.scrollHeight;bindDynamic();if(research)$$('[data-general-action]',el).forEach(b=>b.onclick=()=>openGeneralResearch(b.dataset.generalAction,research.term))}
function escapeHtml(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function normalizedWords(s){return ` ${s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()} `}
function conditionMatch(q){return findConditionMatch(q,conditions,conditionAliases)}
function matchedCondition(q){return conditionMatch(q)?.condition||null}
function generalResearch(q){return correctResearchTerm(q,researchVocabulary)}
function isFeatureQuestion(q){const s=q.toLowerCase();return /\b(trial|provider|specialist|near me)\b/.test(s)||/^(hi|hello|hey|thanks|thank you|help)[!. ]*$/.test(s)}
function buildGeneralPrompt(term){return `Research ${term} using current MedlinePlus, NIH GARD, NIH, FDA, and ClinicalTrials.gov sources. Explain the condition in plain language. List other names or types when helpful. Keep proven facts separate from active research. Give direct links to each source. Point out spelling questions, old pages, missing facts, or sources that disagree. Do not diagnose or give personal treatment advice. End with questions to ask a licensed health professional.`}
function openGeneralResearch(action,term){let url;if(action==='official')url='https://www.google.com/search?q='+encodeURIComponent(`${term} (site:medlineplus.gov OR site:nih.gov)`);if(action==='rare')url='https://www.google.com/search?q='+encodeURIComponent(`${term} (site:rarediseases.info.nih.gov OR site:medlineplus.gov/genetics)`);if(action==='trials')url='https://clinicaltrials.gov/search?cond='+encodeURIComponent(term);if(action==='copy'){copyText(buildGeneralPrompt(term)).then(()=>showToast('Research brief copied. Paste it into the service you choose.')).catch(()=>showToast('Copy failed. Select and copy the condition name.'));return}window.open(url,'_blank','noopener,noreferrer')}
function replyFor(q,c){const s=q.toLowerCase();if(s.includes('trial'))return `ClinicalTrials.gov lists current research studies. Open a health guide to search by state. The study team decides who can join. Review the study details with your doctor.`;if(s.includes('provider')||s.includes('specialist')||s.includes('near me'))return `Carenery searches the public CMS NPI Registry for specialists by state. Open a health guide and enter a two-letter state code. Call the office to check hours, insurance, and new patient visits.`;if(c)return `${c.summary}\n\nOpen the ${c.name} guide to read four care topics and the MedlinePlus source. Write down questions for your doctor.`;const research=generalResearch(q);return `Carenery does not have a reviewed guide for ${research.term} yet. You can search NIH, MedlinePlus, GARD, or ClinicalTrials.gov. This is health information, not a diagnosis.`}
function sendMessage(text){const q=(text||$('#chatInput').value).trim();if(!q)return;addMessage('user',q);$('#chatInput').value='';const typing=document.createElement('div');typing.className='message typing';typing.innerHTML='<span class="message-avatar"><img src="./brand/carenery-app-icon.svg" alt=""></span><div class="message-bubble"><span>.</span> <span>.</span> <span>.</span></div>';messages.appendChild(typing);messages.scrollTop=messages.scrollHeight;setTimeout(()=>{typing.remove();const match=conditionMatch(q),c=match?.condition||null,research=!c&&!isFeatureQuestion(q)?generalResearch(q):null;addMessage('assistant',replyFor(q,c),c,research,match)},350)}
function resetChat(){messages.innerHTML='';addMessage('assistant','Welcome to Carenery. Type a rare or long-term condition. I will open a reviewed guide or help you search trusted public sources.')}

$$('[data-route]').forEach(b=>b.addEventListener('click',()=>{route(b.dataset.route);if(b.id==='researchEmpty'){const raw=$('#conditionSearch').value.trim();if(raw){const research=generalResearch(raw);sendMessage(`Tell me about ${research.term}`)}}}));
$('#conditionSearch').addEventListener('input',renderConditions);
$('#savedButton').onclick=()=>{activeCategory='Saved';route('conditions');renderConditions()};
$('#closeDialog').onclick=()=>$('#conditionDialog').close();
$('#conditionDialog').addEventListener('click',e=>{if(e.target===$('#conditionDialog'))$('#conditionDialog').close()});
$('#closeAppointment').onclick=()=>$('#appointmentDialog').close();
$('#appointmentDialog').addEventListener('click',e=>{if(e.target===$('#appointmentDialog'))$('#appointmentDialog').close()});
$('#chatForm').onsubmit=e=>{e.preventDefault();sendMessage()};
$('#chatInput').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage()}});
$('#chatInput').addEventListener('input',e=>{e.target.style.height='auto';e.target.style.height=Math.min(e.target.scrollHeight,110)+'px'});
$('#clearChat').onclick=resetChat;
$$('[data-prompt]').forEach(b=>b.onclick=()=>sendMessage(b.dataset.prompt));

renderConditions();resetChat();$('#savedCount').textContent=favorites.length;bindDynamic();
route(['home','conditions','why','models','copilot'].includes(location.hash.slice(1))?location.hash.slice(1):'home');
