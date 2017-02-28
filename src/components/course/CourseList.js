/**
 * Created by sparsh on 27/2/17.
 */
/**
 * Created by sparsh on 24/2/17.
 */
import React from 'react';
import CourseListRow from './CourseListRow'

const CourseList = ({courses}) => {


        return(
            <table className="table">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
                </thead>
                <tbody>
                {courses.map(course =>
                    <CourseListRow key={course.id} course={course} />
                )}
                </tbody>
            </table>
        );
}

export default CourseList;