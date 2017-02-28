/**
 * Created by sparsh on 26/2/17.
 */
import * as types from '../actions/actionTypes'
export default function courseReducer(state = [], action) {
    switch (action.type){
        case types.LOAD_COURSES_SUCCESS:
            // state.push(action.course);
            // return state;
            return action.payload;

        default:
            return state;
    }
}