import React from 'react';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (loading) {
        return <p>Loading....</p>
    }
    if (user) {
        navigate('/both');
    }
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-screen'>
            <div className='mx-auto flex flex-col py-48  justify-center items-center'>
                <h1 className='text-4xl text-white font-bold mb-6 '>Please Sign Up</h1>
                <button onClick={() => signInWithGoogle()} className='text-2xl font-bold shadow-lg flex btn btn-primary '> <img className='w-12 pr-4' src="social-google-button-blue-icon.png" alt="" />
                    Connect With </button>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Login;