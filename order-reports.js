// One-page customer order form prototype. No backend or payment processing is connected.
const REPORTS=[
 {id:'dob',name:'Advanced DOB Report',price:257,icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 3v4M17 3v4M3 10h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 14h3m-3 3h3m3-3h2m-2 3h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,desc:'Explore insights based on your date of birth.',locked:true},
 {id:'mobile',name:'Advanced Mobile Numerology',price:370,icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 5h4M10.5 18.5h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/></svg>`,desc:'An advanced numerology perspective on your mobile number.'},
 {id:'name',name:'Name Numerology Report',price:370,icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16.5-.8 4.3 4.3-.8L20 7.5 16.5 4 4 16.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m14.8 5.7 3.5 3.5M4 16.5l3.5 3.5" stroke="currentColor" stroke-width="1.8"/><path d="M4 4h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,desc:'Explore the numerological interpretation of your name.'},
 {id:'business',name:'Business Partner Compatibility',price:500,icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18M5 20V8l7-4 7 4v12M9 20v-5h6v5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 10h.01M15 10h.01" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,desc:'Explore numerology-based compatibility for business partners.'},
 {id:'love',name:'Love Compatibility',price:370,icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.1-8.8 11-8.8 11s-8.8-5.9-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M7.5 11.5h2l1.2-2.2 2.1 4.3 1.2-2.1h2.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,desc:'Explore compatibility through numerology.'},
 {id:'marriage',name:'Match Making',price:500,icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="13" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="15" cy="13" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m12 3 1.1 1.5L15 5l-1.9.5L12 7l-1.1-1.5L9 5l1.9-.5L12 3Z" fill="currentColor"/></svg>`,desc:'Explore numerology-based compatibility for marriage and match making.'},
 {id:'child',name:'Child Personality',price:500,icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 11h.01M15 11h.01M9 15c1.8 1.8 4.2 1.8 6 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 4.5 6.8 2.8M16 4.5l1.2-1.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,desc:'A numerology-based perspective on a child’s personality patterns.'}
];
const CONSULTATION_PRICES={'Audio Call':1500,'Video Call':2300};
const EXTRA_FIELDS={
 child:{title:'Child Personality Numerology',fields:[
  ['childName','Child Name','text',true,'e.g. Aarav Sharma'],
  ['childDob','Date of Birth','date',true,''],
  ['childBirthTime','Birth Time','time',false,''],
  ['childNickName','Nick Name','text',false,'e.g. Aaru'],
  ['fatherDob',"Father's DOB",'date',false,''],
  ['motherDob',"Mother's DOB",'date',false,'']
 ]},
 love:{title:'Love Compatibility',fields:[
  ['loveNameA','Full Name (A)','text',true,'e.g. Aarav Sharma'],
  ['loveDobA','Date of Birth (A)','date',true,''],
  ['loveGenderA','Gender (A)','text',false,''],
  ['loveNameB','Full Name (B)','text',true,'e.g. Shravani Pandey'],
  ['loveDobB','Date of Birth (B)','date',true,''],
  ['loveGenderB','Gender (B)','text',false,''],
  ['relationshipStage','Relationship Stage','text',false,'Enter relationship stage']
 ]},
 business:{title:'Business Partner Compatibility',fields:[
  ['businessNameA','Full Name (A)','text',true,'e.g. Aarav Sharma'],
  ['businessDobA','Date of Birth (A)','date',true,''],
  ['businessBirthTimeA','Birth Time (A)','time',false,''],
  ['businessRoleA','Role in Business (A)','text',false,'Founder'],
  ['businessNameB','Full Name (B)','text',true,'e.g. Shravani Pandey'],
  ['businessDobB','Date of Birth (B)','date',true,''],
  ['businessBirthTimeB','Birth Time (B)','time',false,''],
  ['businessRoleB','Role in Business (B)','text',false,'Co-Founder'],
  ['proposedBusinessName','Proposed Business Name','text',false,'e.g. Lumen Ventures'],
  ['legalEntity','Legal Entity','text',false,'None'],
  ['industryField','Industry / Field','text',false,'Start typing — e.g. EdTech, Fintech'],
  ['plannedLaunchMonth','Planned Launch Month','month',false,'']
 ]},
 marriage:{title:'Marriage Compatibility / Match Making',fields:[
  ['marriageNameA','Full Name (A)','text',true,'e.g. Aarav Sharma'],
  ['marriageDobA','Date of Birth (A)','date',true,''],
  ['marriageBirthTimeA','Birth Time (A)','time',false,''],
  ['marriageBirthPlaceA','Place of Birth (A)','text',false,'e.g. Pune'],
  ['marriageMobileA','Mobile (A)','tel',false,'e.g. 9876543210'],
  ['marriageGenderA','Gender (A)','text',false,'Male'],
  ['marriageNameB','Full Name (B)','text',true,'e.g. Shravani Pandey'],
  ['marriageDobB','Date of Birth (B)','date',true,''],
  ['marriageBirthTimeB','Birth Time (B)','time',false,''],
  ['marriageBirthPlaceB','Place of Birth (B)','text',false,'e.g. Pune'],
  ['marriageMobileB','Mobile (B)','tel',false,'e.g. 9876543210'],
  ['marriageGenderB','Gender (B)','text',false,'Female']
 ]}
};

const form=document.querySelector('#reportOrderForm');
const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
const grid=document.querySelector('#reportGrid');
grid.innerHTML=REPORTS.map(r=>`<label class="report-option report-row ${r.locked?'locked-report':''}"><input type="checkbox" data-report="${r.id}" ${r.locked?'checked disabled':''}><span class="report-icon" aria-hidden="true">${r.icon}</span><span class="report-name">${r.name}${r.locked?'<small>Required</small>':''}</span><strong class="report-price">${money(r.price)}</strong></label>`).join('');
const selected=()=>REPORTS.filter(r=>document.querySelector(`[data-report="${r.id}"]`)?.checked);
const consultationOn=()=>document.querySelector('#consultation').checked;
const consultationType=()=>form.querySelector('input[name="consultationType"]:checked')?.value||'Audio Call';
const consultationPrice=()=>CONSULTATION_PRICES[consultationType()];
const subtotal=()=>selected().reduce((s,r)=>s+r.price,0)+(consultationOn()?consultationPrice():0);
const offerEligible=()=>selected().length>1;
const discount=()=>offerEligible()?Math.round(subtotal()*0.25):0;
const total=()=>subtotal()-discount();

function renderExtraSections(){
 const chosen=selected().map(r=>r.id).filter(id=>EXTRA_FIELDS[id]);
 const area=document.querySelector('#compatibilityArea');
 area.hidden=chosen.length===0;
 const saved={};
 document.querySelectorAll('[data-extra-field]').forEach(el=>{saved[el.name]={value:el.value,edited:el.dataset.userEdited==='true'};});
 document.querySelector('#compatibilityPlaceholders').innerHTML=chosen.map(id=>{
  const cfg=EXTRA_FIELDS[id];
  const fields=cfg.fields.map(([name,label,type,required,placeholder])=>{
   const req=required?' required':'';
   const value=(type==='text' && ['businessRoleA','businessRoleB','legalEntity','marriageGenderA','marriageGenderB'].includes(name))?` value="${placeholder}"`:'';
   const ph=placeholder && !value?` placeholder="${placeholder}"`:'';
   return `<label class="extra-field"><span class="field-label">${label}${required?' <em>*</em>':''}</span><input name="${name}" type="${type}" data-extra-field="${name}"${req}${ph}${value}></label>`;
  }).join('');
  return `<details class="extra-section" data-extra-section="${id}"><summary><span class="extra-summary-left"><input type="checkbox" checked disabled aria-label="${cfg.title} selected"><span>${cfg.title}</span></span><small>View details</small></summary><div class="extra-grid">${fields}</div></details>`;
 }).join('');
 Object.entries(saved).forEach(([name,data])=>{
  const field=form.querySelector(`[name="${name}"]`);
  if(field){field.value=data.value;if(data.edited)field.dataset.userEdited='true';}
 });
}

function updateSummary(){
 const chosen=selected();
 document.querySelector('#selectionCount').textContent=`${chosen.length} selected`;
 const on=consultationOn();
 document.querySelector('#consultationTypes').hidden=!on;
 document.querySelectorAll('.consult-type').forEach(el=>el.classList.toggle('selected',el.querySelector('input').checked));
 document.querySelector('#reviewReports').innerHTML=chosen.map(r=>`<div class="review-line"><span>${r.name}</span><b>${money(r.price)}</b></div>`).join('');
 document.querySelector('#reviewOptions').innerHTML=`<div class="review-line"><span>${on?`Personal Consultation · ${consultationType()}`:'No consultation selected'}</span><b>${on?money(consultationPrice()):'—'}</b></div>`;

 document.querySelector('#reviewTotal').textContent=money(total());
 document.querySelector('#reviewTotalNote').textContent=offerEligible()?`25% discount applied · You save ${money(discount())}. Consultation is included.`:'Select one more report to unlock 25% off your reports and consultation.';
 document.querySelector('#stickyTotal').textContent=money(total());
 document.querySelector('#stickyOfferNote').textContent=offerEligible()?`25% off applied · Save ${money(discount())}`:'Select 2+ reports for 25% off';
}
function refresh(){
 renderExtraSections();
 syncPersonAFields();
 updateSummary();
}
grid.addEventListener('change',refresh);
document.querySelector('#consultation').addEventListener('change',refresh);
form.querySelectorAll('input[name="consultationType"],input[name="delivery"]').forEach(el=>el.addEventListener('change',updateSummary));
form.addEventListener('input',e=>{if(e.target.matches('input'))e.target.removeAttribute('aria-invalid');});
refresh();

function syncPersonAFields(){
 const values={
  fullName:form.elements.fullName.value,
  dob:form.elements.dob.value,
  birthTime:form.elements.birthTime.value,
  birthPlace:form.elements.birthPlace.value,
  mobile:form.elements.mobile.value,
  gender:form.elements.gender.value
 };
 const map={
  childName:'fullName',childDob:'dob',
  loveNameA:'fullName',loveDobA:'dob',loveGenderA:'gender',
  businessNameA:'fullName',businessDobA:'dob',businessBirthTimeA:'birthTime',businessRoleA:null,
  marriageNameA:'fullName',marriageDobA:'dob',marriageBirthTimeA:'birthTime',
  marriageBirthPlaceA:'birthPlace',marriageMobileA:'mobile',marriageGenderA:'gender'
 };
 for(const [target,source] of Object.entries(map)){
  const field=form.querySelector(`[name="${target}"]`);
  if(!field)continue;
  if(source && (!field.dataset.userEdited || !field.value))field.value=values[source]||'';
 }
}
form.addEventListener('input',e=>{
 if(e.target.matches('[data-extra-field]'))e.target.dataset.userEdited='true';
 if(['fullName','dob','birthTime','birthPlace','mobile','gender'].includes(e.target.name))syncPersonAFields();
});
form.addEventListener('change',e=>{
 if(['gender'].includes(e.target.name))syncPersonAFields();
});

syncPersonAFields();

function validateForm(){
 let firstInvalid=null;
 const email=form.elements.email;
 const delivery=form.elements.delivery.value;
 const emailRequired=(delivery==='Email'||delivery==='Both Email and WhatsApp');
 email.required=emailRequired;
 const emailLabel=email.closest('label')?.querySelector('.field-label');
 if(emailLabel)emailLabel.innerHTML=emailRequired?'Email Address <em>*</em>':'Email Address <small>(Optional)</small>';
 for(const el of form.querySelectorAll('input[required],select[required],textarea[required]')){
  if(el.disabled || el.closest('[hidden]'))continue;
  let valid=el.checkValidity() && String(el.value).trim()!=='';
  if(el.name==='mobile' && valid)valid=/^\+?[0-9\s().-]+$/.test(el.value.trim()) && /\d/.test(el.value);
  if(!valid){el.setAttribute('aria-invalid','true');const details=el.closest('details');if(details)details.open=true;if(!firstInvalid)firstInvalid=el;}
  else el.removeAttribute('aria-invalid');
 }
 if(email.value.trim() && !email.checkValidity()){
  email.setAttribute('aria-invalid','true');
  if(!firstInvalid)firstInvalid=email;
 }
 const err=document.querySelector('#detailsError');
 if(firstInvalid){
  err.textContent=firstInvalid.name==='email'?'Please enter your email address for the selected delivery preference.':firstInvalid.name==='mobile'?'Please enter a valid mobile number.':'Please complete the required fields before proceeding.';
  firstInvalid.scrollIntoView({behavior:'smooth',block:'center'});
  firstInvalid.focus({preventScroll:true});
  return false;
 }
 err.textContent='';
 return true;
}
const confirmation=document.querySelector('#paymentConfirmation');
function openPaymentConfirmation(){
 const eligible=offerEligible();
 document.querySelector('#paymentConfirmTitle').textContent=eligible?'Your 25% offer is ready!':'One more report unlocks your 25% offer';
 document.querySelector('#paymentConfirmMessage').textContent=eligible
  ?'You qualify for 25% OFF on your selected reports and Personal 1-to-1 Consultation. The discount is included in the amount below.'
  :'Add at least one more report to receive 25% OFF on your reports and Personal 1-to-1 Consultation. You can also continue without the offer.';
 document.querySelector('#modalPayable').textContent=money(total());
 confirmation.hidden=false;
 document.body.classList.add('modal-open');
}
function closePaymentConfirmation(){
 confirmation.hidden=true;
 document.body.classList.remove('modal-open');
}
document.querySelector('#stickyAction').addEventListener('click',()=>{
 if(!validateForm())return;
 updateSummary();
 openPaymentConfirmation();
});
document.querySelector('#closePaymentConfirm').addEventListener('click',closePaymentConfirmation);
document.querySelector('#backToReports').addEventListener('click',()=>{
 closePaymentConfirmation();
 document.querySelector('#reportGrid').scrollIntoView({behavior:'smooth',block:'start'});
});
document.querySelector('#continuePayment').addEventListener('click',()=>{
 closePaymentConfirmation();
 alert('This is a design preview only. Payment gateway connection is not active yet.');
});
confirmation.addEventListener('click',e=>{if(e.target===confirmation)closePaymentConfirmation();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!confirmation.hidden)closePaymentConfirmation();});
