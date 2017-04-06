/**
 * Created by programer on 4/2/17.
 */

import {combineReducers} from 'redux';
import PestsReducer from './reducer_pests';


const rootReducer=combineReducers({
    pests:PestsReducer
});



export default rootReducer;