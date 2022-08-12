const menu = document.querySelector(".header-menu");

function handleClick(event){
  event.preventDefault();
  menu.classList.add('active');
  outsideClick();
}

function outsideClick(){
  const html = document.documentElement;
  html.addEventListener('click', handlOutsideClick);
  function handlOutsideClick(event){

  }
}