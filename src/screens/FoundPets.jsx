import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { LuDog, LuCat } from "react-icons/lu";
import { IoMale, IoFemale, IoCalendar } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { BsGeoAlt, BsGeoAltFill } from "react-icons/bs";
import { FaPenAlt } from "react-icons/fa";
import  { useNavigate } from 'react-router-dom';
import { IoMdClock, IoMdArrowRoundBack  } from "react-icons/io";
import { FaFileUpload } from "react-icons/fa";
import { A } from '../components/Animation';
import { db, auth, storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import LoadingScreen from '../components/LoadingScreen';

// import { storage } from '../firebase';

const FoundPets = () => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  
  const [petType, setPetType] = useState('dog')
  const [petGender, setPetGender] = useState('male')
  const [petSize, setPetSize ] = useState('small')  
  const [petDescription, setPetDescription] = useState('')
  const [petLocation, setPetLocation] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [petImage, setPetImage] = useState(null)
  
 

  const handlePetTypeChange = (type) => {
    setPetType(type);
    // console.log(petType);
  };

  const handlePetGenderChange = (gender) => {
    setPetGender(gender);
    // console.log(petGender);
  }

  const handlePetSizeChange = (size) => {
    setPetSize(size);
    // console.log(petSize);
  }

  const verifyPost = () => {
    if ( !petType || !petGender || !petSize || !petDescription || !petLocation || !date || !time || !petImage) {
      alert('Please fill in all fields');
      return;
    }
    else {
      handlePost();
    }
  }

  const handlePost = async () => {
    const currentUser = auth.currentUser;
    const postDate = new Date(Date.now());
    const postDateAndTime = postDate.toLocaleString([], { hour: '2-digit', minute: '2-digit', year: 'numeric', month: '2-digit', day: '2-digit' });
    
    const dateParts = date.split('-');
    const timeParts = time.split(':');
    const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1]);
    const formattedDate = `${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getDate().toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
    let hours = dateObj.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')} ${ampm}`;
    const dateAndTime = `${formattedDate}, ${formattedTime}`;
    
    try {
      const storageRef = ref(storage, `foundPetPosts/${petImage.name}`);
      await uploadBytes(storageRef, petImage);
      const downloadURL = await getDownloadURL(storageRef);

      
      const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
                const querySnapshot = await getDocs(q);
    
                const userData = querySnapshot.docs.map(doc => doc.data());
                // setUserInfo(userData[0]);
                // console.log(userData[0]);
      
          
      const docRef = await addDoc(collection(db, "foundPetPosts"), {
        
        petType: petType,
        petGender: petGender,
        petSize: petSize,
        petDescription: petDescription,
        petLocation: petLocation,
        petImage: downloadURL,
        dateAndTime: dateAndTime,
        postDateAndTime: postDateAndTime,
        timeStamp: Date.now(),
        uid: currentUser.uid,
        username: userData[0].username,
        phoneNumber: userData[0].phoneNumber,

        
      });
      
      console.log(downloadURL);
      console.log(postDateAndTime);
      console.log(currentUser);
      console.log(currentUser.uid);

      
      setPetType('dog');
      setPetGender('male');
      setPetSize('small');
      setPetDescription('');
      setPetLocation('');
      setDate('');
      setTime('');
      setPetImage(null);

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/post')
    }, 800);

    } catch (error) {
      console.error("Error adding document: ", error);
    }
    
  }

  


  return (

    <>{ isLoading ? <LoadingScreen /> :

    <A>


     {/* <div style={{width: 430, height: 932,display: 'flex',flexDirection: 'column',}}> */}
         <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>  
      <IoMdArrowRoundBack onClick={() => navigate('/post')} size={45} style={{zIndex: 3,position: 'absolute',color: 'white',marginTop: '10%',marginLeft: '7%'}}/>
      <div style={{ zIndex: 1,backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%',display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
      <Header />
      <div style={{ paddingTop: '27%',overflowY: 'auto',overflowX: 'hidden',width: '100%',height: '100%',display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
      <div style={{ width: '90%',height: '100%',marginTop: '0%',display: 'flex',flexDirection: 'column',alignItems: 'flex-start',}}>
          
          
              
         

              <h2 style={{ width: '100%',marginTop: '7%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>What kind of pet is it?</h2>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ zIndex: 0,marginTop: '0%' }}>
                <input type="radio" className="btn-check" name="petType" id="dog" autoComplete="off" onChange={() => handlePetTypeChange('dog')} defaultChecked />
                <label className="btn btn-outline-dark" htmlFor="dog" style={{ backgroundColor: '',marginRight: '20px',borderRadius: '25px',borderWidth: '5px' }}><LuDog size={75}/><p style={{fontSize: 18.175,fontFamily: 'cursive'}}>Puppy</p></label>

                <input type="radio" className="btn-check" name="petType" id="cat" autoComplete="off" onChange={() => handlePetTypeChange('cat')} />
                <label className="btn btn-outline-dark" htmlFor="cat" style={{ borderWidth: '5px',marginRight: '20px',borderRadius: '25px',backgroundColor: '' }}><LuCat size={75}/><p style={{fontSize: 18.175,fontFamily: 'cursive'}}>Kitty</p></label>
              </div>

              <h2 style={{ width: '100%',marginTop: '9%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>Male or female?</h2>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ zIndex: 0,marginTop: '0%' }}>
                <input type="radio" className="btn-check" name="petGender" id="male" autoComplete="off" onChange={() => handlePetGenderChange('male')} defaultChecked />
                <label className="btn btn-outline-dark" htmlFor="male" style={{ backgroundColor: '',marginRight: '20px',borderRadius: '25px',borderWidth: '5px' }}><IoMale size={75}/><p style={{fontSize: 18.175,fontFamily: 'cursive'}}>Male</p></label>

                <input type="radio" className="btn-check" name="petGender" id="female" autoComplete="off" onChange={() => handlePetGenderChange('female')} />
                <label className="btn btn-outline-dark" htmlFor="female" style={{ borderWidth: '5px',marginRight: '20px',borderRadius: '25px',backgroundColor: '' }}><IoFemale size={75}/><p style={{fontSize: 18.175,fontFamily: 'cursive'}}>Female</p></label>

                <input type="radio" className="btn-check" name="petGender" id="notSure" autoComplete="off" onChange={() => handlePetGenderChange('notSure')} />
                <label className="btn btn-outline-dark btn--bs-success  " htmlFor="notSure" style={{ borderWidth: '5px',marginRight: '20px',borderRadius: '25px',backgroundColor: '' }}><FaQuestion size={75}/><p style={{fontSize: 18.175,fontFamily: 'cursive'}}>Not sure</p></label>
              </div>

              <h2 style={{ width: '100%',marginTop: '9%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>What size?</h2>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ zIndex: 0,marginTop: '0%' }}>
                <input type="radio" className="btn-check" name="petSize" id="small" autoComplete="off" onChange={() => handlePetSizeChange('small')} defaultChecked />
                <label className="btn btn-outline-dark btn-lg" htmlFor="small" style={{ backgroundColor: '',marginRight: '20px',borderRadius: '25px',borderWidth: '5px' }}><p style={{fontSize: 20,fontFamily: 'cursive',fontWeight: 'bold'}}>Small</p><p style={{fontSize: 18,fontFamily: 'cursive'}}>0-5kg</p></label>

                <input type="radio" className="btn-check" name="petSize" id="medium" autoComplete="off" onChange={() => handlePetSizeChange('medium')} />
                <label className="btn btn-outline-dark btn-lg" htmlFor="medium" style={{ borderWidth: '5px',marginRight: '20px',borderRadius: '25px',backgroundColor: '' }}><p style={{fontSize: 20,fontFamily: 'cursive',fontWeight: 'bold'}}>Medium</p><p style={{fontSize: 18,fontFamily: 'cursive'}}>6-14kg</p></label>

                <input type="radio" className="btn-check" name="petSize" id="big" autoComplete="off" onChange={() => handlePetSizeChange('big')} />
                <label className="btn btn-outline-dark btn-md" htmlFor="big" style={{ borderWidth: '5px',marginRight: '20px',borderRadius: '25px',backgroundColor: '' }}><p style={{fontSize: 20,fontFamily: 'cursive',fontWeight: 'bold'}}>Big</p><p style={{fontSize: 18,fontFamily: 'cursive'}}>15-30kg</p></label>
              </div>

              <h2 style={{ width: '100%',marginTop: '10%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>Where did you find it?</h2>
              <label style={{ width: '100%',display: 'flex',flexDirection: 'row',alignSelf: 'flex-start',fontSize: 18,fontFamily: 'cursive',color: 'black'}}>
                <BsGeoAltFill size={45} style={{color: 'black',marginTop: '5px'}}/>
                <input style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',marginLeft: '2%',borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '7%', paddingLeft: '30px',paddingRight: '30px', marginTop: '5px',paddingBlock: '6%' }} value={petLocation} onChange={(e) => setPetLocation(e.target.value)} type='text' placeholder="Place where you found it"></input>
              </label>

              <h2 style={{ width: '100%',marginTop: '10%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>When did you last see it?</h2>
              <label style={{ width: '64%',display: 'flex',flexDirection: 'row',alignSelf: 'flex-start',fontSize: 18,fontFamily: 'cursive',color: 'black'}}>
                <IoCalendar size={45} style={{color: 'black',marginTop: '5px'}}/>
                <input style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',marginLeft: '3%',color: 'black',borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '7%', paddingLeft: '20px',paddingRight: '20px', marginTop: '5px',paddingBlock: '10%' }} value={date} onChange={(e) => setDate(e.target.value)} type='date' ></input>
              </label>
              <label style={{ marginTop: '0%',width: '58%',display: 'flex',flexDirection: 'row',alignSelf: 'flex-start',fontSize: 18,fontFamily: 'cursive',color: 'black'}}>
                <IoMdClock size={50} style={{color: 'black',marginTop: '5px'}}/>
                
                <input style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',marginLeft: '3%',color: 'black',borderWidth: '4px', borderRadius: '200px', borderColor: 'black', backgroundColor: 'white', width: '100%', height: '7%', paddingLeft: '20px',paddingRight: '20px', marginTop: '5px',paddingBlock: '11%' }} value={time} onChange={(e) => setTime(e.target.value)} type='time' ></input>
              </label>

              <h2 style={{ width: '100%',marginTop: '10%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>Upload a picture of the pet</h2><h2 style={{ width: '100%',marginTop: '1%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>that you found</h2>
              <label style={{ width: '82%',display: 'flex',flexDirection: 'row',alignSelf: 'flex-start',fontSize: 18,fontFamily: 'cursive',color: 'black'}}>
                <FaFileUpload size={36} style={{color: 'black',marginTop: '5px'}}/>
                <input accept="image/*" style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',marginLeft: '6%',borderWidth: '4px', borderRadius: '200px',color: 'white', borderColor: 'black', backgroundColor: 'black', width: '100%', height: '72.7%', paddingLeft: '0px',paddingRight: '0px', marginTop: '12px',paddingBottom: '0%' }} onChange={(e) => setPetImage(e.target.files[0])} type='file' placeholder="Place where you found it"></input>
              </label>
              

              <h2 style={{ width: '100%',marginTop: '20%',alignSelf: 'flex-start',fontSize: 25,fontFamily: 'cursive',color: 'black'}}>Description</h2>
              <label style={{ width: '100%',display: 'flex',flexDirection: 'row',alignSelf: 'flex-start',fontSize: 18,fontFamily: 'cursive',color: 'black'}}>
              <textarea
              style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.7)',overflowY: 'hidden',resize: 'none',borderWidth: '4px', borderRadius: '10px', borderColor: 'black', backgroundColor: 'white', width: '100%',height: '100%',padding: '15px',}}
        id="multiline-input"
        // value={''}
        placeholder="E.g. Waddles was last seen chilling in the park..."
        value={petDescription}
        onChange={(e) => setPetDescription(e.target.value)}
        rows={5} 
        cols={50} 
      />
                
              </label>

              <button onClick={verifyPost} style={{ display: 'flex', justifyContent: 'center',alignItems: 'center',paddingBlock: '7%',marginTop: '50%',borderWidth: '1px', borderRadius: '20px', borderColor: 'white', backgroundImage: 'linear-gradient(to top, #222222, #4b4079, #6c2c72)',backgroundColor: '#473FB7', width: '100%', height: '50px', color: 'white', fontSize: '22px', fontFamily: 'cursive' }}>Post now!</button>

              <div style={{ opacity: '0',width: '100%',height: '100%',marginTop: '45%'}}>
                br
              </div>
              
    
              

              


  
                 
          

          
        
        
        
        
        
      </div>

      
      
        </div>
      </div>
    </div>
    </A>
}
</>
    
  )
}

export default FoundPets