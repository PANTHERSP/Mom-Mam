import React, { useEffect, useState } from 'react'
import BottomTab from '../components/BottomTab'
import Header from '../components/Header'
import { db, auth } from '../config/firebase'

import { signOut } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

import LoadingScreen from '../components/LoadingScreen'
import { collection, getDocs, getDoc, query, where } from 'firebase/firestore'

import { IoMdMail } from "react-icons/io";
import { FaPhone, FaAddressCard } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'






const ProfileScreen = () => {

const [user, setUser] = useState(null);
const [userInfo, setUserInfo] = useState({});
const [isLoading, setIsLoading] = useState(false);
const [isLoadingProfile, setIsLoadingProfile] = useState(true);



  const navigate = useNavigate();

  
     const handleSignOut = async () => {
       try {
         await signOut(auth);
         setUserInfo({});
         console.log(auth.currentUser);
         setIsLoading(true);
        
        setTimeout(() => {
         setIsLoading(false); 
         navigate('/signin'); 
     }, 700);
       } catch (error) {
         console.error(error);
       }
     }

    

     

      

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( async () => {
            try {
                console.log(auth.currentUser.uid);
    
                const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
                const querySnapshot = await getDocs(q);
    
                const userData = querySnapshot.docs.map(doc => doc.data());
                setUserInfo(userData[0]);
                console.log(userData[0]);
                setTimeout(() => {
                    setIsLoadingProfile(false);
                }, 700);
                
            } catch (error) {
                console.error(error);
            }
        });
    
        return () => unsubscribe();
    }, []);
    
         
         
         
         






  return (
    <>
     {/* <div style={{width: 430, height: 932,display: 'flex',flexDirection: 'column',}}> */}
        { isLoading ? <LoadingScreen /> : isLoadingProfile ? 
        
        
        
        
    <>
  <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
  <div style={{backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%',display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
    <Header />

<h2 style={{ fontWeight: 'bold',paddingTop: '32%',fontSize: 40,fontFamily: 'cursive',color: 'black'}}>Your info</h2>

<div style={{display: 'flex',flexDirection: 'column',width: '90%', height: '100%', marginTop: '4%' }}>
    
    
    
    <div style={{ boxShadow: '0px 0px 20px 0px black',opacity: '0.95',marginTop: '0%',borderRadius: '35px 35px 35px 35px',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',backgroundImage: 'linear-gradient(to bottom, #4b4079, #6c2c72, #d64045)',width: '100%',height: '63%'}}>
        <div style={{ paddingTop: '6.517%',display: 'flex',flexDirection: 'column',justifyContent: 'space-evenly',alignItems: 'center',width: '90%',height: '100%'}}>

        {/* <div style={{ paddingTop: '5%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> */}
        <div style={{ width: '100%'}}>
        <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><MdOutlineDriveFileRenameOutline size={35}/> Username</label>
        
        <SkeletonTheme baseColor="#ffffff" highlightColor="#555555">
    
      <Skeleton count={1} duration={1} style={{ marginTop: '2%', display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px' }} />
    
  </SkeletonTheme> 
        
          
          </div>
          
          <div style={{ width: '100%'}}>
        <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><IoMdMail size={35}/> Email</label>
        <SkeletonTheme baseColor="#ffffff" highlightColor="#555555">
    
    <Skeleton count={1} duration={0.9} style={{ marginTop: '2%',display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px' }} />
  
</SkeletonTheme> 
          </div>
          
        
        <div style={{ width: '100%'}}>
        <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><FaPhone size={35}/> Phone number</label>
        <SkeletonTheme baseColor="#ffffff" highlightColor="#555555">
    
    <Skeleton count={1} duration={0.8} style={{ marginTop: '2%',display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px' }} />
  
</SkeletonTheme> 
          </div>
       
          <div style={{ width: '100%'}}>
        <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><FaAddressCard size={35}/> Address</label>
        <SkeletonTheme baseColor="#ffffff" highlightColor="#555555">
    
    <Skeleton count={1} duration={0.7} style={{ marginTop: '2%',display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px' }} />
  
</SkeletonTheme> 
          </div>
    {/* </div> */}



        </div>
        {/* <h1 style={{paddingLeft: '1%',fontSize: 40,fontFamily: 'cursive',color: 'white'}}>{userInfo.username}</h1> */}
    </div>
  </div>
      {/* <p> Hello, {userInfo.username}</p>
        <p> {userInfo.email}</p>
         <p>{userInfo.address}</p>
         <p>{userInfo.phoneNumber}</p> */}

      

      <button onClick={handleSignOut} style={{ position: 'absolute', bottom: '19.5%', borderWidth: '1px', borderRadius: '20px', borderColor: 'white', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)', backgroundColor: '#473FB7', width: '70%', height: '50px', color: 'white', fontSize: '22px', fontFamily: 'cursive' }}>Sign out</button>
    
    <BottomTab activeTab={'profile'} />
  </div>
</div>
  
  </>
  :
          
          <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
              <div style={{backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%',display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                <Header />

            <h2 style={{ fontWeight: 'bold',paddingTop: '32%',fontSize: 40,fontFamily: 'cursive',color: 'black'}}>Your info</h2>

            <div style={{display: 'flex',flexDirection: 'column',width: '90%', height: '100%', marginTop: '4%' }}>
                
                
                
                <div style={{ boxShadow: '0px 0px 20px 0px black',opacity: '0.95',marginTop: '0%',borderRadius: '35px 35px 35px 35px',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',backgroundImage: 'linear-gradient(to bottom, #4b4079, #6c2c72, #d64045)',width: '100%',height: '63%'}}>
                    <div style={{ display: 'flex',flexDirection: 'column',justifyContent: 'space-evenly',alignItems: 'center',width: '90%',height: '100%'}}>

                    {/* <div style={{ paddingTop: '5%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> */}
                    <div style={{ width: '100%'}}>
                    <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><MdOutlineDriveFileRenameOutline size={35}/> Username</label>
                    <div style={{ display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} >
                      <p style={{ color: 'black', fontSize: '18px',paddingTop: '15px',overflow: 'hidden', textOverflow: 'ellipsis',}}>{userInfo.username}</p>
                      </div>
                      </div>
                      
                      <div style={{ width: '100%'}}>
                    <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><IoMdMail size={35}/> Email</label>
                    <div style={{ display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} >
                      <p style={{ color: 'black', fontSize: '18px',paddingTop: '15px',overflow: 'hidden', textOverflow: 'ellipsis', }}>{userInfo.email}</p>
                      </div>
                      </div>
                      
                    
                    <div style={{ width: '100%'}}>
                    <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><FaPhone size={35}/> Phone number</label>
                    <div style={{ display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} >
                      <p style={{ color: 'black', fontSize: '18px',paddingTop: '15px',overflow: 'hidden', textOverflow: 'ellipsis',}}>{userInfo.phoneNumber}</p>
                      </div>
                      </div>
                   
                      <div style={{ width: '100%'}}>
                    <label style={{ marginTop: '0%',fontFamily: 'cursive',alignSelf: 'flex-start', fontSize: '20px', color: 'white' }}><FaAddressCard size={35}/> Address</label>
                    <div style={{ display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px' }} >
                      <p style={{ color: 'black', fontSize: '18px',paddingTop: '15px',overflow: 'hidden', textOverflow: 'ellipsis',}}>{userInfo.address}</p>
                      </div>
                      </div>
                {/* </div> */}



                    </div>
                    {/* <h1 style={{paddingLeft: '1%',fontSize: 40,fontFamily: 'cursive',color: 'white'}}>{userInfo.username}</h1> */}
                </div>
              </div>
                  {/* <p> Hello, {userInfo.username}</p>
                    <p> {userInfo.email}</p>
                     <p>{userInfo.address}</p>
                     <p>{userInfo.phoneNumber}</p> */}

                  
      
                  <button onClick={handleSignOut} style={{ position: 'absolute', bottom: '19.5%', borderWidth: '1px', borderRadius: '20px', borderColor: 'white', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)', backgroundColor: '#473FB7', width: '70%', height: '50px', color: 'white', fontSize: '22px', fontFamily: 'cursive' }}>Sign out</button>
                
                <BottomTab activeTab={'profile'} />
              </div>
           </div>
          
          }
      
        

      </>
  )
}

export default ProfileScreen
