import { useState } from 'react';

function Search() {

  return (
    <>
    <form className='flex justify-center  mt-[15px]'>
      <div className="flex py-10 w-[800px] h-[150px] justify-center border-black ">
        <div className="relative w-full">
          <input type="search" id="search-dropdown" className="block h-[70px] p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Which book are you looking for?" style={{ fontSize: '1.25rem' }} required/>
          <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
    {/* <div className="container flex justify-evenly">
    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>All Categories</button>
    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>Fiction</button>
    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>Motivational</button>
    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>Anime</button>
    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>Romance</button>
    </div> */}
    </>
  );
}

export default Search;
