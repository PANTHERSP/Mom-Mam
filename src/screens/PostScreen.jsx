import React from 'react'
import BottomTab from '../components/BottomTab'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const PostScreen = () => {

const navigate = useNavigate();

  return (
    // <div style={{width: 430, height: 932,display: 'flex',flexDirection: 'column',}}>
      <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
      <div style={{backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%',display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
      <Header />
      <div style={{width: '90%',marginTop: '55%',display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
            <h2 style={{fontWeight: 'bold',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>Did you found or lost a pet?</h2>
            <div style={{ width: '100%',marginTop: '10%' }}>
                    <button onClick={() => navigate('/lost-pets')} style={{ borderWidth: '1px', borderRadius: '20px', borderColor: 'white', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)', backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '22px', fontFamily: 'cursive' }}>Lost a pet</button>
                    <button onClick={() => navigate('/found-pets')} style={{ borderWidth: '1px', borderRadius: '20px', borderColor: 'black', backgroundImage: 'linear-gradient(to top, #999999, #ffffff, #ffffff)', backgroundColor: 'white', width: '100%', height: '50px', marginTop: '20px', color: 'black', fontSize: '22px', fontFamily: 'cursive' }}>Found a pet</button>
                    
                </div>
        </div>
        
        <BottomTab activeTab={'post'} />
        </div>
        </div>
        
  )
}

export default PostScreen
