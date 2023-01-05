import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { productReducer } from './productReducer'
import { userReducer } from './userReducer'


export const rootReducer = combineReducers({auth:authReducer , user:userReducer , product:productReducer })