/**
 * Created by sparsh on 26/2/17.
 */
import * as types from './actionTypes';
export function createCourse (course) {
    return {
        type : types.CREATE_COURSE,
        payload : course
    }
}