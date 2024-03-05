import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsGeoAlt, BsGeoAltFill } from "react-icons/bs";
import { PiPawPrint } from "react-icons/pi";
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import { A, A2 } from '../components/Animation';
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const HomeScreen = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;


const [isLoadingHome, setIsLoadingHome] = useState(true);

  const [lostPetPosts, setLostPetPosts] = useState([]);
  const [foundPetPosts, setFoundPetPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
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


const PostDetail = ({ post }) => {
  return (
    <div style={{  opacity: 1,zIndex: 3,backgroundColor: 'white',width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      <div style={{  opacity: 1,zIndex: 4,backgroundColor: '#f0f0f0',width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      
      <IoArrowBackCircle onClick={() => setSelectedPost(null)} size={50} style={{opacity: 0.8,position: 'absolute',top: '5%',left: '4%'}}/>
      


      {/* Display detailed information about the post */}
      {/* Example: */}
      <div style={{backgroundColor: 'white',width: '100%',height:'42%',maxHeight: '42%',minHeight: '42%',marginTop: '0%',}}>
        <img style={{width: '100%',height: '100%',objectFit: 'cover' }} src={post.petImage} alt="Post Detail" />
      </div>
      
      <div style={{width: '100%',height:'100%',display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <div style={{width: '90%',height:'91%',display: 'flex', flexDirection: 'column',}}>
         
        <div style={{display: 'flex',flexDirection: 'row',width: '100%',height: '3%',justifyContent: 'flex-end',alignItems: 'center',}}>
        <p style={{fontFamily: 'cursive',fontSize: '14.5px',fontWeight: 'bold'}}>Posted on : {post.postDateAndTime}</p>
          </div>
          
          <div style={{ marginTop: '3%',display: 'flex',flexDirection: 'row',width: '100%',height: '8%',justifyContent: 'flex-start',alignItems: 'center',}}>
              <p style={{overflowX: 'hidden',textOverflow: 'ellipsis',fontWeight: 'bold',fontSize: '28px',fontFamily: 'cursive',}}>{post.petName ? post.petName : 'Found pet'}</p> 
          </div>

          {/* <div style={{display: 'flex',flexDirection: 'row',backgroundColor: 'white',width: '100%',height: '8%',justifyContent: 'space-between',alignItems: 'center',}}> */}
              
          <div style={{ width: '100%',height: '12%',display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start',marginTop: '1%',}}>
                    
                    <div style={{ display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',marginRight: '10px', borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', height: '40px', paddingInline: '20px', marginTop: '0px' }} >
                      <p style={{ color: 'black', fontSize: '19px',paddingTop: '15px',}}>{post.petType}</p>
                      </div>
                    <div style={{ display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',marginRight: '10px',  borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', height: '40px', paddingInline: '20px', marginTop: '0px' }} >
                      <p style={{ color: 'black', fontSize: '19px',paddingTop: '15px',}}>{post.petGender}</p>
                      </div>
                    <div style={{ display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',marginRight: '10px',  borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', height: '40px', paddingInline: '20px', marginTop: '0px' }} >
                      <p style={{ color: 'black', fontSize: '19px',paddingTop: '15px',}}>{post.petSize}</p>
                      </div>
          </div>

          <div style={{display: 'flex',flexDirection: 'row',width: '100%',height: '5%',justifyContent: 'space-between',alignItems: 'center',marginTop: '8%',}}>
              <p style={{fontWeight: 'bold',fontSize: '19px',fontFamily: 'cursive',}}>Got lost in</p> <p style={{maxWidth: '65%',overflowX: 'hidden',textOverflow: 'ellipsis',fontFamily: 'cursive',fontSize: '18px',}}>{post.petLocation}</p>
          </div>         

          <div style={{display: 'flex',flexDirection: 'row',width: '100%',height: '5%',justifyContent: 'space-between',alignItems: 'center',marginTop: '5%',}}>
              <p style={{fontWeight: 'bold',fontSize: '19px',fontFamily: 'cursive',}}>Last seen</p> <p style={{fontFamily: 'cursive',fontSize: '14.5px',fontWeight: 'bold'}}>{post.dateAndTime}</p>
          </div>  
         
          <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '30%',alignItems: 'flex-start',marginTop: '5%',}}>
              <p style={{fontWeight: 'bold',fontSize: '19px',fontFamily: 'cursive',}}>Description</p>
              <div style={{ resize: 'none',minHeight: 30,maxHeight: 30,wordWrap: 'break-word',fontFamily: 'cursive',fontSize: '18px',width: '100%',height: '100%',}}>
                {post.petDescription}

              </div>
          </div>         
         

          <div style={{ position: 'realative',width: '100%',height: '15%',display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginTop: '13%',marginBottom: '5%',}}>
              <div style={{display: 'flex',flexDirection: 'column',height: '100%',justifyContent: 'center',marginTop:20,maxWidth: '62%',}}>
                  <p style={{fontWeight: 'bold',marginBottom: '0px',fontSize: '19px',fontFamily: 'cursive',}}>Posted by</p> <p style={{overflowX: 'hidden',textOverflow: 'ellipsis',fontFamily: 'cursive',fontSize: '18px'}}>{post.username}</p>
              </div>

              <div style={{display: 'flex', flexDirection: 'row',height: '100%',justifyContent: 'center',marginTop:50,}}>
                
              <a href={`tel:+66${post.phoneNumber.substring(1)}`} style={{ textDecoration: 'none' }}>
    <FaPhone size={30} style={{ marginRight: '30px' }} />
  </a>
  
  <a href={`sms:+66${post.phoneNumber.substring(1)}`} style={{ textDecoration: 'none' }}>
    <BiSolidMessageRoundedDots size={35} style={{ marginRight: '15px' }} />
  </a>
              </div>
          
          </div>

         
         
          {/* </div> */}

        </div>

      
      
      
      
      
      
      </div>
        {/* <button onClick={() => setSelectedPost(null)}>Go Back</button> */}
      
      
      
      
      
      
      
      </div>
    </div>
  );
};


useEffect(() => {
  
  const getAllPosts = async () => {
    try {

      const qF = query(collection(db, "foundPetPosts"), orderBy("timeStamp", "desc"));
      
      
      const querySnapshotF = await getDocs(qF);
      
      const foundPetPostsSnapshot = querySnapshotF.docs.map(doc => doc.data());
      setFoundPetPosts(foundPetPostsSnapshot);
      // console.log(foundPetPostsSnapshot);





      
      const qL = query(collection(db, "lostPetPosts"), orderBy("timeStamp", "desc"));
      
      
      const querySnapshotL = await getDocs(qL);
      
      const lostPetPostsSnapshot = querySnapshotL.docs.map(doc => doc.data());
      setLostPetPosts(lostPetPostsSnapshot);
      // console.log(lostPetPostsSnapshot);
      
      
      setTimeout(() => {
        setIsLoadingHome(false); 
        
    }, 500);
      
      
      
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };
  
  
  getAllPosts();
},[])




  return (
    <>
     {/* <div style={{width: 430, height: 932,display: 'flex',flexDirection: 'column',}}> */}
      
      { isLoadingHome ? <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
      <div style={{backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%'}}>
      <Header />
      
      {/* <div style={{backgroundImage: 'url(https://images.unsplash.com/photo-1604342427523-189b17048839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDh8fHxlbnwwfHx8fHw%3D)',width: '100%',height: '100%' }}> */}
        <div style={{marginTop: '27.5%',fontFamily: 'cursive',paddingBlock: '5%',display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
          <h1 style={{fontWeight: 'bold',paddingLeft: '5%',fontSize: 35,color: 'black'}}>Found pets</h1>
          {/* <Link to="/home" style={{color: 'darkblue',paddingRight: '5%',fontSize: 20,textDecorationLine: 'none'}}>See all</Link> */}


        </div>
        <div style={{ width: '100%'}}>
        
        <SkeletonTheme baseColor="#ffffff" highlightColor="#555555">
    
    <Skeleton count={3} duration={0.7} style={{ marginTop: '0%',display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px' }} />
  
</SkeletonTheme> 
          </div>
        
       {/* <div style={{ boxShadow: '0px 0px 30px 10px rgba(0,0,0,0.7)',height: '20%',display: 'flex',flexDirection: 'column',justifyContent: 'space-evenly',alignItems: 'center',overflowX: 'auto',scrollbarWidth: 'none'}}> */}
        {/* {foundPetPosts.map((foundPetPost) => (
          <div onClick={() => setSelectedPost(foundPetPost)} style={{ boxShadow: '0px 0px 30px 5px rgba(0,0,0,1)',marginInline: '4.5%', width: '34%',minWidth: '34%', height: '100%', backgroundColor: 'rgba(0,0,0,0)',borderRadius: 20,border: '5px solid white',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%',display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
            <div style={{paddingTop: '5%',width: '100%',minHeight: '55%',maxHeight: '55%',  }}>
              <img src={foundPetPost.image} alt={foundPetPost.name} style={{ paddingTop: '0%',width: '100%', height: '140%',objectFit: 'cover' }} />
            </div>
            <div style={{ paddingBlock: '5%',width: '100%',height: '100%',display: 'flex',flexDirection: 'row',alignItems: 'flex-end'}}>
              <BsGeoAltFill style={{minWidth: 24,minHeight: 24}} size={24} color='#333333' />
              <div style={{overflow: 'hidden', textOverflow: 'ellipsis',fontSize: 16,fontFamily: 'cursive',color: 'black'}}>{foundPetPost.location}</div>
            </div>
            
          </div>
          </div>
        ))} */}
        
        
        {/* </div> */}

        <div style={{fontFamily: 'cursive',paddingTop: '15%',paddingBottom: '5%',display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
          <h1 style={{fontWeight: 'bold',paddingLeft: '5%',fontSize: 35,color: 'black'}}>Lost pets</h1>
          {/* <Link to="/home" style={{color: 'darkblue',paddingRight: '5%',fontSize: 20,textDecorationLine: 'none'}}>See all</Link> */}


        </div>
        <div style={{ width: '100%'}}>
        
        <SkeletonTheme baseColor="#ffffff" highlightColor="#555555">
    
    <Skeleton count={3} duration={0.7} style={{ marginTop: '2%',display: 'flex',flexDirection: 'row',alignItems: 'center',boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',fontFamily: 'cursive',fontSize: '18px',paddingBlock: '0%', borderWidth: '4px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '40px', paddingLeft: '30px',paddingRight: '30px' }} />
  
</SkeletonTheme> 
          </div>

        
        
 



        {/* <div style={{ boxShadow: '0px 0px 30px 10px rgba(0,0,0,0.7)',height: '23%',display: 'flex',flexDirection: 'column',justifyContent: 'space-evenly',alignItems: 'center',overflowX: 'auto',scrollbarWidth: 'none',marginBottom: '-2.2%'}}> */}
        {/* {lostPetPosts.map((lostPetPost) => (
          <div onClick={() => setSelectedPost(lostPetPost)} style={{ boxShadow: '0px 0px 30px 5px rgba(0,0,0,1)',marginInline: '4.5%', width: '34%',minWidth: '34%', height: '100%', backgroundColor: 'rgba(0,0,0,0)',borderRadius: 20, border: '5px solid white',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%',display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
            <div style={{paddingTop: '5%',width: '100%',minHeight: '65%',maxHeight: '65%', }}>
              <img src={lostPetPost.petImage} alt={lostPetPost.petName} style={{ width: '100%',height: '100%',objectFit: 'cover'}} />
            </div>

            <div style={{}}>
            
              <div style={{overflow: 'hidden', textOverflow: 'ellipsis',fontFamily: 'cursive',fontSize: 20,fontWeight: 'bold',color: 'black',paddingTop: '0%'}}>{lostPetPost.petName}</div>
            
            <div style={{ paddingBottom: '5%',width: '100%',height: '60%',display: 'flex',flexDirection: 'row',alignItems: 'flex-end'}}>
              <BsGeoAltFill style={{minWidth: 24,minHeight: 24,position: 'relative'}} size={24} color='#222222' />
              <div style={{overflow: 'hidden', textOverflow: 'ellipsis',fontSize: 16,fontFamily: 'cursive',color: 'black'}}>{lostPetPost.petLocation}</div>
            </div>
          </div>
        
        
                  
          </div>
          </div>
        ))} */}
        {/* </div> */}

          <BottomTab activeTab={'home'} />

        </div>
          
        
      
        

        {/* </div> */}
    </div> 
    
    
    :
      
      
      
      
       <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
      <div style={{backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%'}}>
      <Header />
      
      {/* <div style={{backgroundImage: 'url(https://images.unsplash.com/photo-1604342427523-189b17048839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDh8fHxlbnwwfHx8fHw%3D)',width: '100%',height: '100%' }}> */}
        <div style={{marginTop: '27.5%',fontFamily: 'cursive',paddingBlock: '5%',display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
          <h1 style={{fontWeight: 'bold',paddingLeft: '5%',fontSize: 35,color: 'black'}}>Found pets</h1>
          {/* <Link to="/home" style={{color: 'darkblue',paddingRight: '5%',fontSize: 20,textDecorationLine: 'none'}}>See all</Link> */}


        </div>
        
       <div style={{ boxShadow: '0px 0px 30px 10px rgba(0,0,0,0.7)',height: '20%',display: 'flex',overflowX: 'auto',scrollbarWidth: 'none'}}>
        {foundPetPosts.map((foundPetPost) => (
          <div onClick={() => setSelectedPost(foundPetPost)} style={{ boxShadow: '0px 0px 30px 5px rgba(0,0,0,1)',marginInline: '4.5%', width: '34%',minWidth: '34%', height: '100%', backgroundColor: 'rgba(0,0,0,0)',borderRadius: 20,border: '5px solid white',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%',display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
            <div style={{paddingTop: '5%',width: '100%',minHeight: '55%',maxHeight: '55%',  }}>
              <img src={foundPetPost.petImage} alt={foundPetPost.name} style={{ paddingTop: '0%',width: '100%', height: '140%',objectFit: 'cover' }} />
            </div>
            <div style={{ paddingBlock: '5%',width: '100%',height: '100%',display: 'flex',flexDirection: 'row',alignItems: 'flex-end'}}>
              <BsGeoAltFill style={{minWidth: 24,minHeight: 24}} size={24} color='#333333' />
              <div style={{overflow: 'hidden', textOverflow: 'ellipsis',fontSize: 16,fontFamily: 'cursive',color: 'black'}}>{foundPetPost.petLocation}</div>
            </div>
            
          </div>
          </div>
        ))}
        </div>

        <div style={{fontFamily: 'cursive',paddingTop: '15%',paddingBottom: '5%',display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
          <h1 style={{fontWeight: 'bold',paddingLeft: '5%',fontSize: 35,color: 'black'}}>Lost pets</h1>
          {/* <Link to="/home" style={{color: 'darkblue',paddingRight: '5%',fontSize: 20,textDecorationLine: 'none'}}>See all</Link> */}


        </div>

        

 



        <div style={{ boxShadow: '0px 0px 30px 10px rgba(0,0,0,0.7)',height: '23%',display: 'flex',overflowX: 'auto',scrollbarWidth: 'none',marginBottom: '-2.2%'}}>
        {lostPetPosts.map((lostPetPost) => (
          <div onClick={() => setSelectedPost(lostPetPost)} style={{ boxShadow: '0px 0px 30px 5px rgba(0,0,0,1)',marginInline: '4.5%', width: '34%',minWidth: '34%', height: '100%', backgroundColor: 'rgba(0,0,0,0)',borderRadius: 20, border: '5px solid white',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%',display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
            <div style={{paddingTop: '5%',width: '100%',minHeight: '65%',maxHeight: '65%', }}>
              <img src={lostPetPost.petImage} alt={lostPetPost.petName} style={{ width: '100%',height: '100%',objectFit: 'cover'}} />
            </div>

            <div style={{}}>
            {/* <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',}}> */}
              <div style={{overflow: 'hidden', textOverflow: 'ellipsis',fontFamily: 'cursive',fontSize: 20,fontWeight: 'bold',color: 'black',paddingTop: '0%'}}>{lostPetPost.petName}</div>
            {/* </div> */}
            <div style={{ paddingBottom: '5%',width: '100%',height: '60%',display: 'flex',flexDirection: 'row',alignItems: 'flex-end'}}>
              <BsGeoAltFill style={{minWidth: 24,minHeight: 24,position: 'relative'}} size={24} color='#222222' />
              <div style={{overflow: 'hidden', textOverflow: 'ellipsis',fontSize: 16,fontFamily: 'cursive',color: 'black'}}>{lostPetPost.petLocation}</div>
            </div>
          </div>
        
        
                  
          </div>
          </div>
        ))}
        </div>

          <BottomTab activeTab={'home'} />

        </div>
          
        
      
        

        {/* </div> */}
    </div>
}
    {selectedPost && <PostDetail post={selectedPost} />}
    
    </>
    
    
  )
}



export default HomeScreen
