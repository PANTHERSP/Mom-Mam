// import React, { useEffect } from 'react';
// import { PiPawPrint } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';
// import { A } from '../components/Animation';
// import { auth } from '../config/firebase';

// const WelcomeScreen = () => {
    
//     const navigate = useNavigate();
    
//     useEffect(() => {
//         // Check if user is already signed in, and navigate to '/home' if true
//         if (auth.currentUser) {
//             navigate('/home');
//             return;
//         }
        
//         else {
//         return (
//             <A>
         
//         <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
//         <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//             <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
//                 <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
//                 <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
//             <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                 <div style={{ width: '375px', marginTop: '40px' }}>
//                     <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Welcome to a World Tailored for Pets. Your Gateway to Furry Happiness!</p>
//                 </div>
//                 <div style={{ marginTop: '150px', width: '100%' }}>
//                     <button onClick={() => navigate('/signin')} style={{ borderColor: 'white', borderRadius: '20px', borderWidth: '1px', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)',backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '24px', fontFamily: 'cursive' }}>Get started</button>
                    
//                 </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//         </A>
    
    
    
//     );}
// }, [navigate]);
// }

// export default WelcomeScreen

// import React from 'react';
// import { PiPawPrint } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';

// import { auth } from '../config/firebase';

// const WelcomeScreen = () => {
//     const navigate = useNavigate();
    
//     // Checking if user is authenticated and navigating to '/home' if true
//     if (auth.currentUser) {
//         navigate('/home');
//         return null; // returning null because we've already navigated
//     }
    
//     return (
//         <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
//             <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                 <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
//                     <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
//                     <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
//                     <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                         <div style={{ width: '375px', marginTop: '40px' }}>
//                             <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Welcome to a World Tailored for Pets. Your Gateway to Furry Happiness!</p>
//                         </div>
//                         <div style={{ marginTop: '150px', width: '100%' }}>
//                             <button onClick={() => navigate('/signin')} style={{ borderColor: 'white', borderRadius: '20px', borderWidth: '1px', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)',backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '24px', fontFamily: 'cursive' }}>Get started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WelcomeScreen;



// import React, { useEffect, useState } from 'react';
// import { PiPawPrint } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';

// import { auth } from '../config/firebase';

// const WelcomeScreen = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setIsLoading(false);
//             if (user) {
//                 navigate('/home');
//             }
//         });

//         return () => unsubscribe();
//     }, [navigate]);
    
//     if (isLoading) {
//         return (
//             <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <div className="progress-bar" style={{ width: '200px', height: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '10px', position: 'relative' }}>
//                     <div className="progress" style={{ width: '50%', height: '100%', backgroundColor: '#4CAF50', borderRadius: 'inherit', textAlign: 'center', lineHeight: '20px', color: 'white' }}>Loading...</div>
//                 </div>
//             </div>
//         );
//     }
    
//     return (
//         <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
//             <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                 <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
//                     <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
//                     <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
//                     <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                         <div style={{ width: '375px', marginTop: '40px' }}>
//                             <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Welcome to a World Tailored for Pets. Your Gateway to Furry Happiness!</p>
//                         </div>
//                         <div style={{ marginTop: '150px', width: '100%' }}>
//                             <button onClick={() => navigate('/signin')} style={{ borderColor: 'white', borderRadius: '20px', borderWidth: '1px', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)',backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '24px', fontFamily: 'cursive' }}>Get started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WelcomeScreen;


// import React, { useEffect, useState } from 'react';
// import { PiPawPrint } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';

// import { auth } from '../config/firebase';

// const LoadingScreen = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setIsLoading(false);
//             // Assuming navigation logic after loading
//             navigate('/home');
//         }, 3000); // Simulating a 3-second loading time

//         return () => clearTimeout(timeout);
//     }, [navigate]);
    
//     if (isLoading) {
//         return (
//             <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
//                 <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                     <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
//                         <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
//                         <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
//                         <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                             <div style={{ width: '375px', marginTop: '40px' }}>
//                                 <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Loading...</p>
//                             </div>
//                             <div style={{ marginTop: '20px', width: '100%' }}>
//                                 <div className="progress-bar" style={{ width: '200px', height: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '10px', position: 'relative' }}>
//                                     <div className="progress" style={{ width: '50%', height: '100%', backgroundColor: '#4CAF50', borderRadius: 'inherit', textAlign: 'center', lineHeight: '20px', color: 'white' }}>50%</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Return null if loading is completed (optional)
//     return null;
// }

// export default LoadingScreen;

// import React, { useEffect, useState } from 'react';
// import { PiPawPrint } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';

// import { auth } from '../config/firebase';

// const LoadingScreen = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setIsLoading(false);
//             // Assuming navigation logic after loading
//             navigate('/home');
//         }, 3000); // Simulating a 3-second loading time

//         return () => clearTimeout(timeout);
//     }, [navigate]);
    
//     if (isLoading) {
//         return (
//             <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
//                 <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                     <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
//                         <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
//                         <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
//                         <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                             <div style={{ width: '375px', marginTop: '40px' }}>
//                                 <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Loading...</p>
//                             </div>
//                             <div style={{ marginTop: '20px', width: '100%' }}>
//                                 <div className="progress-bar" style={{ width: '200px', height: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '10px', position: 'relative' }}>
//                                     <div className="progress" style={{ width: '0%', height: '100%', backgroundColor: '#4CAF50', borderRadius: 'inherit', textAlign: 'center', lineHeight: '20px', color: 'white', animation: 'progress-animation 3s linear forwards' }}>Loading...</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         );
//     }

//     // Return null if loading is completed (optional)
//     return null;
// }

// export default LoadingScreen;



// import React, { useEffect, useState } from 'react';
// import { PiPawPrint } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';

// import { auth } from '../config/firebase';

// const LoadingScreen = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setIsLoading(false);
            
//             navigate('/home');
//         }, 1000); 

//         return () => clearTimeout(timeout);
//     }, [navigate]);
    
//     if (isLoading) {
//         return (
//             <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
//                 <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                     <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
//                         <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
//                         <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
//                         <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                             <div style={{ width: '375px', marginTop: '40px' }}>
//                                 <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Loading...</p>
//                             </div>
//                             <div style={{ marginTop: '20px', width: '100%' }}>
//                                 <div className="progress-bar" style={{ width: '200px', height: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '10px', position: 'relative' }}>
//                                     <div className="progress" style={{ width: '0%', height: '100%', backgroundColor: '#4CAF50', borderRadius: 'inherit', textAlign: 'center', lineHeight: '20px', color: 'white', animation: 'progress-animation 1s linear forwards' }}>Loading...</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Return null if loading is completed (optional)
//     return null;
// }

// export default LoadingScreen;



// import React, { useEffect, useState } from 'react';
// import { PiPawPrint } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';

// import { auth } from '../config/firebase';

// const WelcomeScreen = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setIsLoading(false);
//             if (user) {
//                 navigate('/home');
//             }
//         });

//         return () => unsubscribe();
//     }, [navigate]);
    
//     if (isLoading) {
//         return (
//             <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <div className="progress-bar" style={{ width: '200px', height: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '10px', position: 'relative' }}>
//                     <div className="progress" style={{ width: '0%', height: '100%', backgroundColor: '#4CAF50', borderRadius: 'inherit', textAlign: 'center', lineHeight: '20px', color: 'white', animation: 'progress-animation 1s linear forwards' }}>Loading...</div>
//                 </div>
//             </div>
//         );
//     }
    
//     return (
//         <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
//             <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                 <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
//                     <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
//                     <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
//                     <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                         <div style={{ width: '375px', marginTop: '40px' }}>
//                             <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Welcome to a World Tailored for Pets. Your Gateway to Furry Happiness!</p>
//                         </div>
//                         <div style={{ marginTop: '150px', width: '100%' }}>
//                             <button onClick={() => navigate('/signin')} style={{ borderColor: 'white', borderRadius: '20px', borderWidth: '1px', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)',backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '24px', fontFamily: 'cursive' }}>Get started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WelcomeScreen;

import React, { useEffect, useState } from 'react';
import { PiPawPrint } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { A } from '../components/Animation';
import LoadingScreen from '../components/LoadingScreen';

import { auth } from '../config/firebase';

const WelcomeScreen = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isPostLoading, setIsPostLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            
            if (user) {
                // setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false); 
                    navigate('/home'); 
                }, 500);
            }
            else {
                setTimeout(() => {
                    setIsLoading(false); 
                    // navigate('/home'); 
                }, 1000);
            }

            
        });

        return () => unsubscribe();
    }, [navigate]);
    
    
    
    return (
    <>
    { isLoading ? <LoadingScreen/> :
    
        <A>
            <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
                <div style={{ background: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)', height: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Rockwell' }}>
                        <PiPawPrint size={150} color="black" style={{marginTop: '-60px'}}/>
                        <h1 style={{ fontFamily: 'cursive',fontSize: '50px', color: 'black', paddingTop: '0px' }}>Mom Mam</h1>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ width: '375px', marginTop: '40px' }}>
                        <p style={{ fontFamily: 'cursive',color: 'white', fontSize: '20px', textAlign: 'center', lineHeight: '30px', fontStyle: 'italic' }}>Welcome to a World Tailored for Pets. Your Gateway to Furry Happiness!</p>
                    </div>
                    <div style={{ marginTop: '150px', width: '100%' }}>
                        <button onClick={() => navigate('/signin')} style={{ borderColor: 'white', borderRadius: '20px', borderWidth: '1px', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)',backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '24px', fontFamily: 'cursive' }}>Get started</button>
                   
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </A>
    }
    </>);
}

export default WelcomeScreen;


                