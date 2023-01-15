let menu = document.querySelector('.navbar');
let profile = document.querySelector('.profile-block');
let button = document.querySelector('.burger-button');

button.addEventListener('click',function(){
    menu.classList.toggle('burger-active');
    profile.classList.toggle('burger-active')
    button.classList.toggle('active');
});