import './css/Main.css';
import Description from "./Description.js"
import Logo from "./Logo.js"

export default () => {
    return <div className='mainContainer'>
        <Description />
        <Logo />
    </div>
}