import steak from '../images/steak.JPEG';
import tacos from '../images/hardTacos.jpeg';
import quesadillas from '../images/quesadillas.jpeg';
import '../styles/menu.css';

const renderMenu = (function () {
    const content = document.getElementById('content');
    const title = document.createElement('h2');
    title.textContent = 'Menu';

    const steakImg = new Image();
    steakImg.src = steak;
    steakImg.classList.add('menuItems');

    const taco = new Image();
    taco.src = tacos;
    taco.classList.add('menuItems');
    
    const quesa = new Image();
    quesa.src = quesadillas;
    quesa.classList.add('menuItems');


    content.appendChild(title);
    content.appendChild(steakImg);
    content.appendChild(taco);
    content.appendChild(quesa);
});

export { renderMenu };