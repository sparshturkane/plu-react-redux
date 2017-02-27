/**
 * Created by sparsh on 26/2/17.
 */
import * as types from '../actions/actionTypes'
export default function courseReducer(state = [], action) {
    switch (action.type){
        case types.CREATE_COURSE:
            // state.push(action.course);
            // return state;
            return [...state,
                Object.assign({}, action.payload)
            ];

        default:
            return state;
    }
}