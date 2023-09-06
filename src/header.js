function appendMenu(appender) {
    const header = document.createElement('header')
    header.classList.add('header');
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const logo = document.createElement('h1')
    logo.textContent = 'Caffeine Cove'

    for(let i = 0; i < 3; i++) {
        const names = ['Home', 'Menu', 'Contact']
        const button = document.createElement('button');
        button.textContent = names[i];

        navbar.appendChild(button);
    }

    header.appendChild(logo);
    header.appendChild(navbar);

    appender.prepend(header);
}

export default appendMenu;
    