import React, { useState } from 'react';
import { PiPawPrint } from "react-icons/pi";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { IoMdMail, IoMdLock } from "react-icons/io";
import { TbLock, TbLockCheck } from "react-icons/tb";
import { A } from '../components/Animation';
import LoadingScreen from '../components/LoadingScreen';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoading(true);
            console.log(auth.currentUser)
            // navigate('/home');
            
            setTimeout(() => {
                setIsLoading(false); 
                navigate('/home'); 
            }, 1000);
            setError('');
            setEmail('');
            setPassword('');
        } catch (error) {
            
            setError(error.message);
            
            if (!email || !password) {
                alert('Please fill in all fields');
                setError('');
                return;
                
            }
            
        }
         


    };

    const handleContinueAsGuest = () => {
        // Logic for continuing as a guest
    };

    const handleGotoCreateAccount = () => {
        navigate('/create-account');
    };

    return (
        <>{ isLoading ? <LoadingScreen /> :
            <A>
        {/* <div style={{backgroundColor: 'black', width: 430, height: 932,display: 'flex',flexDirection: 'column',}}> */}
        <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
        <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%',width: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '86%',textAlign: 'center', fontFamily: 'Rockwell' }}>
            <PiPawPrint size={100} color="black" style={{marginTop: '-10%'}} />
                <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '3%' }}>Sign in</h1>
                {/* <h1 style={{ fontFamily: 'cursive',fontSize: '29px', color: 'black', paddingTop: '0%' }}>or continue as a guest</h1> */}
            
                <div style={{ marginTop: '10%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><IoMdMail size={35}/> Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%', borderWidth: '4px', borderRadius: '200px', borderColor: error ? 'red' : 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} placeholder="Enter email" />
                </div>
                    
                <div style={{ marginTop: '5%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ fontFamily: 'cursive',alignSelf: 'flex-start',fontSize: '20px', color: 'white' }}><TbLock size={35}/> Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%', borderWidth: '4px', borderRadius: '200px', borderColor: error ? 'red' : 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} placeholder="Enter password" />
                    { error && <p style={{fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red',paddingTop: '5%'}}>Email or password is invalid</p>}
                </div>
                <div style={{ width: '100%',marginTop: '45%' }}>
                    <button onClick={handleSignIn} style={{ borderWidth: '1px', borderRadius: '20px', borderColor: 'white', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)', backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '22px', fontFamily: 'cursive' }}>Sign in</button>
                    {/* <button onClick={handleContinueAsGuest} style={{ borderWidth: '1px', borderRadius: '20px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '50px', marginTop: '15px', color: 'black', fontSize: '22px', fontFamily: 'cursive' }}>Continue as Guest</button> */}
                    <div style={{ fontFamily: 'cursive',marginTop: '30px', fontSize: '18px', color: 'white' }}>Don't have an account? <button onClick={handleGotoCreateAccount} style={{ fontFamily: 'cursive',textDecoration: 'underline', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>Create one now</button></div>
                </div>
                
            
            </div>
        </div>
        </div>
        </A>
        }
    </>
    );
}

export default SignInScreen

