import { AUTHFAILED, GETCURRENTUSER, LOADING, LOGINSUCCESS, LOGOUT, REGISTERSUCCESS } from "../actionTypes/authTypes"
import axios from 'axios'

/**
 * @param POST /auth/singup
 * @description registre new user
 * @access public
 */

export const register = (newuser , navigate) => async (dispatch)=> {
    dispatch({type:LOADING})
    try {
        const res = await axios.post("http://localhost:7000/auth/singup",newuser)
        dispatch({ type:REGISTERSUCCESS , payload:res.data })
        navigate("/signin")
    } catch (error) {
        if (error.response.data.errors){
            error.response.data.errors.forEach( el => alert(el.msg));


        }
        else if (error.response.data.msg){
            return alert (error.response.data.msg)
        }
        dispatch({ type:AUTHFAILED , payload:error })
    }

}


/**
 * @param POST /auth/singin
 * @description login user
 * @access public
 */
export const login = (user , navigate) => async (dispatch)=> {
    dispatch({type:LOADING})
    try {
        const {data} = await axios.post("http://localhost:7000/auth/singin",user)
        dispatch({ type:LOGINSUCCESS ,payload:data })
        // console.log(data)
        navigate("/")
    } catch (error) {
        // console.log(error)
        if (error.response.data.errors){
            error.response.data.errors.forEach( el => alert(el.msg));


        }
        else if (error.response.data.msg){
            return alert (error.response.data.msg)
        }
        dispatch({ type:AUTHFAILED , payload:error })
    }

}
/**
 * @param GET /auth
 * @description current user
 * @access private
 */

export const getcurrentuser = () => async (dispatch)=> {
    dispatch({type:LOADING})
    const opts={
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        const {data} = await axios.get("http://localhost:7000/auth",opts)
        dispatch({ type:GETCURRENTUSER ,payload:data })
        console.log(data)
    } catch (error) {
        console.log(error)
        // if (error.response.data.errors){
        //     error.response.data.errors.forEach( el => alert(el.msg));


        // }
        if (error.response.data.msg){
            return alert (error.response.data.msg)
        }
        dispatch({ type:AUTHFAILED , payload:error })
    }

}

export const logout=()=>{
    return{type:LOGOUT}
}