import React from 'react'
import { Link } from 'react-router-dom'

const Login1 = () => {
    return (
        <div className="flex justify-center items-start min-h-screen pt-10">
            <div className="flex flex-col items-center">
                <div className='border  w-[350px]  p-10 mb-2 text-center'>
                    <form className="flex flex-col items-center">
                        <h1 className="font-bold text-[50px] mb-10">Instagram</h1>

                        <input type="text" placeholder="Phone number, username or email" autoComplete="value"
                            className="bg-gray-50 h-[30px] w-[250px] border rounded-sm mb-2 px-2" />
                        <input type="password" placeholder="Password" autoComplete="new-password"
                            className="bg-gray-50 h-[30px] w-[250px] border rounded-sm px-2" />
                        <Link to='/main'><button className="bg-[#6770f1] text-white font-semibold rounded h-[30px] w-[250px] border mt-5 mb-[20px]">Log in</button></Link>
                    </form>

                    <p className="text-gray-500 font-semibold text-center mt-2 mb-3">OR</p>
                    <p className='flex items-center justify-center gap-2 text-[#1e7ebc] text-[15px] font-bold mb-4'>
                        <i className="bx bxl-facebook-circle text-[#1e7ebc] text-xl"></i> Login with Facebook </p>
                    <p className='text-black font-semibold mb-7' >Forgot password?</p>
                </div>

                <div className=' border h-[70px] w-[350px] p-10 flex justify-center items-center'>
                    <p>Don't have an account? <Link to='/signup' className='text-blue-600 font-semibold'>Sign up</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Login1
