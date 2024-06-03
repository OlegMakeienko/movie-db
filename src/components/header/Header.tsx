import './header.css'
import { Link } from "react-router-dom";
import RegisterIcon from "../../assets/1432299223.png";
import { useStore } from "../../store/store.ts";

function Header() {
    const { isLoggedIn } = useStore();

    return (
        <header className='header-page'>
            <nav className='header'>
                <ul>
                    <li><Link to="/" className="button">Home</Link></li>
                    {!isLoggedIn && <li><Link to="/login" className="button">Login</Link></li>}
                    {!isLoggedIn && <li><Link to="/register" className="button">
                        <img src={RegisterIcon} alt="Register Icon" />
                        Register
                    </Link></li>}
                    {isLoggedIn && <li><Link to="/profile" className="button">My Profile</Link></li>}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
