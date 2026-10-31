(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.reveal,.line,.draw');
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
  else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)});}
  var px=document.querySelectorAll('[data-parallax]'),tick=false;
  function run(){tick=false;var h=innerHeight;px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*-.08).toFixed(1)+'px,0)'})}
  if(!reduce&&px.length){addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(run)}},{passive:true});run();}
  document.addEventListener('click',function(e){var a=e.target.closest('a[href]');
    if(reduce||!a||a.target||e.metaKey||e.ctrlKey||e.shiftKey)return;
    var u=new URL(a.href,location.href);if(u.origin!==location.origin||u.pathname===location.pathname||!/\.html$/.test(u.pathname))return;
    e.preventDefault();document.body.classList.add('leaving');setTimeout(function(){location.href=a.href},300)});
  addEventListener('pageshow',function(e){if(e.persisted)document.body.classList.remove('leaving')});
})();
