function appendHome() {
    const content = document.getElementById('content');

    const home = document.createElement('div');
    home.classList.add('home');

    const header = document.createElement('h2');
    header.textContent = 'Caffeine Cove';    
    home.appendChild(header);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Check our menu!';
    home.appendChild(buyButton);

    content.appendChild(home)
}

export default appendHome;