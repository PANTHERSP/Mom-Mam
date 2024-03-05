import React from 'react'
import { PiPawPrint } from "react-icons/pi";


const LoadingScreen = () => {
    
    
    return (
    <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh', background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', justifyContent: 'center', alignItems: 'center' }}>
                <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
                <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
                <div style={{ width: '70%', height: '5%', backgroundColor: '#f0f0f0', border: '2px solid #000', borderRadius: '200px', marginTop: '40px', position: 'relative' }}>
                    <div style={{ width: '0%', height: '100%',backgroundImage: 'linear-gradient(to left, #222222, #4b4079, #6c2c72)', backgroundColor: '#4CAF50', borderRadius: 'inherit', textAlign: 'center', lineHeight: '20px', color: 'white', animation: 'progress-animation 1s linear forwards' }}></div>
                </div>
            </div>
     )
}

export default LoadingScreen