import Config from '../../config';
import axios from 'axios';

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP, AUTH_USERS } from './actionTypes';

import store from '../store';


export const login = ( email, password ) => {

    return (dispatch) => {
        return axios({  method: 'post',
                        baseURL: Config.endPoint,
                        url: '/auth',
                        withCredentials: true,
                        auth: {
                          username: email,
                          password: password
                        },
                        data: {
                            "access_token": Config.apiKey,
                        },
                    }).then(res => {
                        const action = {
                            type: AUTH_LOGIN,
                            token: res.data.token,
                            user: res.data.user
                        }

                        store.dispatch(action);
                    });
    };
}


export const signup = ( email, password ) => {

    return (dispatch) => {
        return axios({  method: 'post',
                        baseURL: Config.endPoint,
                        url: '/users',
                        data: {
                            "access_token": Config.apiKey,
                            "email": email,
                            "password": password,
                            "role": 'admin'
                        },
                    }).then(res => {
                        const action = {
                            type: AUTH_LOGIN,
                            token: res.data.token,
                            user: res.data.user,
                           
                        }

                        store.dispatch(action);
                    });
    };
}

export const getUsers = ( token ) => {

    console.log(token);

    return (dispatch) => {
        return axios({  method: 'get',
                        baseURL: Config.endPoint,
                        url: '/users',
                        headers: {'Authorization': "bearer " + token}
                    }).catch(function (error) {
                        // handle error
                        console.log(error);
                    }).then(res => {
                        
                        console.log("users", res);
                        const action = {
                            type: AUTH_USERS,
                            users: res.data.rows,
                        }

                        store.dispatch(action);
                    }).finally(function () {
                        // debugger;
                    });
    };
}





export const logout = () => {

}