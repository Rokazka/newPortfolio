const header = document.querySelector('header');
const about = document.querySelector('.About');
const home = document.querySelector('.Home');
const protfolio = document.querySelector('.Portfolio');
const contact = document.querySelector('.Contact');
const hobby = document.querySelector('.Hobby');
const menu = document.querySelector('.menu');



function hello() {
    header.classList.add("menu-mob");
    about.classList.remove("menu-mob");
}

function menuSee() {
    header.classList.toggle("menu-mob");
}





about.addEventListener('click', hello)
menu.addEventListener('click', menuSee)
home.addEventListener('click', hello);
protfolio.addEventListener('click', hello)
contact.addEventListener('click', hello)
hobby.addEventListener('click', hello)