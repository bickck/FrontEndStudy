const toggleBtn = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__toggle');
const icons = document.querySelector('.navbar__toggle');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});