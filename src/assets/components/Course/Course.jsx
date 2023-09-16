import PropTypes from 'prop-types';
import dollar from '../../images/dollar-sign 1.png'
import icon from '../../images/Frame.png'

const Course = ({ course, handleCart}) => {
    const { course_name, img, course_details, credit, price } = course;
    return (
        
        <div className="card  bg-base-100 shadow-xl space-y-4">
        <figure><img  src={img} alt={`cover picture of courses ${course_name}`} /></figure>
        <div className="space-y-4">
            <h2 className="card-title text-start">{course_name}</h2>
            <p className='text-start text-gray-500'>{course_details}</p>
            <div className='flex gap-3'>
                <div className='text-gray-600 flex gap-1'>
                    <img src={dollar} alt="" />
                    <p>Price : {price}</p>
                </div>
                <div className='text-gray-600 flex gap-1'>
                    <img src={icon} alt="" />
                    <p>Credit : {credit}hr</p>
                </div>
            </div>
                <button onClick={() => handleCart(course)} className="btn btn-info w-full text-white text-lg">Select</button>
        </div>
    </div>
       

    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCart: PropTypes.func
    
}
export default Course;