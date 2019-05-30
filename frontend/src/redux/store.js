import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Import reducers
import auth from './auth/reducer';
import users from './users/reducer';


// Combine reducers with history 
const root =  combineReducers({ 
                                auth,
                                users
                              });



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(root, // root reducer with router state
                            composeEnhancers(
                              applyMiddleware(thunk)
                            ),
                         );

export default store;

