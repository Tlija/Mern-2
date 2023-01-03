import { AUTHFAILED, LOADING, REGISTERSUCCESS } from "../actionTypes/authTypes";

const initstate = {
    loading:true,
    error:null
}

const authReducer = (state=initstate , {type,payload}) => { 
    switch (type) {
    case LOADING:
       return {...state,loading:true}

    case  AUTHFAILED:
        return {...state,loading:false,error:payload}

    case REGISTERSUCCESS:
        return {...state,loading:false}    


    default:
        return state
} }



export default authReducer