import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from './SideNav'

function App() {
  return (
    <div>
      <ChakraProvider>
        <SidebarWithHeader/>
      </ChakraProvider>
    </div>
  )
}

export default App
