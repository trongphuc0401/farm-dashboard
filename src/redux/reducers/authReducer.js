import { LOGOUT } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    // Xử lý các action khác...
    default:
      return state;
  }
};

export default authReducer;
