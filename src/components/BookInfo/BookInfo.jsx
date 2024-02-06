import React from 'react'
import Navbar from '../NavBar/Navbar'
import { useParams,useLocation } from 'react-router-dom';

const BookInfo = () => {
    const { idx } = useParams();
  const { book } = useLocation().state;
  console.log(book);
  return (
    <div>
        <Navbar isAuthenticate={false}/>

        
        
    </div>
  )
}

export default BookInfo