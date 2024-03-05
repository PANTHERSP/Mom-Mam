import React from 'react'
import { PiPawPrint } from "react-icons/pi";

const Header = () => {
  return (
    <div style={{ zIndex: 1,position: 'absolute',top: 0,left: 0,boxShadow: '0px 0px 20px 0px black',opacity: '0.95',paddingTop: '5%',borderRadius: '0px 0px 35px 35px',display: 'flex',alignItems: 'center',justifyContent: 'center',backgroundImage: 'linear-gradient(to bottom, #4b4079, #6c2c72, #d64045)',width: '100%',height: '12%'}}>
        <PiPawPrint size={50} color='white'/>
        <h1 style={{paddingLeft: '1%',fontSize: 40,fontFamily: 'cursive',color: 'white'}}>Mom Mam</h1>
    </div>
  )
}

export default Header
