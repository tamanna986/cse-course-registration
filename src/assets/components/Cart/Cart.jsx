import PropTypes from 'prop-types';


const Cart = ({ cart, idx }) => {
    return (

        <div className="">

            <h2 className="text-gray-500 text-start ">{idx}. {cart.course_name}</h2>

        </div>

    );
};
Cart.propTypes = {
    cart: PropTypes.object,
    idx: PropTypes.number
}
export default Cart;