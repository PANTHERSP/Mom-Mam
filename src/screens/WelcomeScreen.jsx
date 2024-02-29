import React from 'react';
import { PiPawPrint } from "react-icons/pi";

const WelcomeScreen = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '600px', textAlign: 'center', fontFamily: 'Rockwell' }}>
                <PiPawPrint size={150} color="black" style={{marginTop: '-50px'}}/>
                <h1 style={{ fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ width: '350px', marginTop: '40px' }}>
                    <p style={{ color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Welcome to a World Tailored for Pets. Your Gateway to Furry Happiness!</p>
                </div>
                <div style={{ marginTop: '150px', width: '480px' }}>
                    <button style={{ borderColor: 'white', borderRadius: '20px', borderWidth: '1px',backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '24px', fontFamily: 'Optima' }}>Get started</button>
                    <button style={{ borderColor: 'white', borderRadius: '20px', borderWidth: '1px', backgroundColor: 'white', width: '100%', height: '50px', marginTop: '15px', color: 'black', fontSize: '24px', fontFamily: 'Optima' }}>What is this?</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeScreen