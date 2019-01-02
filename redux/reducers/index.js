import { combineReducers } from 'redux';
import math from './math';
import todo from './todo';
 
const rootReducer = combineReducers({
    math,
    todo
});
 
export default rootReducer;