import './header.css';
import { Link } from 'react-router-dom';
import RegisterIcon from '../../assets/1432299223.png';
import { useStore } from '../../store/store.ts';
import {useEffect} from "react";

function Header() {
    const { isLoggedIn } = useStore();

    useEffect(() => {
        console.log('isLoggedIn:', isLoggedIn);
    }, [isLoggedIn]);

    return (
        <header className='header-page'>
            <nav className='header'>
                <ul>
                    {isLoggedIn ? (
                        <li>
                            <Link to='/' className='button'>
                                This is your movie storage
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to='/login' className='button'>
                                    My Movie Storage
                                </Link>
                            </li>
                            <li>
                                <Link to='/register' className='button'>
                                    <img src={RegisterIcon} alt='Register Icon' />
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
