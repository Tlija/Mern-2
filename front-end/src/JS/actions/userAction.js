/**
 * @params GET /user/:iduser 
 * @description get user details
 * @access protected(authorized+admin)
 */

import axios from "axios"
import { USERDETAILSFAILED, USERDETAILSSUCCESS, USERLOADING } from "../actionTypes/userTypes"


export const getOneUser=(iduser)=> async (dispatch)=>{
    dispatch({type:USERLOADING})
    const opts={
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        const res= await axios.get(`http://localhost:7000/user/${iduser}`,opts)
        dispatch({type:USERDETAILSSUCCESS,payload:res.data.user})
    } catch (error) {
        dispatch({type:USERDETAILSFAILED,payload:error})
    }
}