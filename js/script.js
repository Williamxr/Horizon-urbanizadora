function initScrollSuave(){
 const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function goScroll(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  
  window.scrollTo({
    top: topo,
    behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', goScroll);
  });
}
initScrollSuave();


function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length){
  
    const windowMetade = window.innerHeight * 0.6;
    
    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop < 0){
          section.classList.add('ativo')
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();