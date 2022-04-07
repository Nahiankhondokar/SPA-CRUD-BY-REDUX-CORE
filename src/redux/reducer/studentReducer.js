import { studentActionType } from "../actionTypes/studentActionType"




const initialState = {
    student_input : [
        {
            name : 'Nahian khan',
            gender  : 'Male',
            skill: 'MEARN'
        }
    ],
    name : '',
    gender : '',
    skill : ''
}



export const studentReducer = (state = initialState, { type, payload }) => {

    switch(type){

        case studentActionType.INPUT_FEILDS:
        return {
            ...state,
            student_input : payload
        } 
        
        default :
        return state;

    }

}



export const nameReducer = (state = initialState, { type, payload }) => {

    switch(type){

        case studentActionType.NAME:
        return { 
            ...state,
            name : payload
        } 
        
        default :
        return state;

    }

}

export const skillReducer = (state = initialState, { type, payload }) => {

    switch(type){

        case studentActionType.SKILL:
        return { 
            ...state,
            skill : payload
        } 
        
        default :
        return state;

    }

}

export const genderReducer = (state = initialState, { type, payload }) => {

    switch(type){

        case studentActionType.GENDER:
        return { 
            ...state,
            gender : payload
        } 
        
        default :
        return state;

    }

}
