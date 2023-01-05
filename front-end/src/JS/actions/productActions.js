import axios from 'axios'


//getProduct
/**
 * @method GET /product/
 * @description get all products
 * @acces public
 */

import { GETALLPRODUCTSSUCCESS, GETONEPRODUCTSUCCESS, PRODUCTFAILED, PRODUCTLOADING } from "../actionTypes/productTypes"

export const getProducts=()=> async (dispatch)=>{
    dispatch({type:PRODUCTLOADING})
    try {
        const res= await axios.get('http://localhost:7000/product')
        dispatch({type:GETALLPRODUCTSSUCCESS,payload:res.data.products})
    } catch (error) {
        dispatch({type:PRODUCTFAILED,payload:error})
    }
}


//getOneProduct
/**
 * @method GET /product/:id
 * @description get one product
 * @acces public
 */

export const getOneProduct=(idprod)=> async (dispatch)=>{
    dispatch({type:PRODUCTLOADING})
    try {
        const res= await axios.get(`http://localhost:7000/product/${idprod}`)
        dispatch({type:GETONEPRODUCTSUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:PRODUCTFAILED,payload:error})
    }
}
