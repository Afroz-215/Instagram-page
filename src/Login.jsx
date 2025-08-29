import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className='border flex overflow-hidden'>

        <div className="hidden lg:flex w-1/2 bg-gray-200 p-5">
          <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" className="w-[400px]  object-cover" />

        </div>


        <div className="p-10 w-[350px] flex flex-col items-center ">
          <form className="flex flex-col items-center w-full ">
            <h1 className='font-bold text-[50px] mb-16' >Instagram</h1>

            <input type="text" placeholder='Phone number, username or email' autoComplete='new-value' className='bg-gray-50 h-[30px] w-[250px] border rounded-sm mb-2 ' />

            <input type="password" placeholder='Password' autoComplete='new-password' className='bg-gray-50 h-[30px] w-[250px] border rounded-sm' />

            <Link to='/main' ><button className='bg-[#6770f1] text-white font-semibold rounded h-[30px] w-[250px] border mt-5 mb-[20px]'>Log in</button></Link>
          </form>
          <p className='text-gray-500 font-sans flex justify-center mb-6'>OR</p>
          <p className='flex items-center gap-2 text-[#1e7ebc] text-[15px] font-bold mb-4'>
            <i className="bx bxl-facebook-circle text-[#1e7ebc] text-xl"></i> Login with Facebook </p>
          <p className='text-black font-semibold mb-7' >Forgot password?</p>
          <p>Don't have an account?<Link to='/signup' className='text-[#6770f1] font-semibold'>Sign up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login

