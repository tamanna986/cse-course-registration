import PropTypes from 'prop-types';


const Cart = ({cart}) => {
    return (

        <div className="">
        
        {/* <div className="bg-white p-6 text-start space-y-4"> */}
            {/* <h1 className="text-blue-400 font-semibold text-lg">Credit Hour Remaining { }  hr</h1>
            <hr /> */}
            
            <li ><h2 className="text-gray-500 text-start "> {cart.course_name}</h2></li>
            
            {/* <hr /> */}
            {/* <h3 className="text-gray-500 text-lg font-semibold">Total Credit Hour :</h3>
            <hr />
            <h3 className="text-gray-500 text-lg font-semibold">Total Price :</h3> */}
        </div>

    );
};
Cart.propTypes = {
    cart: PropTypes.object
}
export default Cart;