import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const Logout = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService
            .logout()
            .then(() => {
                dispatch(logout());
            })
            .catch(error => {
                console.log("Appwrite Error :: Logout Component :: logoutHandler :: ", error);
            });
    };

    return (
        <button onClick={logoutHandler} className='py-1 px-4 hover:bg-blue-100 hover:rounded-full hover:duration-200'>Logout</button>
    )
}

export default Logout;