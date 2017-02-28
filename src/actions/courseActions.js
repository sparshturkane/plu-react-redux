/**
 * Created by sparsh on 26/2/17.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi'
export function loadCoursesSuccess (course) {
    return {
        type : types.LOAD_COURSES_SUCCESS,
        payload : course
    }
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch( error => {
            throw (error);
        });
    };
}