import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isauth=useSelector(state=>state.auth.isauth)

   if (!isauth) {
    return <Navigate to='/signin'/>
   } else {
    return children
    
   }
}

export default PrivateRoute