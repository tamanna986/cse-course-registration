import { useEffect, useState } from "react";
import Course from "../course/course";
import PropTypes from 'prop-types';

const Courses = ({handleCart}) => {
    const [courses,setCourses] = useState([])

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])

    return (
        <div className=" grid grid-cols-3 gap-3  ">
            
            {
              courses.map(course => <Course
              key = {course.id}
              handleCart = {handleCart}
              course = {course}>

                 </Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleCart: PropTypes.func
    
}

export default Courses;