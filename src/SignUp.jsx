import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <div className='border  pr-16 pl-16 w-[400px] '>
                <form action="">
                    <h1 className='font-bold text-[50px] mb-3'>Instagram</h1>
                    <p className='text-gray-500 font-semibold mb-3'>Sign up to see photos and videos from your friends</p>
                    <button className=' flex items-center justify-center h-[40px] w-[250px] gap-2 border rounded-lg bg-blue-500 text-white text-[15px] font-bold space-x-2 mb-2'>
                        <i className='bx bxl-facebook-square text-white text-xl '></i>Log in with Facebook</button>
                    <p className='text-grey-200 font-sans flex justify-center mb-2'>OR</p>
                    <input type="text" placeholder='Mobile Number or Email' autoComplete='off' className='h-[30px] w-[250px] border rounded-sm mb-1 bg-gray-50' />
                    <input type="password" placeholder='Password' autoComplete='off' className='h-[30px] w-[250px] border rounded-sm mb-1 bg-gray-50'  />
                    <input type="text" placeholder='Full Name' autoComplete='off' className='h-[30px] w-[250px] border  rounded-sm mb-1 bg-gray-50'  />
                    <input type="text" placeholder='Username' autoComplete='off' className='h-[30px] w-[250px] border rounded-sm mb-3 bg-gray-50' />
                </form>
                <p className='text-sm text-gray-400'>People who use our service may have uploaded your contact information to Instagram.span <span className='text-blue-500'>Learn More</span></p>
                <p className='text-sm text-gray-400'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                <button>Sign up</button>
            </div>
            <div className='border h-[100px] w-[400px] p-4 mt-3'>
                <p>Have an account?</p>
                <Link to='/'>Log in</Link>
            </div>
            

        </div>


    )
}

export default SignUp