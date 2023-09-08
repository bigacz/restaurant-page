import './style.css';
import appendHeader from './scripts/header'
import appendFooter from './scripts/footer';

import appendHome from './scripts/home';
import appendContact from './scripts/contact';
import appendMenu from './scripts/menu';


const body = content.parentElement;

appendHeader(body, [appendHome, appendMenu, appendContact]);
appendFooter(body);
appendHome();