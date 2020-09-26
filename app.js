const nav = document.querySelector(".navbar-items")
const bur = document.querySelector('.burger');

bur.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    bur.classList.toggle('toggle')}
)