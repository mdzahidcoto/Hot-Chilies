import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthProviderContext';

const SignUp = () => {
    const { createUser }  = UserAuth();
    // eslint-disable-next-line no-unused-vars
    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password1, setPassword1 ] = useState('');
    const [ password2, setPassword2 ] = useState('');
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if(password1 === password2){
                await createUser( email, password1 );
                navigate('/')
                console.log('account created');
            }
        }
        catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    }
    
    return (
        <div>
        <div className='flex text-center items-center justify-center'>
            <form onSubmit={handleSubmit} className='items-center justify-center'>
                <div>
                    <label>Full Name:</label>
                    <input 
                    onChange={(e) => setName(e.target.value)} 
                    type='text' required 
                    placeholder='Enter your Name'
                    className='inputs' />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    type='email' required 
                    placeholder='Enter your E-mail'
                    className='inputs' />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                    onChange={(e) => setPassword1(e.target.value)} 
                    type='password' required 
                    placeholder='Enter your Password'
                    className='inputs' />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input 
                    onChange={(e) => setPassword2(e.target.value)} 
                    type='password' required 
                    placeholder='Confirm Password'
                    className='inputs' />
                </div>
                {
                   password1 !== password2 ? (<p className='text-red-500'><small>Password does not match</small></p>) : (<p></p>)
                }
            <br />
                <button className='border rounded-md bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 m-3'>
                    SignUp
                </button>
            </form>
            </div>
            <div className='text-center'>
                <p className='py-2'>
                    Already have an account yet?{' '}
                <Link to='/logIn' className='underline text-blue-500'>
                    Log in.
                </Link>
                </p>
            </div>
            <p className='font-semibold text-red-600'>{error}</p>
            </div>
    );
};

export default SignUp;