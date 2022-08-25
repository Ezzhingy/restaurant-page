export default function contactLoad () {
    const content = document.querySelector('.contact-content');

    const contactBackground = document.createElement('div');
    contactBackground.classList.add('contact-background');

    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');

    const header = document.createElement('h1');
    header.innerText = 'CONTACT US';
    const header2 = document.createElement('h2');
    header2.innerText = 'BETTER YET, SEE US IN PERSON!';
    const header3 = document.createElement('h3');
    header3.innerText = 'We love our customers, so feel free to visit during normal business hours.';
    const name = document.createElement('h2');
    name.innerText = 'PHO LOVE';
    const street = document.createElement('h3');
    street.innerText = '123 Imaginary Street, Toronto, Ontario ABC 123';
    
    contactBox.appendChild(header);
    contactBox.appendChild(header2);
    contactBox.appendChild(header3);
    contactBox.appendChild(name);
    contactBox.appendChild(street);

    contactBackground.appendChild(contactBox);

    content.appendChild(contactBackground);
}