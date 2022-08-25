import pageLoad from './functions/load';
import menuLoad from './functions/menu';
import './styles/load.css';
import './styles/normalize.css';
import './styles/menu.css'

function home () {
    const content = document.querySelector('.content');
    const menuContent = document.querySelector('.menu-content');
    const contactContent = document.querySelector('.contact-content');

    menuContent.style.display = 'none';
    contactContent.style.display = 'none';
    content.style.display = 'block';
}

function menu () {
    const content = document.querySelector('.content');
    const menuContent = document.querySelector('.menu-content');
    const contactContent = document.querySelector('.contact-content');

    content.style.display = 'none';
    contactContent.style.display = 'none';
    menuContent.style.display = 'block';
}

function contact () {
    // const content = document.querySelector('.content');
    // const menuContent = document.querySelector('.menu-content');
    // const contactContent = document.querySelector('.contact-content');

    // menuContent.style.display = 'none';
    // contactContent.style.display = 'none';
    // content.style.display = 'block';
}

pageLoad();
menuLoad();

const menuContent = document.querySelector('.menu-content');
// const contactContent = document.querySelector('.contact-content');
menuContent.style.display = 'none';
// contactContent.style.display = 'none';

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');

homeBtn.addEventListener('click', home);
menuBtn.addEventListener('click', menu);
contactBtn.addEventListener('click', contact);


