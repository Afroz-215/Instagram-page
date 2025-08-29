import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Login1 from './Login1'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Login/>} />
        <Route path='/Login1' element={<Login1/>}/>
       <Route path='signup' element={<SignUp/>} />
      </Routes>
      
     
    </div>
  )
}

export default App