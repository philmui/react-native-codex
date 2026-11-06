(()=>{
'use strict';
const one=(s,r=document)=>r.querySelector(s),all=(s,r=document)=>Array.from(r.querySelectorAll(s));
const read=(k,f)=>{try{return localStorage.getItem('cs147l-study:'+k)||f}catch{return f}};
const save=(k,v)=>{try{localStorage.setItem('cs147l-study:'+k,v)}catch{}};
function setSize(value){const valid=value==='large'?'large':'comfortable';document.documentElement.dataset.reading=valid;all('[data-reading-size]').forEach(s=>s.value=valid);save('reading-size',valid)}
setSize(read('reading-size','comfortable'));
all('[data-reading-size]').forEach(s=>s.addEventListener('change',()=>setSize(s.value)));
all('[data-jump]').forEach(s=>s.addEventListener('change',()=>{if(s.value){location.hash=s.value;const el=document.getElementById(s.value);if(el){el.setAttribute('tabindex','-1');el.focus({preventScroll:true})}}}));
function openHash(){let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const el=document.getElementById(id);if(!el)return;for(let p=el;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;}
openHash();addEventListener('hashchange',openHash);
const topics=window.STUDY_FOCUS;if(!topics||!one('.learning-workspace'))return;
const modes=['understand','example','practice','check'],params=new URLSearchParams(location.search);
let selected=params.get('skill')||read('focus-topic','functions'),mode=params.get('view')||read('focus-mode','understand');
if(!topics.some(t=>t.id===selected))selected='functions';if(!modes.includes(mode))mode='understand';
function persist(){save('focus-topic',selected);save('focus-mode',mode);try{const u=new URL(location.href);u.searchParams.set('skill',selected);u.searchParams.set('view',mode);u.hash='explore';history.replaceState(null,'',u)}catch{}}
function render(announce=false){
 all('[data-topic]').forEach(section=>{
  section.hidden=section.dataset.topic!==selected;
  all('[role=tab]',section).forEach(tab=>{const active=tab.dataset.mode===mode;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1});
  all('[role=tabpanel]',section).forEach(panel=>panel.hidden=panel.dataset.panel!==mode);
 });
 all('[name=focus-skill]').forEach(i=>i.checked=i.value===selected);one('#skill-select').value=selected;
 const topic=topics.find(t=>t.id===selected),label={understand:'Understand',example:'Example',practice:'Try it',check:'Self-check'}[mode];
 one('#saved-place').textContent=`Your place: ${topic.title} · ${label}. Saved in this browser when storage is available.`;
 if(announce)one('#focus-announcement').textContent=`Showing ${topic.title}: ${label}.`;
}
function changeTopic(id){selected=id;render(true);persist()}
function changeMode(value,focus=false){mode=value;render();persist();if(focus)one(`#tab-${selected}-${mode}`).focus()}
all('[name=focus-skill]').forEach(i=>i.addEventListener('change',()=>changeTopic(i.value)));
one('#skill-select').addEventListener('change',e=>changeTopic(e.target.value));
all('.mode-tabs').forEach(list=>{
 list.addEventListener('click',e=>{const tab=e.target.closest('[role=tab]');if(tab)changeMode(tab.dataset.mode)});
 list.addEventListener('keydown',e=>{const tab=e.target.closest('[role=tab]');if(!tab)return;let i=modes.indexOf(tab.dataset.mode);if(e.key==='ArrowRight')i=(i+1)%modes.length;else if(e.key==='ArrowLeft')i=(i+modes.length-1)%modes.length;else if(e.key==='Home')i=0;else if(e.key==='End')i=modes.length-1;else return;e.preventDefault();changeMode(modes[i],true)});
});
all('[data-switch]').forEach(b=>b.addEventListener('click',()=>changeMode(b.dataset.switch,true)));
for(const t of topics){
 const section=one(`[data-topic="${t.id}"]`),walk=one('.walkthrough',section);let step=0;
 one('.copy',walk).dataset.copySource=t.example;
 function showStep(){const [lines,explanation]=t.steps[step];all('[data-code-line]',walk).forEach(line=>line.classList.toggle('line-active',lines.includes(Number(line.dataset.codeLine))));one('.step-explanation',walk).textContent=explanation;one('.step-count',walk).textContent=`Part ${step+1} of ${t.steps.length}`;one('[data-step="-1"]',walk).disabled=step===0;one('[data-step="1"]',walk).disabled=step===t.steps.length-1}
 all('[data-step]',walk).forEach(b=>b.addEventListener('click',()=>{step=Math.max(0,Math.min(t.steps.length-1,step+Number(b.dataset.step)));showStep()}));showStep();
 const form=one('[data-focus-quiz]',section);
 form.addEventListener('submit',e=>{e.preventDefault();const choice=one('input:checked',form),out=one('.quiz-result',form);if(!choice){out.textContent='Choose an answer, then check the reasoning.';return}const n=Number(choice.value);out.textContent=(n===t.correct?'Yes. ':'Take another look. ')+t.responses[n];out.dataset.correct=String(n===t.correct)});
 form.addEventListener('change',()=>{const out=one('.quiz-result',form);out.textContent='';delete out.dataset.correct});
}
render();save('focus-topic',selected);save('focus-mode',mode);
const query=one('#library-query'),results=one('#library-results'),status=one('#library-search-status'),library=window.STUDY_SEARCH||[];
function rank(item,q){return 4*Number(item.url.split('#')[1]?.toLowerCase().includes(q))+3*Number(item.title.toLowerCase().includes(q))+Number(item.category==='Concept')}
function search(){const q=query.value.trim().toLocaleLowerCase();results.replaceChildren();if(q.length<2){results.hidden=true;status.textContent=q?'Type at least two characters.':'Try “state”, “TextInput”, or “cleanup”.';return}
 const words=q.split(/\s+/),matches=library.filter(x=>words.every(w=>x.terms.toLocaleLowerCase().includes(w))).sort((a,b)=>rank(b,q)-rank(a,q));
 results.hidden=matches.length===0;status.textContent=matches.length?`${matches.length} match${matches.length===1?'':'es'}${matches.length>12?'; showing the first 12. Refine your search for fewer results.':'.'}`:'No matches yet. Try a broader term such as “state” or “map”.';
 for(const item of matches.slice(0,12)){const li=document.createElement('li'),a=document.createElement('a'),cat=document.createElement('small'),label=document.createElement('span');a.href=item.url;cat.textContent=item.category;label.textContent=item.title;a.append(cat,label);li.append(a);results.append(li)}
}
query.addEventListener('input',search);query.addEventListener('keydown',e=>{if(e.key==='Escape'){query.value='';search()}});one('#clear-library').addEventListener('click',()=>{query.value='';search();query.focus()});
})();
