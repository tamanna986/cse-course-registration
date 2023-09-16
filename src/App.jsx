import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/Header'
import Courses from './assets/components/Courses/Courses'
import Carts from './assets/components/Carts/Carts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts , setCarts] = useState([])
  
  

  const handleCart = (course) =>{
    const doesExist = carts.find((item) => item.id == course.id );
    if(doesExist){
      toast("Same Course cannot be added multiple times!");
    }
    else{
      const newCart = [...carts , course]
      setCarts(newCart)
    }
 
    
    // console.log(newCart )
  }

  return (
    <>
      
      <Header></Header>
      <div className='flex gap-5 mt-10'>
      <Courses handleCart = {handleCart} ></Courses>
      <Carts carts = {carts} ></Carts>
      
      </div>

      <ToastContainer />
    </>
  )
}

export default App
