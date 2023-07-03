import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from './SideNav'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SimpleCard from './Pages/Auth/Login'
import SignupCard from './Pages/Auth/Register'
import Profile from './Pages/Profile/Profile'

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
        <Routes>
        <Route path='/' element={<><SimpleCard/></>} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<><SignupCard/></>} />
      </Routes>
        <Routes>
          <Route path='/home' element={<SidebarWithHeader/>}/>
        </Routes>
        <Routes>
          <Route path='/add' element={<SidebarWithHeader/>}/>
        </Routes>
        <Routes>
          <Route path='/setting' element={<SidebarWithHeader/>}/>
        </Routes>
        <Routes>
          <Route path='/explore' element={<SidebarWithHeader/>}/>
        </Routes>
        <Routes>
          <Route path='/profile' element={<SidebarWithHeader/>}/>
        </Routes>
        </Router>
        
      </ChakraProvider>
    </div>
  )
}

export default App
