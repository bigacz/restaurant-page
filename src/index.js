import './style.css';

const content = document.getElementById('content')

console.log("hello");

const element = document.createElement('div');

element.classList.add('hello');
element.textContent = "elo";

content.appendChild(element);