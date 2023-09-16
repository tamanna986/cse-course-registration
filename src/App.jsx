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
  const [carts, setCarts] = useState([])
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [CreditHourRemaining, setCreditHourRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);



  const handleCart = (course) => {
    const doesExist = carts.find((item) => item.id == course.id);

    let count = course.credit;
    let price = course.price;
    if (doesExist) {
      toast("Same Course cannot be added multiple times!");
    }
    else {
      carts.forEach((item) => {
        count = count + item.credit;
        price = price + item.price;
      });

      setTotalCreditHour(count)
      const CreditHourRemaining = 20 - count;
      setCreditHourRemaining(CreditHourRemaining)
      setTotalPrice(price)
      const newCart = [...carts, course]
      setCarts(newCart)
    }



  }

  return (
    <>

      <Header></Header>
      <div className='flex gap-5 mt-10'>
        <Courses handleCart={handleCart} ></Courses>
        <Carts
          carts={carts}
          totalCreditHour={totalCreditHour}
          CreditHourRemaining={CreditHourRemaining}
          totalPrice={totalPrice}  ></Carts>

      </div>

      <ToastContainer />
    </>
  )
}

export default App
