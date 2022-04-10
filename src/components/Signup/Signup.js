import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm,] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


    // console.log(email);
    // console.log(password);
    // console.log(confirm);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirm(event.target.value);
    }

    if (user) {
        navigate('/inventory');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirm) {
            setError('your 2 password did not matched');
            return;
        }
        if (password.length < 6) {
            setError('password must be more atleast 6 carecters')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>SignUp</h1>
                <form onSubmit={handleCreateUser}>
                    <p style={{ color: 'red' }}>{error}</p>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">confirm password</label>
                        <input type="password" name="confirm-password" onBlur={handleConfirmPasswordBlur} required />
                    </div>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>Already have an account? <Link className='
                form-link' to={'/login'}>Create an account</Link></p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0px auto' }}>
                    <div style={{ border: '1px solid gray', width: '100px', backgroundColor: 'white' }}></div>
                    <p style={{ margin: '0px 10px' }}>or</p>
                    <div style={{ border: '1px solid gray', width: '100px' }}></div>
                </div>

                <button className='google-btn'>
                    <img style={{ width: '25px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <p className='google-text'>continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Signup;