import './css/MenuItem.css';

export default ( {menuItemText} ) => {
    return <div className='menuItem'>
            <a href='#'>{menuItemText}</a>
        </div>
}