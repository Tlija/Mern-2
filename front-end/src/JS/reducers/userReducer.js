import {
  USERDETAILSFAILED,
  USERDETAILSSUCCESS,
  USERLOADING,
} from "../actionTypes/userTypes";

const initialState = {
  loading: true,
  error: null,
  user: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERLOADING:
      return { ...state, loading: true };

    case USERDETAILSSUCCESS:
      return { ...state, loading: false, user: payload };

    case USERDETAILSFAILED:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
