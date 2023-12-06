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

    const sun = document.createElement('div');
    sun.classList.add('schedule');
    sun.textContent = 'Sunday: closed'

    const mon = document.createElement('div');
    mon.classList.add('schedule');
    mon.textContent = 'Monday: 12:00PM - 8:00PM'

    const tue = document.createElement('div');
    tue.textContent = 'Tuesday: 12:00PM - 8:00PM';
    tue.classList.add('schedule');

    const wed = document.createElement('div');
    wed.classList.add('schedule');
    wed.textContent = 'Wednesday: 12:00PM - 8:00PM';

    const thur = document.createElement('div');
    thur.classList.add('schedule');
    thur.textContent = 'Thursday: 10:00AM - 10:00PM';

    const fri = document.createElement('div');
    fri.classList.add('schedule');
    fri.textContent = 'Friday: 10:00AM - 12:00AM';

    const sat = document.createElement('div');
    sat.classList.add('schedule');
    sat.textContent = 'Saturday: 10:00AM - 12:00AM';

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
    content.appendChild(sun);
    content.appendChild(mon);
    content.appendChild(tue);
    content.appendChild(wed);
    content.appendChild(thur);
    content.appendChild(fri);
    content.appendChild(sat);
    content.appendChild(socials);
});

export { renderContact };