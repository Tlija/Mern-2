import { AUTHFAILED, LOADING, REGISTERSUCCESS } from "../actionTypes/authTypes"
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
        dispatch({ type:REGISTERSUCCESS , paylaod:res.data })
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