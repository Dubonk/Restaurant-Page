import './style.css';
import './styles/home.css';
import './styles/contact.css';
import './scripts/home';
import './scripts/contact';
import githubImg from './svgs/github.svg';
import backgroundImg from './images/background.JPEG';
import { renderHome } from './scripts/home.js';
import { renderMenu } from './scripts/menu.js';
import { renderContact } from './scripts/contact.js';




const createLinks = (function () {
    const links = document.createElement('div');
    links.classList.add('links');
    const home = document.createElement('button');
    home.setAttribute('id', 'homeBtn');
    home.innerText = 'Home';


    const menu = document.createElement('button');
    menu.setAttribute('id', 'menuBtn');
    menu.innerText = 'Menu';


    const contact = document.createElement('button');
    contact.setAttribute('id', 'contactBtn');
    contact.innerText = 'Contact';
    

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    
    document.body.prepend(links);
})();

const createTitle = (function () {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    const h1 = document.createElement('h1');
    h1.innerText = "Koni's Place";
    title.appendChild(h1);
    
    document.body.prepend(title);
})();

const addContentContainer = (function () {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    
    document.body.appendChild(content);
})();

const createFooter = (function () {
    const footer = document.createElement('footer');
    const github = new Image();
    github.src = githubImg;
    github.setAttribute('id', 'githubImg');
    footer.appendChild(github);
    document.body.appendChild(footer);
})();

const clearContent = (function () {
    const content = document.getElementById('content');
    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }
});

const homeLink = (function () {
    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', () => {
        clearContent();
        renderHome();
    });
})();

const menuLink = (function () {
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
        clearContent();
        renderMenu();
    });
})();

const contactLink = (function () {
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', () => {
        clearContent();
        renderContact();
    });
})();


renderHome();