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
        </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App