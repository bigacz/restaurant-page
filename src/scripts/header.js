import logoImage from '../images/logo.svg'

function appendHeader(appender, pages) {
    const header = document.createElement('header');
    header.classList.add('header');
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const logo = document.createElement('img');
    logo.src = logoImage;
    
    const logoHeader = document.createElement('h1');
    logoHeader.textContent = 'Caffeine Cove'

    const logoContainer = document.createElement('div');
    logoContainer.appendChild(logo);
    logoContainer.appendChild(logoHeader);
    logoContainer.classList.add('logo');

    for(let i = 0; i < 3; i++) {
        const names = ['Home', 'Menu', 'Contact'];
        const button = document.createElement('button');
        button.textContent = names[i];
        button.addEventListener('click', e => {
            unappendContent();
            pages[i]();
        })

        navbar.appendChild(button);
    }

    header.appendChild(logoContainer);
    header.appendChild(navbar);

    appender.prepend(header);
}

function unappendContent() {
    const content = document.getElementById('content');
    while(content.childElementCount > 0) {
        content.firstChild.remove();
    }
}


export default appendHeader;
    