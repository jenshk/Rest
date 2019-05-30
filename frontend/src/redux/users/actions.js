
import Config from '../../config';
import axios from 'axios';

import { USERS_GET, USERS_CURRENT, USERS_SAVE } from './actionTypes';

import store from '../store';


export const getUsers = ( token ) => {
    return (dispatch) => {
        return axios({  method: 'get',
                        baseURL: Config.endPoint,
                        url: '/users',
                        headers: {'Authorization': "bearer " + token}
                    }).catch(function (error) {
                        console.log(error);
                    }).then(res => {                        
                        const action = {
                            type: USERS_GET,
                            users: res.data.rows,
                        }

                        store.dispatch(action);
                    }).finally(function () {
                    });
    };
}



export const setCurrentUser = ( user ) => {

    const action = {
        type: USERS_CURRENT,
        user
    }

    store.dispatch(action);
}


export const saveCurrentUser = ( user, token ) => {

    return axios({  method: 'put',
                    baseURL: Config.endPoint,
                    url: '/users/' + user.id,
                    headers: {'Authorization': "bearer " + token},
                    data: user,
                }).catch(function (error) {
                    console.log(error);
                }).then(res => {                        
                    const action = {
                        type: USERS_SAVE,
                        user
                    }
                
                    store.dispatch(action);
                }).finally(function () {
                });
}