import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Hero/Home';
import SignUp from './components/SignUp/SignUp';
import BookInfo from './components/BookInfo/BookInfo';
import Cart from './components/Cart/Cart';
import SellerSignup from './components/SellerSignUp/SellerSignup' ;
import UploadBooks from './components/SellerDashboard/UploadBooks';

const App = () => {
  return(
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <BrowserRouter>
        <Routes>
          {
            <Route 
              exact path='/' 
              element={<Home/>}
              />
          }
          {
            <Route 
              exact path='/login'
              element={<Login/>}
              />
          }
          {
            <Route 
            exact path='/signup' 
            element={<SignUp/>}
            />     
          }
          {
            <Route
              exact path='/my_book/:idx'
              element = {<BookInfo/>}
            />
          }
          {
            <Route
              exact path='/cart'
              element = {<Cart/>}
            />
          }
          {
            <Route
              exact path='/seller-request'
              element = {<SellerSignup/>}
            />
          }
          {
            <Route
              exact path='/upload-book'
              element = {<UploadBooks/>}
            />
          }
        </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App