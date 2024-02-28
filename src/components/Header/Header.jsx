import { Container, Logo, Logout } from '../index';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            id: uuid(),
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            id: uuid(),
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            id: uuid(),
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            id: uuid(),
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            id: uuid(),
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        }
    ];

    return (
        <header>
            <Container>
                <nav className='flex'>
                    <div>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map(navItem => (
                            navItem.active ? (<li key={navItem.id}>
                                <button onClick={() => navigate(navItem.slug)} className='py-1 px-4 hover:bg-blue-100 hover:rounded-full hover:duration-200'>{navItem.name}</button>
                            </li>) : null
                        ))}
                        {authStatus && (
                            <li>
                                <Logout />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;