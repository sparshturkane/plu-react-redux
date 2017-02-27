/**
 * Created by sparsh on 26/2/17.
 */
import {combineReducers} from  'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;