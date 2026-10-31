(function(){
  // Set your form endpoint (e.g. Formspree "https://formspree.io/f/xxxx"). See README.md.
  var FORM_ENDPOINT='';
  document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
  var form=document.getElementById('contact-form');if(!form)return;
  var status=form.querySelector('.status');
  var rules={name:function(v){return v.trim().length>=2||'Enter your name.'},
    email:function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())||'Enter a valid email address.'},
    subject:function(v){return v.trim().length>=3||'Enter a subject.'},
    message:function(v){return v.trim().length>=10||'Write at least 10 characters.'}};
  function check(f){var r=rules[f.name](f.value),ok=r===true;form.querySelector('#'+f.id+'-err').textContent=ok?'':r;f.setAttribute('aria-invalid',!ok);return ok}
  var fields=[].slice.call(form.querySelectorAll('input,textarea')).filter(function(f){return rules[f.name]});
  fields.forEach(function(f){f.addEventListener('blur',function(){check(f)})});
  form.addEventListener('submit',function(e){e.preventDefault();
    var bad=fields.filter(function(f){return !check(f)});
    if(bad.length){bad[0].focus();status.textContent='Please correct the highlighted fields.';return}
    if(form.querySelector('[name=website]').value)return;
    if(!FORM_ENDPOINT){status.textContent='Your message is valid, but email delivery is not configured yet. See README.md to connect an email service.';return}
    status.textContent='Sending…';
    fetch(FORM_ENDPOINT,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)})
      .then(function(r){if(!r.ok)throw 0;form.reset();status.textContent='Thank you. Your message has been sent.'})
      .catch(function(){status.textContent='Sending failed. Please try again later.'});
  });
})();
