import MenuItem from './MenuItem.js';
import './css/Header.css';

export default () => {
    return <div className="menuContainer">
        <MenuItem menuItemText= 'Головна' />
        <MenuItem menuItemText= 'Питання' />
        <MenuItem menuItemText= 'Матеріали' />
        <MenuItem menuItemText= 'Контакти' />
    </div>
}