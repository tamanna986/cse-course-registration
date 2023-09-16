import PropTypes from 'prop-types';
import Cart from '../Cart/Cart'

const Carts = ({carts, totalCreditHour , CreditHourRemaining , totalPrice}) => {
    
    // console.log(carts)
    return (
        <div className="md:w-[800px]   ">
            <div className=" bg-white p-10 space-y-4 rounded-lg">
            <h2 className="text-blue-400  font-semibold text-start">Credit Hour Remaining {CreditHourRemaining} hr</h2>
            <hr />
            
            <h2 className='font-semibold text-xl mb-8 text-start'>Course Name</h2>
            
         {
            carts.map((cart , idx) => (
                // console.log(cart)
             <li  key = {idx} className='list-decimal'> <Cart 
             key = {cart.id}
             cart ={cart} ></Cart></li>
                
            ))
          
         }
         <hr />
         <h2 className='text-start  font-medium'>Total Credit Hour: {totalCreditHour}hr</h2>
         <h2 className='text-start font-semibold'>Total Price: {totalPrice} USD</h2>
         
            </div>
        </div>
    );
};
Carts.propTypes = {
    carts: PropTypes.array,
    totalCreditHour: PropTypes.number,
    CreditHourRemaining: PropTypes.number,
    totalPrice: PropTypes.number
    // cart: PropTypes.object.isRequired
}

export default Carts;