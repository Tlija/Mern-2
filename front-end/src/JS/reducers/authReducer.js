import { AUTHFAILED, GETCURRENTUSER, LOADING, LOGINSUCCESS, LOGOUT, REGISTERSUCCESS } from "../actionTypes/authTypes";

const initstate = {
    loading:true,
    error:null,
    current_user:{},
    isauth:false,
}

const authReducer = (state=initstate , {type,payload}) => { 
    switch (type) {
    case LOADING:
       return {...state,loading:true}

    case  AUTHFAILED:
        return {...state,loading:false,error:payload}

    case REGISTERSUCCESS:
        return {...state,loading:false}    
    case LOGINSUCCESS:
        // console.log(payload)
        localStorage.setItem('token',payload.token)
        return{...state,current_user:payload.user,loading:false,isauth:true}    
    case GETCURRENTUSER:
    return{...state,current_user:payload.user,loading:false,isauth:true}   
    case LOGOUT :
        localStorage.removeItem('token')
        return{...state,current_user:{},error:null,loading:true,isauth:false} 
    default:
        return state
} }



export default authReducer