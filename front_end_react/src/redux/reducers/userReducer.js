  // reducers/userReducer.js
  import { FETCH_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from '../actions/userActions';

  const initialState = {
    users: [],
    loading: false,
    error: null,
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return { ...state, loading: true };
      case ADD_USER:
        return { ...state, users: [...state.users, action.payload] };
      // 其他case...
      default:
        return state;
    }
  };

  export default userReducer;
  