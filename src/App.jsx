import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/Header'
import Courses from './assets/components/Courses/Courses'
import Cart from './assets/components/Cart/Cart'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <div className='flex mt-10'>
      <Courses></Courses>
      <Cart></Cart>
      
      </div>

      
    </>
  )
}

export default App
