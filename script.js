const toggle=document.querySelector('#toggle'),nav=document.querySelector('#nav');
toggle?.addEventListener('click',()=>{nav.classList.toggle('open');toggle.textContent=nav.classList.contains('open')?'✕':'☰'});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{const s=document.querySelector('select[name=service]');if(s)s.value=a.dataset.service}));

// Paste the deployed Google Apps Script Web App URL (ending in /exec) here.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby4wNLcf48XL4EPLXQVJevmRDqbFtuyFLka2tDcUyw_lMVtTFmUFAksQymOvWvH8X-w/exec';

const form=document.querySelector('#form');
form?.addEventListener('submit',async e=>{
  e.preventDefault();
  const status=document.querySelector('#form-status');
  if(!GOOGLE_SCRIPT_URL){
    status.textContent='The Google Sheets connection is not configured yet. Please add your Apps Script Web App URL to script.js.';
    return;
  }
  const submit=form.querySelector('button[type=submit],button:not([type])');
  submit.disabled=true; submit.textContent='Submitting…';
  try{
    const data=new FormData(form);
    const encoded=new URLSearchParams();
    for(const [key,value] of data.entries()) encoded.append(key,value);
    await fetch(GOOGLE_SCRIPT_URL,{method:'POST',body:encoded.toString(),headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},mode:'no-cors'});
    status.textContent='Thank you. Your enquiry has been submitted.';
    form.reset();
  }catch(err){
    status.textContent='We could not submit your enquiry. Please contact us on WhatsApp.';
  }finally{
    submit.disabled=false; submit.textContent='Book Consultation Enquiry →';
  }
});
