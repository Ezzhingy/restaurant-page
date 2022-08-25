export default function pageLoad () {
    const content = document.querySelector('.content');
    const general = document.querySelector('.general');
    const footerContainer = document.querySelector('.footer-container');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    const header = document.createElement('div');
    header.classList.add('header');
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = "<button class='home-btn'>HOME</button>";
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = "<button class='menu-btn'>MENU</button>";
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML = "<button class='contact-btn'>CONTACT</button>";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
    headerContainer.appendChild(header);

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerText = 'PHO LOVE';

    const night1 = document.createElement('div');
    night1.classList.add('background-img')

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    const description = document.createElement('h2');
    const description2 = document.createElement('h2');
    description.innerText = 'The best Pho in the GTA, comprised of the perfect bowl of Vietnamese soup noodles!';
    description2.innerText = 'Check out our menu page and do contact us — we are always available!'
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(description2);

    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');
    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quote-box');

    const quote = document.createElement('h1');
    const quoteFrom = document.createElement('h1');
    quote.innerText = 'Authentic Vietnamese Famous Rice Noodle Soup "Pho" and Asian Cusine. Try out our yummy Pad Thai and hot Stir Fried dishes.';
    quoteFrom.innerText = '-Pho LOVE';
    quoteFrom.style.fontStyle = 'italic';

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = '<p>Copyright © <a href="https://github.com/Ezzhingy">Ezzhingy</a> 2022</p>';

    quoteBox.appendChild(quote);
    quoteBox.appendChild(quoteFrom);
    quoteContainer.appendChild(quoteBox);

    general.appendChild(headerContainer);
    content.appendChild(headline);
    content.appendChild(night1);
    content.appendChild(descriptionContainer);
    content.appendChild(quoteContainer);
    
    footerContainer.appendChild(footer);

    return content;
}   