import { combineReducers } from "redux";
import { genderReducer, nameReducer, skillReducer, studentReducer } from "./studentReducer.js";



const reducers = combineReducers({
    allStudents : studentReducer,
    name : nameReducer,
    gender : genderReducer,
    skill : skillReducer
});


export default reducers;

