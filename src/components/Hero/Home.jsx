import React, { useEffect ,useState} from 'react'
import Navbar from '../NavBar/Navbar'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
	const [isAuthenticate,setAuthenticate] = useState(false);
  useEffect(()=>{
    let session_key = document.cookie.match(/session_key=([^;]*)/);
    
    if(!session_key){
      setAuthenticate(false);
      navigate('/');
    }
    else{
      if(session_key[1]){
        setAuthenticate(true);
      }
    }
    

  },[])
  return (
    <>
        <Navbar isAuthenticate={isAuthenticate}/>
        <Hero/>
    </>
  )
}

export default Home