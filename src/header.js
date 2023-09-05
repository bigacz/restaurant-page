function appendMenu(content) {
    const header = document.createElement('header')
    header.classList.add('header');
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const logo = document.createElement('h1')
    logo.textContent = 'lorem ipsum'

    for(let i = 0; i < 3; i++) {
        const names = ['Home', 'About', 'Contact']
        const button = document.createElement('button');
        button.textContent = names[i];

        navbar.appendChild(button);
    }

    header.appendChild(logo);
    header.appendChild(navbar);

    content.prepend(header);
}

export default appendMenu;
    