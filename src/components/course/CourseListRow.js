/**
 * Created by sparsh on 27/2/17.
 */
/**
 * Created by sparsh on 24/2/17.
 */
import React from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {


    return(
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/'+course.id}>{course.title}</Link></td>
            <td> {course.authorId} </td>
            <td> {course.category} </td>
            <td> {course.length} </td>

        </tr>
    );
}

export default CourseListRow;