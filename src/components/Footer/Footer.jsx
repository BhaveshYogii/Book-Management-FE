import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { IoArrowRedoOutline } from "react-icons/io5";
const FooterLink=[
    {
        title : "Home",
        link : "/",
    },
    {
        title : "About",
        link : "/about",
    },
    {
        title : "Contact",
        link : "/#",
    },
    {
        title : "Blog",
        link : "/#",
    },
]
const Footer = () => {
  return (
    <div >
        <div className='container border-t-2'>
    <div className='grid md:grid-cols-3 py-5 ' >
    {/* company details */}
    <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Book Store</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sit excepturi iste amet eos vitae cupiditate velit, corporis accusamus repellendus labore consequuntur alias, aliquid fugit, corrupti veniam rerum laborum id.
            </p>
            <br />
            {/* social links */}
            <div className='flex items-center gap-3'>
            <FaLocationArrow/>
            <p>Indore, Madhya Pradesh</p>
            </div>
            <div className='flex items-center gap-3 mt-3'>
            <FaMobileAlt/>
            <p>+91 8324170941</p>
            </div>
            <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                    <FaInstagram className='text-3xl'/>
                </a>
                <a href="#">
                    <FaFacebook className='text-3xl'/>
                </a>
                <a href="#">
                    <FaLinkedin className='text-3xl'/>
                </a>
            </div>
         </div>
    {/* links Section  */}
    <div className='grid sm:grid-cols-2 md:grid-cols-3 col-span-2 md:pl-10 w-full'>
        <div>
        <div className='py-8 px-4'>
        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>
            Important Links
        </h1>
        <ul className='flex flex-col gap-3'>
            {
                FooterLink.map((data,idx)=>(
                    <li key={idx} className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                        <IoArrowRedoOutline className='inline-block' />
                        <span>{' '}{data.title}</span>
                    </li>
                ))
            }
        </ul>
        </div>
        </div>
        <div>
        <div className='py-8 px-4'>
        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>
            Links
        </h1>
        <ul className='flex flex-col gap-3'>
            {
                FooterLink.map((data,idx)=>(
                    <li key={idx} className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                        <IoArrowRedoOutline className='inline-block' />
                        <span>{' '}{data.title}</span>
                    </li>
                ))
            }
        </ul>
        </div>
        </div>
        <div>
        <div className='py-8 px-4'>
        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>
           Location
        </h1>
        <ul className='flex flex-col gap-3'>
            {
                FooterLink.map((data,idx)=>(
                    <li key={idx} className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                        <IoArrowRedoOutline className='inline-block' />
                        <span>{' '}{data.title}</span>
                    </li>
                ))
            }
        </ul>
        </div>
        </div>
    </div>  
    </div>
    {/* copyright  */}
    <div className='w-full'>
        <div className='border-t-2 border-gray-300/50'>
            <p className='text-center py-10 font-light'>
                Copyright &copy; 2022. All rights reserved || Made with &#10084;&#65039; by Devanshee, Priyanshi and Bhavesh
            </p>
        </div>
    </div>
    </div>
    </div>
  )
}
export default Footer;