import './header.css'
import {Link} from "react-router-dom";
import RegisterIcon from "../../assets/1432299223.png"

function Header() {
    return (
        <header className='header-page'>
            <nav className='header'>
                <ul>
                    <li><Link to="/" className="button">Home</Link></li>
                    <li><Link to="/login" className="button">Login</Link></li>
                    <li><Link to="/register" className="button">
                        <img src={RegisterIcon} alt="RegisterPage Icon" />
                        RegisterPage
                    </Link></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;