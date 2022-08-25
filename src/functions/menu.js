export default function menuLoad () {
    const content = document.querySelector(".menu-content");

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-background');

    const titleContainer = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.innerText = 'NOODLE SOUP MENU';
    titleContainer.appendChild(menuTitle);
    menuContainer.appendChild(titleContainer);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    for (let i = 0; i < 6; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        const foodImg = document.createElement('img');
        foodImg.classList.add('food-img');
        foodImg.src = '../src/images/pho2.webp';
        foodImg.alt = 'Pho Image';

        const foodDesc = document.createElement('p');
        foodDesc.classList.add('food-desc');
        foodDesc.innerHTML = "<span id='content1'>201. PHO LOVE SPECIAL NOODLE SOUP - PHO LOVE DAC BIET'</span><span id='content2'>$14.99</span>";

        cell.append(foodImg);
        cell.append(foodDesc);
        menuGrid.appendChild(cell);
    }
    menuContainer.appendChild(menuGrid);

    content.appendChild(menuContainer);
}