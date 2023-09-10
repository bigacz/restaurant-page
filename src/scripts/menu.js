import CoffeObjects from "./menuCoffees";

function appendMenu() {
    const menuTiles = document.createElement('div');
    menuTiles.classList.add('menu-tiles');
    
    CoffeObjects.forEach((element) => {
        const tileHeader = document.createElement('h4');
        tileHeader.textContent = element.getName();
        
        const tileImage = document.createElement('img');
        tileImage.src = element.getImage();
        
        const tile = document.createElement('div');
        tile.appendChild(tileHeader);
        tile.appendChild(tileImage);
        
        menuTiles.appendChild(tile);
    })
    
    //

    const menu = document.createElement('div')
    menu.classList.add('menu');
    menu.appendChild(menuTiles);
    
    //

    const content = document.getElementById('content')
    content.appendChild(menu);
}

export default appendMenu;

