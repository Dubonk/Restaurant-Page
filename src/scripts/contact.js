import '../styles/contact.css';
import bridgeImg from '../images/bridge.jpeg';
import ig from '../svgs/insta.svg';
import fb from '../svgs/facebook.svg';

const renderContact = (function () {
    const content = document.getElementById('content');
    const title = document.createElement('h2');
    title.innerText = 'Contact Us!';

    const bridge = new Image();
    bridge.src = bridgeImg;

    const contactInfo = document.createElement('ul');
    const phone = document.createElement('li');
    phone.textContent = '(888)555-1234';

    const a = document.createElement('a');
    a.setAttribute('href', "#");
    a.textContent = 'konisplace@notReal.com';

    const email = document.createElement('li');
    email.appendChild(a);

    const hours = document.createElement('h3');
    hours.textContent = 'Hours';

    const socials = document.createElement('div');

    const insta = new Image();
    insta.classList.add('link');
    insta.src = ig;

    const facebook = new Image();
    facebook.classList.add('link');
    facebook.src = fb;


    socials.appendChild(insta);
    socials.appendChild(facebook);

    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);

    content.appendChild(title);
    content.appendChild(bridge);
    content.appendChild(contactInfo);
    content.appendChild(hours);
    content.appendChild(socials);
})();