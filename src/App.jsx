import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
       <Route path='signup' element={<SignUp/>} />
      </Routes>
      
     
    </div>
  )
}

export default App