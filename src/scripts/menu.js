function appendMenu() {
    const content = document.getElementById('content')

    const menu = document.createElement('div')
    menu.classList.add('menu');

    const mapContainer = document.createElement('div');
    mapContainer.id = "map"


    content.appendChild(menu);
}



export default appendMenu;

