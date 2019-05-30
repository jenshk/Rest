import { AUTH_LOGIN, AUTH_LOGOUT   } from './actionTypes';

const initialState = {
    user: {},
    token: "",
    loggedIn: false,
    users: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case AUTH_LOGIN: {
        return {...state, 
            token: action.token,
            user: action.user,
            loggedIn: true
        }
    }


    case AUTH_LOGOUT: {
      return {...state, 
          token: '',
          user: {},
          loggedIn: false
      }
    }

    default:
      return state
  }
}

export default authReducer;