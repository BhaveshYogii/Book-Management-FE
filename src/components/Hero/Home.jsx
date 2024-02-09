import React, { useEffect ,useState} from 'react'
import Navbar from '../NavBar/Navbar'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import BestBook from '../BestBooks/BestBook';
import Footer from '../Footer/Footer';

const Home = () => {
  const navigate=useNavigate();
	const [isAuthenticate,setAuthenticate] = useState(false);
  let session_key = document.cookie.match(/session_key=([^;]*)/);
  useEffect(()=>{
    
    if(!session_key){
      setAuthenticate(false);
      navigate('/');
    }
    else{
      if(session_key[1]){
        setAuthenticate(true);
      }
    }

  },[session_key])
  return (
    <>
        <Navbar isAuthenticate={isAuthenticate} setAuthenticate={setAuthenticate}/>
        <Hero/>
        <Search isAuthenticate={isAuthenticate} setAuthenticate={setAuthenticate}/>
        <Footer/>
    </>
  )
}

export default Home;