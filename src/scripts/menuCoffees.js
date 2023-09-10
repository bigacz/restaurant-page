import Espresso from '../images/coffees/espresso.jpg'
import Latte from '../images/coffees/latte.jpg'
import Black from '../images/coffees/black.jpg'
import Mocha from '../images/coffees/mocha.jpg'
import Americano from '../images/coffees/americano.jpg'
import Cappuccino from '../images/coffees/cappuccino.jpg'
import Frappe from '../images/coffees/frappe.jpg'
import Affogato from '../images/coffees/affogato.jpg'


const imported = [
    Espresso, 
    Latte, 
    Black, 
    Mocha, 
    Americano, 
    Cappuccino, 
    Frappe, 
    Affogato
]
const names = [
    'Espresso', 
    'Latte', 
    'Black Coffee', 
    'Mocha', 
    'Americano', 
    'Cappuccino',
    'Frappe',
    'Affogato'
    ];

const coffeeFactory = (image, name) => {
    const getImage = () => {
        return image
    }
    const getName = () => {
        return name
    }

    return {getImage, getName}
}

const coffees = [] 

imported.forEach((element, index) => {
    const coffeObject = coffeeFactory(element, names[index]);

    coffees.push(coffeObject);
})

export default coffees