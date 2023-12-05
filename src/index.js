import './style.css';
import './styles/home.css'
import './scripts/home';
import githubImg from './svgs/github.svg';
import renderHome from './scripts/home';

const createLinks = (function () {
    const links = document.createElement('div');
    links.classList.add('links');
    const home = document.createElement('button');
    home.innerText = 'Home';
    const menu = document.createElement('button');
    menu.innerText = 'Menu';
    const contact = document.createElement('button');
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

const createFooter = (function () {
    const footer = document.createElement('footer');
    const github = new Image();
    github.src = githubImg;
    github.setAttribute('id', 'githubImg');
    footer.appendChild(github);
    document.body.appendChild(footer);
})();

renderHome();