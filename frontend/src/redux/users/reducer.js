import { USERS_GET, USERS_CURRENT, USERS_SAVE } from './actionTypes';

const initialState = {
    current: {},
    users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case USERS_GET: {
      return {...state,
              users: action.users
             };
    }

    case USERS_CURRENT: {
        return {...state,
                current: action.user
               };
    }

    case USERS_SAVE: {
        return {...state,
                current: action.user
               };
    }

    default:
      return state
  }
}

export default userReducer;


