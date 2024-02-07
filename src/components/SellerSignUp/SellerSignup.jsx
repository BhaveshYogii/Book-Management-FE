import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sellerf } from '../Service/SellerRequest';
const SellerSignup = () => {
    const isAuthenticate=useLocation().state.isAuthenticate;

    const [seller, setSeller] = useState({
        Company : '',
        CompanyLocation:'',
    });
    const handleChange = (e)=>{
        const{name,value}=e.target;
        setlogin((prevData)=>({
            ...seller,[name]:value
        }));
    }
    const handleSubmit = (e)=>{
            e.preventDefault();
            try {
                sellerf(seller).then((res)=>{
                    toast.success('Request Sent Successfully');
                    setSeller({
                      Company: '',
                      CompanyLocation: '',
                      });
                  })
                  .catch((error)=>{
                    if (error.response) {
                      let message=error.response.data.message;
                      console.log(message);
                      toast.error(message);
                    } else if (error.request) {
                      console.error('No response received from the server:', error.request);
                      toast.error("No response received from the server");
                    } else {
                      console.error('Error during request setup:', error.message);
                      toast.error("An error occurred during the request");
                    }
                  })
            } catch (error) {
            console.error("Error during login:", error);
            toast.error("Something went wrong. Please try again.");
            }
        }
  return (
    <>
        <Navbar isAuthenticate={isAuthenticate}/>
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-white dark:bg-gray-900 dark:text-white duration-200" style={{ paddingTop: '0px' }}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto w-[350px]">
                    <div>
                        <h1 className="text-2xl font-semibold dark:text-black flex justify-center items-center">Seller Request</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input autoComplete="off" id="Company"  value={seller.Company} onChange={handleChange} name="Company" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Company" />
                                <label htmlFor="Company" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Company</label>
                            </div>
                            <div className="relative">
                                <input autoComplete="off" id="CompanyLocation" value={seller.CompanyLocation} onChange={handleChange} name="CompanyLocation" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="CompanyLocation"
                                />
                                <label htmlFor="CompanyLocation" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Company Location</label>
                            </div>
                            <div className="relative">
                                <button onClick={handleSubmit} className="bg-blue-500 text-white rounded-md px-2 py-1 mt-5" >Request</button>
                            </div>
                        </div>
                    </div>
                    {/* <div  className='mt-5 dark:text-black flex justify-center'>
                        <p>
                            New Customer ?{' '}
                            <NavLink to="/signup" style={{color:'blue',textDecoration:'underline'}}>Register</NavLink>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}
export default SellerSignup;