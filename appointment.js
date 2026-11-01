(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root)root.CareneryAppointment=api;
})(typeof window!=='undefined'?window:globalThis,function(){
  function buildAppointmentQuestions(condition){
    const topicQuestions=(condition.priorities||[]).map(priority=>`What should we know about ${priority[0].toLowerCase()}?`);
    return [...topicQuestions,'What changes should we track before the next visit?','Which medicines, tests, or follow-up visits should we review?','What warning signs mean we should get help sooner?'];
  }

  function splitCustomQuestions(text){
    return String(text||'').split(/\n+/).map(question=>question.trim()).filter(Boolean);
  }

  function buildAppointmentSheet(condition,selectedQuestions,customText,source){
    const questions=[...selectedQuestions,...splitCustomQuestions(customText)];
    return [
      `Carenery appointment questions: ${condition.name}`,
      '',
      'Appointment date: ____________________',
      'Doctor or care professional: ____________________',
      '',
      'Questions to discuss:',
      ...questions.map(question=>`[ ] ${question}`),
      '',
      `Guide source: ${source[0]}`,
      source[1],
      '',
      'Carenery is for information only. A licensed health professional makes medical decisions.'
    ].join('\n');
  }

  function safeAppointmentFilename(name){
    return `carenery-${String(name||'appointment').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}-questions.txt`;
  }

  return {buildAppointmentQuestions,splitCustomQuestions,buildAppointmentSheet,safeAppointmentFilename};
});
