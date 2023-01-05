import { GETALLPRODUCTSSUCCESS, GETONEPRODUCTSUCCESS, PRODUCTFAILED, PRODUCTLOADING } from "../actionTypes/productTypes";

const initialState = {
  loading: true,
  error: null,
  products: [],
  product: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTLOADING:
      return { ...state, loading: true };


    case GETALLPRODUCTSSUCCESS:
      return { ...state, loading: false, products:payload };


    case GETONEPRODUCTSUCCESS:
      return { ...state, loading: false, product:payload };


    case PRODUCTFAILED:
      return { ...state, loading: false, error:payload };

    default:
      return state;
  }
};
