import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService
            .logout()
            .then(() => {
                dispatch(logout());
                navigate('/');
            })
            .catch(error => {
                console.log("Appwrite Error :: Logout Component :: logoutHandler :: ", error);
            });
    };

    return (
        <button onClick={logoutHandler} className='w-full py-2 px-4 hover:bg-blue-100 hover:duration-200'>Logout</button>
    )
}

export default Logout;