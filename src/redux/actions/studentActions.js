import { studentActionType } from "../actionTypes/studentActionType";


export const studentActions = (inputs) => {

    return {
        type    : studentActionType.INPUT_FEILDS,
        payload : inputs
    }

}

export const setName = (name) => {

    return {
        type    : studentActionType.NAME,
        payload : name
    }

}


export const setGender = (gender) => {

    return {
        type    : studentActionType.GENDER,
        payload : gender
    }

}


export const setSkill = (skill) => {

    return {
        type    : studentActionType.SKILL,
        payload : skill
    }

}

