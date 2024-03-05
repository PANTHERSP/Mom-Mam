import React, { useEffect, useState } from 'react';
import { PiPawPrint } from "react-icons/pi";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { IoMdMail, IoMdLock } from "react-icons/io";
import { TbLock, TbLockCheck } from "react-icons/tb";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { Alert } from 'bootstrap';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { A } from '../components/Animation';


const CreateAccountScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [minPasswordLength, setMinPasswordLength] = useState(false);
    const [maxPasswordLength, setMaxPasswordLength] = useState(false);
    const [notMatchPassword, setNotMatchPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const [isValid, setIsValid] = useState(true);

    const handleSetPhoneNumber = (event) => {
        const inputValue = event.target.value;
        const numbersOnly = inputValue.replace(/[^0-9]/g, ''); 
        setPhoneNumber(numbersOnly);
        
      };

    const navigate = useNavigate();

    const validateEmail = () => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      
const handleSubmit = () => {
    if (email && password && confirmPassword && username && phoneNumber && address) {
          // const passwordMatchCheck = () => {
                
                if (password !== confirmPassword) {
                    setNotMatchPassword(true);
                    // console.log(notMatchPassword);
                    // return false;
                }
                else  {
                    setNotMatchPassword(false);
                    // return true;
                }
            // }

            // const passwordLengthCheck = () => {
                
                if (password.length < 8) {
                    setMinPasswordLength(true);
                    setMaxPasswordLength(false);
                    // console.log(minPasswordLength, maxPasswordLength);
                    // return false;
                }
                else if (password.length > 16) {
                    setMaxPasswordLength(true);
                    setMinPasswordLength(false);
                    // console.log(minPasswordLength, maxPasswordLength);
                    // return false;
                }
                else  {
                    setMaxPasswordLength(false);
                    setMinPasswordLength(false);
                    // return true;
                }
                // }
                
            // const emailCheck = () => {
                
                if (!(validateEmail())) {
                    setInvalidEmail(true);
                    // console.log(invalidEmail);
                    // return false;
                }
                else  {
                    setInvalidEmail(false);
                    // return true;
                }
                // }


                const thaiPhoneRegex = /^0[1-9][0-9]{8}$/;
        setIsValid(thaiPhoneRegex.test(phoneNumber));

                

    }
    
    else {
        alert('Please fill in all fields');
        return;
    }

    setSubmitting(true);
}
                useEffect(() => {
                    
                    if ( username && isValid && phoneNumber && address && !invalidEmail && !minPasswordLength && !maxPasswordLength && !notMatchPassword && submitting) {
                        handleCreateAccount();
                        
                    }
                }, [ isValid, username, phoneNumber, address, invalidEmail, minPasswordLength, maxPasswordLength, notMatchPassword, submitting]);
                const handleCreateAccount = async () => {
                    
                    try {
                        await createUserWithEmailAndPassword(auth, email, password);

                        await addDoc(collection(db, "users"), {
                            uid: auth.currentUser.uid,
                            username: username,
                            email: email,
                            phoneNumber: phoneNumber,
                            address: address
                        })

                        

                        navigate('/signin');
                
                        
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                        setInvalidEmail(false);
                        setUsername('');
                        setPhoneNumber('');
                        setAddress('');
                        setIsValid(true);
                        setMinPasswordLength(false);
                        setMaxPasswordLength(false);
                        setNotMatchPassword(false);
                        setSubmitting(false);
                    }
                    catch (error) {
                        console.error(error);
                        alert(error.message);
                        
                        setSubmitting(false);
                    }
                    
                
              
                }
            
            
        
        
            
            

    

    

    const handleGotoSignIn = () => {
        navigate('/signin');
    };

    return (

        <A>

         {/* <div style={{backgroundColor: 'black', width: 430, height: 932,display: 'flex',flexDirection: 'column',}}> */}
        <div style={{display: 'flex',flexDirection: 'column',width: '100%', height: '100vh'}}>
        <div style={{ overflowY: 'auto',overflowX: 'hidden',background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', width: '100%',height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingTop: '60%' }}>
            <div style={{ width: '86%', textAlign: 'center', fontFamily: 'Rockwell', marginTop: '98%' }}>
            <PiPawPrint size={100} color="black" style={{marginTop: '0px'}} />
                <h1 style={{ fontFamily: 'cursive',fontSize: '32px', color: 'black', paddingTop: '2%' }}>Create account</h1>
                <h1 style={{ fontFamily: 'cursive',fontSize: '32px', color: 'black', paddingTop: '0%' }}>and enter contact info</h1>
                {/* <form> */}
                <div style={{ marginTop: '15%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ marginTop: '-10%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><IoMdMail size={35}/> Email</label>
                    
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%', borderWidth: '4px', borderRadius: '200px', borderColor: invalidEmail ? 'red' : 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} placeholder="Enter email" />
                    { invalidEmail && <p style={{ paddingTop: '2%',fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red'}}>Please enter a valid email address</p>}
                </div>
                <div style={{ marginTop: '5%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ fontFamily: 'cursive',alignSelf: 'flex-start',fontSize: '20px', color: 'white' }}><TbLock size={35}/> Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%',borderWidth: '4px', borderRadius: '200px', borderColor: minPasswordLength || maxPasswordLength ? 'red' : 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} placeholder="Enter password" />
                    { minPasswordLength ? <p style={{paddingTop: '2%',fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red'}}>Password must be at least 8 characters long</p> : maxPasswordLength ? <p style={{paddingTop: '2%',fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red'}}>Password must be less than 16 characters long</p> : null}
                </div>
                <div style={{ marginTop: '5%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ fontFamily: 'cursive',alignSelf: 'flex-start',fontSize: '20px', color: 'white' }}><TbLockCheck size={35}/> Comfirm password</label>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%',borderWidth: '4px', borderRadius: '200px', borderColor: notMatchPassword ? 'red' : 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} placeholder="Confirm password" />
                    { notMatchPassword && <p style={{paddingTop: '2%',fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red'}}>Passwords do not match</p>}
                </div>
                <div style={{ marginBlock: '20%',marginTop: '22%' }}>
                    <div style={{ fontFamily: 'cursive', fontSize: '18px', color: 'white' }}>Already have an account? <button onClick={handleGotoSignIn} style={{ fontFamily: 'cursive',textDecoration: 'underline', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>Sign in</button></div>
                    {/* <button onClick={handleContinueAsGuest} style={{ borderWidth: '1px', borderRadius: '20px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '50px', marginTop: '15px', color: 'black', fontSize: '22px', fontFamily: 'cursive' }d}>Continue as Guest</button> */}
                </div>
                
                <h1 style={{ fontFamily: 'cursive',fontSize: '30px', color: 'black', paddingTop: '2%' }}>Enter contact info</h1>            
                
                <div style={{ marginTop: '15%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ marginTop: '-10%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><MdOutlineDriveFileRenameOutline size={35}/> Username</label>
                    
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} placeholder="Enter your preferred username" />
                    {/* { invalidEmail && <p style={{ paddingTop: '2%',fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red'}}>Please enter a valid email address</p>} */}
                </div>
                <div style={{ marginTop: '5%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ fontFamily: 'cursive',alignSelf: 'flex-start',fontSize: '20px', color: 'white' }}><FaPhone size={35}/> Phone number</label>
                    <input
        type="tel"
        id="phone"
        value={phoneNumber}
        onChange={handleSetPhoneNumber}
        placeholder="Enter your phone number"
        pattern="[0-9]*"
        style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%', borderWidth: '4px', borderRadius: '200px', borderColor: isValid ? 'black' : 'red', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }}
      />
                    { !isValid && <p style={{paddingTop: '2%',fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red'}}>Please enter a valid phone number</p>}
                </div>
                <div style={{ marginTop: '15%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{ marginTop: '-10%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><FaAddressCard size={35}/> Address</label>
                    
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '6%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} placeholder="Enter your address" />
                    {/* { invalidEmail && <p style={{ paddingTop: '2%',fontFamily: 'cursive',fontSize: '17px',marginBottom: '-5%',color: 'red'}}>Please enter a valid email address</p>} */}
                </div>
                <button onClick={handleSubmit} style={{ marginTop: '45%',borderWidth: '1px', borderRadius: '20px', borderColor: 'white', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)', backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '22px', fontFamily: 'cursive' }}>Create account</button>
                {/* </form> */}

                <div style={{ marginTop: '30%',opacity: '0'}}>
                    br
                </div>
            </div>
        </div>
        </div>
        </A>
    );
}

export default CreateAccountScreen

