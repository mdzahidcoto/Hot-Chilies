import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthProviderContext';

const LogIn = () => {
    const { logIn, popUpLogIn } = UserAuth();
    const [ error, setError ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

// Pop Up Log in handle
    const handlePopUpLogIn = async () => {
        setError('');
        try {
            await popUpLogIn();
            navigate('/');
        }
        catch (err) {
            setError(err.message);
            console.log(err);
        }
    }
// Email password Log in handle
    const handleLogIn = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/');
            console.log('logged in');
        }
        catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    }
    return (
        <div>
            <h1 className='p-3 text-3xl text-center font-bold text-blue-400'>Login first</h1>
            {/*Top*/}
            <div>
                <form onSubmit={handleLogIn} className='flex flex-col items-center justify-center'>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' className='inputs' placeholder='Email' />
                    <input onChange={(e) => setPassword(e.target.value)} type='passWord' className='inputs' placeholder='Password' />
                    <button className='buttons'>Login</button>
                </form>    
            </div>
            {/*Social Icon*/}
            <div className='flex space-x-2 m-4 items-center justify-center'>
                <button onClick={handlePopUpLogIn} className='socialIcon'>Google</button>
            </div>
            <div className='flex space-x-2 m-4 items-center justify-center'>
                <p className='py-2'>
                    Don't have an account yet?{' '}
                    <Link to='/signUp' className='underline text-blue-500'>
                        Sign Up.
                    </Link>
                </p>
            </div>
            <p style={{color:'red'}}>{error}</p>
        </div>
    );
};

export default LogIn;