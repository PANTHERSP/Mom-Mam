import React, { useState } from 'react';
import { PiPawPrint } from "react-icons/pi";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Logic for signing in
    };

    const handleContinueAsGuest = () => {
        // Logic for continuing as a guest
    };

    const handleCreateAccount = () => {
        // Logic for creating an account
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100vh', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <PiPawPrint size={100} color="black" style={{marginTop: '-20px'}} />
            <div style={{ width: '80%', maxWidth: '400px', textAlign: 'center', fontFamily: 'Rockwell' }}>
                <h1 style={{ fontSize: '29px', color: 'black', paddingTop: '0%' }}>Sign in or continue as a guest</h1>
                <div style={{ marginTop: '15%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ alignSelf: 'flex-start', fontSize: '18px', color: 'white' }}>Email or Username</label>
                    <input type="text" style={{ borderWidth: '2px', borderRadius: '20px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px', marginTop: '5px' }} placeholder="Enter email or username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ marginTop: '5%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ alignSelf: 'flex-start',fontSize: '18px', color: 'white' }}>Password</label>
                    <input type="password" style={{ borderWidth: '2px', borderRadius: '20px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px', marginTop: '5px' }} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div style={{ marginTop: '20%' }}>
                    <button onClick={handleSignIn} style={{ borderWidth: '1px', borderRadius: '20px', borderColor: 'white', backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '24px', fontFamily: 'Optima' }}>Sign In</button>
                    <button onClick={handleContinueAsGuest} style={{ borderWidth: '1px', borderRadius: '20px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '50px', marginTop: '15px', color: 'black', fontSize: '24px', fontFamily: 'Optima' }}>Continue as Guest</button>
                    <div style={{ marginTop: '30px', fontSize: '16px', color: 'white' }}>No account? <button onClick={handleCreateAccount} style={{ textDecoration: 'underline', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>Create one now</button></div>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen

