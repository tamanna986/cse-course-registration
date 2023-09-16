import PropTypes from 'prop-types';

const Course = ({ course, handleCart }) => {
    const { course_name, img, course_details, credit, price } = course;
    return (

        <div className="card  bg-base-100 shadow-xl space-y-4">
            <figure><img src={img} alt={`cover picture of courses ${course_name}`} /></figure>
            <div className="space-y-4">
                <h2 className="card-title text-start">{course_name}</h2>
                <p className='text-start text-gray-500'>{course_details}</p>
                <div className='flex gap-1 '>
                    <div className='text-gray-600 flex'>
                        <img src="https://i.ibb.co/ZHtQWF3/dollar-sign-1.png" alt="" />
                        <p>Price:{price}</p>
                    </div>
                    <div className='text-gray-600 flex '>
                        <img src="https://i.ibb.co/1fj2Zvs/Frame.png" alt="" />
                        <p>Credit:{credit}hr</p>
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