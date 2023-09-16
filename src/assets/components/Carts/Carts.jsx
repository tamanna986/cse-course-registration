import PropTypes from 'prop-types';
import Cart from '../Cart/Cart'

const Carts = ({carts}) => {
    
    // console.log(carts)
    return (
        <div className="md:w-[800px] bg-white p-10 ">
            <h2 className='font-semibold text-xl mb-8 text-start'>Course Name</h2>
            
         {
            carts.map((cart) => (
                // console.log(cart)
                <Cart 
                key = {cart.id}
                cart ={cart} ></Cart>
                
            ))
          
         }
         
        </div>
    );
};
Carts.propTypes = {
    carts: PropTypes.array,
    // cart: PropTypes.object.isRequired
}

export default Carts;