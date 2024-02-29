import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsGeoAlt} from "react-icons/bs";
import { PiPawPrint } from "react-icons/pi";

const LoginScreen = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  // const itemList = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
  const itemList = [{
    id: 1,
    name: 'Dog',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Cat',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Bird',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },{
    id: 4,
    name: 'Dog',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Cat',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Bird',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Dog',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    name: 'Cat',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: 'Bird',
    image: 'https://plus.unsplash.com/premium_photo-1665952050581-4bf02bb5752e?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]
  return (
    
    <div style={{backgroundColor: 'black', width: 430, height: 932,display: 'flex',flexDirection: 'column',}}>
      {/* <div style={{display: 'flex',flexDirection: 'column',}}> */}
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',backgroundImage: 'linear-gradient(to bottom, #4b4079, #6c2c72, #d64045)',width: '100%',height: '12%'}}>
        <PiPawPrint size={50} color='white'/>
        <h1 style={{paddingLeft: '1%',fontSize: 40,fontFamily: 'cursive',color: 'white'}}>Mom Mam</h1>
      </div>
      <div style={{backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%'}}>
      
      {/* <div style={{backgroundImage: 'url(https://images.unsplash.com/photo-1604342427523-189b17048839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDh8fHxlbnwwfHx8fHw%3D)',width: '100%',height: '100%' }}> */}
        <div style={{fontFamily: 'Rockwell',paddingBlock: '5%',display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
          <h1 style={{paddingLeft: '5%',fontSize: 35,color: 'black'}}>Found pets</h1>
          <Link to="/home" style={{color: 'darkblue',paddingRight: '5%',fontSize: 18,textDecorationLine: 'none'}}>See all</Link>


        </div>
        
       <div style={{ height: '25%',display: 'flex',overflowX: 'auto',scrollbarWidth: 'none'}}>
        {itemList.map((item) => (
          <div key={item.id} style={{ marginInline: '5%', width: '32%',minWidth: '32%', height: '100%', backgroundColor: '#12A594',borderRadius: 20,border: '3px solid white',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%',display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
            <div style={{paddingTop: '5%',width: '100%', height: '65%', }}>
              <img src={item.image} alt={item.name} style={{ paddingTop: '5%',width: '100%', height: '140%',objectFit: 'cover' }} />
            </div>
            <div style={{ paddingBlock: '5%',width: '100%',height: '100%',display: 'flex',flexDirection: 'row',alignItems: 'flex-end'}}>
              <BsGeoAlt size={20} color='white' />
              <div style={{color: 'white'}}>Location</div>
            </div>
            
          </div>
          </div>
        ))}
        </div>

        <div style={{fontFamily: 'Rockwell',paddingTop: '15%',paddingBottom: '5%',display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
          <h1 style={{paddingLeft: '5%',fontSize: 35,color: 'black'}}>Lost pets</h1>
          <Link to="/home" style={{color: 'darkblue',paddingRight: '5%',fontSize: 18,textDecorationLine: 'none'}}>See all</Link>


        </div>

        {/* <div style={{ backgroundColor: 'green',display: 'flex',overflowX: 'auto',scrollbarWidth: 'none'}}>
        {itemList.map((item, index) => (
          <div key={index} style={{ marginIline: '5%', minWidth: '35%', height: 180, backgroundColor: 'blue', border: '1px solid #ccc',justifyContent: 'center',alignItems: 'center',display: 'flex' }}>
          <div style={{ backgroundColor: 'red', border: '1px solid #ccc' }}>
            {item}
          </div>
          </div>
        ))}
        </div> */}
        <div style={{ height: '25%',display: 'flex',overflowX: 'auto',scrollbarWidth: 'none'}}>
        {itemList.map((item) => (
          <div key={item.id} style={{ marginInline: '5%', width: '32%',minWidth: '32%', height: '100%', backgroundColor: '#12A594',borderRadius: 20, border: '3px solid white',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%',display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
            <div style={{paddingTop: '5%',width: '100%', height: '65%', }}>
              <img src={item.image} alt={item.name} style={{ width: '100%',height: '100%',objectFit: 'cover'}} />
            </div>

            <div style={{ display: 'flex',flexDirection: 'column',}}>
            {/* <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',}}> */}
              <div style={{fontSize: 20,fontWeight: 'bold',color: 'white',paddingTop: '0%'}}>{item.name}</div>
            {/* </div> */}
            <div style={{paddingBottom: '5%',width: '100%',height: '100%',display: 'flex',flexDirection: 'row',alignItems: 'flex-end'}}>
              <BsGeoAlt size={20} color='white' />
              <div style={{color: 'white'}}>Location</div>
            </div>
          </div>
        
        
                  
          </div>
          </div>
        ))}
        </div>
        </div>
          
        
      
        

        {/* </div> */}
    </div>

    
    
  )
}



export default LoginScreen
