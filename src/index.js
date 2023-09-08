import './style.css';
import appendMenu from './header'
import appendFooter from './footer';
import appendHome from './home';

const content = document.getElementById('content');
const body = content.parentElement;

appendMenu(body, unappendContent, appendHome);
appendHome(content);
appendFooter(body);

function unappendContent() {
    while(content.childElementCount > 0) {
        content.firstChild.remove();
    }
}
