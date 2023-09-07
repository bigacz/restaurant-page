import './style.css';
import appendMenu from './header'
import appendFooter from './footer';
import appendHome from './home';

const content = document.getElementById('content');
const body = content.parentElement;

appendMenu(body);
appendHome(content);
appendFooter(body);