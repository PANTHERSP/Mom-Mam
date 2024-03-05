import React, { useState } from 'react'
import { IoHomeOutline, IoHome, IoAddCircle, IoAddCircleOutline, IoPersonCircle, IoPersonCircleOutline, IoSearch, IoSearchOutline } from "react-icons/io5";
import { useNavigate , Link } from 'react-router-dom';
// const BottomTab = ({activeTab}) => {

//     const navigate = useNavigate();


//   return (
//     <div style={{width: '100%', height: '15%',backgroundColor: 'black', display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'center',marginTop: '14%',borderRadius: '50px 50px 0px 0px'}}>
        
//         <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
//             <button onClick={() => navigate('/home')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
//             { activeTab === 'home' ? <IoHome size={40} color="yellow"/> : <IoHomeOutline size={40} color="white"/>}
//             <p style={{fontSize: 18,color: 'white',fontFamily: 'cursive'}}>Home</p>

//             </button>
//         </div>
//         <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
//             <button onClick={() => navigate('/search')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
//             { activeTab === 'search' ? <IoSearch size={40} color="yellow"/> : <IoSearchOutline size={40} color="white"/>}
//             <p style={{fontSize: 18,color: 'white',fontFamily: 'cursive'}}>Search</p>

//             </button>
//         </div>
//         <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
//             <button onClick={() => navigate('/post')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
//             { activeTab === 'post' ? <IoAddCircle size={40} color="yellow"/> : <IoAddCircleOutline size={40} color="white"/>}
//             <p style={{fontSize: 18,color: 'white',fontFamily: 'cursive'}}>Post</p>

//             </button>
//         </div>
//         <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
//             <button onClick={() => navigate('/profile')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
//             { activeTab === 'profile' ? <IoPersonCircle size={40} color="yellow"/> : <IoPersonCircleOutline size={40} color="white"/>}
//             <p style={{fontSize: 18,color: 'white',fontFamily: 'cursive'}}>Profile</p> 

//             </button>
//         </div>
    
//     </div>
//   )
// }

// export default BottomTab

const BottomTab = ({activeTab}) => {

    const navigate = useNavigate();

    let iconSize;

    // activeTab === 'home' ? 



  return (
    <div style={{ position: 'absolute',bottom: 0,left: 0,boxShadow: '0px 0px 20px 0px black',opacity: '0.95',backgroundImage: 'linear-gradient(to top, #4b4079, #6c2c72, #d64045)',width: '100%', height: '15%',backgroundColor: 'black', display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'center',marginTop: '0%',borderRadius: '50px 50px 0px 0px'}}>
        
        <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
            <button onClick={() => navigate('/home')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
            { activeTab === 'home' ? 
                <><IoHome size={40} color="yellow"/> <p style={{fontSize: 19,color: 'yellow',fontFamily: 'cursive'}}>Home</p></> : 
                <><IoHomeOutline size={34} color="white"/> <p style={{fontSize: 17,color: 'white',fontFamily: 'cursive'}}>Home</p></>
            }
    
            </button>
        </div>
        {/* <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
            <button onClick={() => navigate('/search')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
            { activeTab === 'search' ? 
                <><IoSearch size={40} color="yellow"/> <p style={{fontSize: 19,color: 'yellow',fontFamily: 'cursive'}}>Search</p></> : 
                <><IoSearchOutline size={34} color="white"/> <p style={{fontSize: 17,color: 'white',fontFamily: 'cursive'}}>Search</p></>
            }
            

            </button>
        </div> */}
        <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
            <button onClick={() => navigate('/post')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
            { activeTab === 'post' ? 
                <><IoAddCircle size={40} color="yellow"/> <p style={{fontSize: 19,color: 'yellow',fontFamily: 'cursive'}}>Post</p></> : 
                <><IoAddCircleOutline size={34} color="white"/> <p style={{fontSize: 17,color: 'white',fontFamily: 'cursive'}}>Post</p></>
            }

            </button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}> 
            <button onClick={() => navigate('/profile')} style={{backgroundColor: 'transparent',borderWidth: 0,borderRadius: '100%',paddingBottom: '10%'}}>
            { activeTab === 'profile' ? 
                <><IoPersonCircle size={40} color="yellow"/> <p style={{fontSize: 19,color: 'yellow',fontFamily: 'cursive'}}>Profile</p></> : 
                <><IoPersonCircleOutline size={34} color="white"/> <p style={{fontSize: 17,color: 'white',fontFamily: 'cursive'}}>Profile</p></>
            } 

            </button>
        </div>
    
    </div>
  )
}

export default BottomTab