import PropTypes from 'prop-types';


const Cart = ({cart}) => {
    return (

        <div className="">

           <h2 className="text-gray-500 text-start "> {cart.course_name}</h2>
 
        </div>

    );
};
Cart.propTypes = {
    cart: PropTypes.object
}
export default Cart;