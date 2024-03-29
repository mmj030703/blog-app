import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Input, Logo } from './index';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const loginHandler = async (data) => {
        setError("");
        setLoading(true);
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login({ userData }));
                }
                setLoading(false);
                navigate("/");
            }
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className='mb-2 ms-8 flex justify-center'>
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
                </div>
                <h2 className="text-center sm:text-2xl font-bold leading-tight xs:text-xl">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60 max-sm:text-[14px]">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 max-sm:text-[14px] hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(loginHandler)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full py-2 relative'
                        >
                            Sign in
                            {loading && <span className='animate-spin absolute right-3 top-3 ease-linear rounded-full border-4 border-t-4 border-t-black border-gray-200 h-5 w-5'></span>}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;