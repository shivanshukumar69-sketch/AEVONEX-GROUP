(function(){
  var nav=document.querySelector('.nav'),btn=document.querySelector('.toggle'),menu=document.querySelector('.menu');
  if(!nav)return;
  function onScroll(){nav.classList.toggle('scrolled',window.scrollY>40)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  function set(open){menu.classList.toggle('open',open);btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Close menu':'Open menu');document.body.style.overflow=open?'hidden':''}
  btn.addEventListener('click',function(){set(btn.getAttribute('aria-expanded')!=='true')});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  window.addEventListener('resize',function(){if(innerWidth>860)set(false)});
})();
