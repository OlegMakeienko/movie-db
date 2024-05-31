import './header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className='header-page'>
            <nav className='header'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;