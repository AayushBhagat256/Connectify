import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from './SideNav'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SimpleCard from './Pages/Auth/Login'

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
        <Routes>
        <Route path='/' element={<><SimpleCard/></>} />
      </Routes>
        <Routes>
          <Route path='/home' element={<SidebarWithHeader/>}/>
        </Routes>
        </Router>
        
      </ChakraProvider>
    </div>
  )
}

export default App
