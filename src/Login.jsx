import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className='border rounded-2xl shadow-2xl  p-16 w-[400px]'>



        <form action="">
          <h1 className='font-bold text-[50px]' >Instagram</h1>
          <br />
          <br />
          <input type="text" placeholder='Phone number, username or email' autoComplete='new-value' className='h-[30px] w-[250px] border mb-[10px] ' />
          <br />
          <input type="password" placeholder='Password' autoComplete='new-password' className='h-[30px] w-[250px] border mb-[10px]' />
          <br />
          <button className='bg-[#6770f1] text-white font-semibold rounded h-[30px] w-[250px] border mb-[20px]'>Log in</button>
        </form>
        <p className='text-grey-200 font-sans flex justify-center mb-6'>OR</p>
        <p className='flex items-center gap-2 text-[#1e7ebc] text-[15px] font-bold mb-4'>
          <i className="bx bxl-facebook-circle text-[#1e7ebc] text-xl"></i> Login with Facebook </p>
        <p className='text-black font-semibold mb-7' >Forgot password?</p>
        <p>Don't have an account?<Link to='/signup' className='text-[#6770f1] font-semibold'>Sign up</Link></p>





      </div>
    </div>
  )
}

export default Login

// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {/* Container with image + form */}
//       <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
        
//         {/* Left Side: Image */}
//         <div className="hidden lg:flex w-1/2 bg-gray-200">
//           <img
//             src="https://i.imgur.com/zqpwkLQ.png" // Instagram demo image
//             alt="Instagram Preview"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side: Login Form */}
//         <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
//           <h1 className="text-3xl font-bold text-center">Instagram</h1>
//           <form className="flex flex-col mt-6 space-y-4">
//             <input
//               type="text"
//               placeholder="Phone number, username, or email"
//               className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//             />
//             <button className="bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition">
//               Log In
//             </button>
//           </form>

//           <div className="mt-4 text-center text-sm text-gray-600">
//             Forgot your password?
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
