import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center pt-10'>
            <div className='border w-[350px] p-10  flex flex-col items-center'>
                <div>
                    <h1 className='font-bold text-[50px] text-center mb-7'>Instagram</h1>
                    <p className='text-gray-500 text-center font-semibold mb-3'>Sign up to see photos and videos from your friends</p>
                    <button className=' flex items-center justify-center h-[40px] w-[260px] gap-2 border rounded-lg bg-blue-500 text-white text-[15px] font-bold space-x-2 mb-2'>
                        <i className='bx bxl-facebook-square text-white text-xl '></i>Log in with Facebook</button>
                    <p className='text-grey-200 font-sans flex justify-center mb-2'>OR</p>
                    <form >

                        <input type="text" placeholder='Mobile Number or Email' autoComplete='off' className='h-[30px] w-[260px] border rounded-sm mb-1 bg-gray-50' />
                        <input type="password" placeholder='Password' autoComplete='off' className='h-[30px] w-[260px] border rounded-sm mb-1 bg-gray-50' />
                        <input type="text" placeholder='Full Name' autoComplete='off' className='h-[30px] w-[260px] border  rounded-sm mb-1 bg-gray-50' />
                        <input type="text" placeholder='Username' autoComplete='off' className='h-[30px] w-[260px] border rounded-sm mb-3 bg-gray-50' />
                    </form>

                    <div className='text-center mb-4'> 
                        <p className='text-xs text-gray-500  mb-2'>People who use our service may have uploaded your contact information to Instagram. <span className='text-blue-500'>Learn More</span></p>
                        <p className='text-xs text-gray-500'>By signing up, you agree to our <span className='text-blue-500'>Terms , Privacy Policy</span> and <span className='text-blue-500'>Cookies Policy </span>.</p>
                    </div>
                </div>
                <Link to='/main'><button className=' flex items-center justify-center h-[40px] w-[260px] gap-2 border rounded-lg bg-[#6770f1] text-white text-[15px] font-bold space-x-2 mb-2'>Sign up </button></Link>
            </div>
            <div className='border h-[100px] w-[350px] text-center p-4 mt-3'>
                <p>Have an account?</p>
                <Link to='/' className='text-blue-600'>Log in</Link>
            </div>


        </div>


    )
}

export default SignUp