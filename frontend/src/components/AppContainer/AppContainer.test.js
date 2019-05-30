import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import AppContainer from './AppContainer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


/*
 *  Setup
 */

const initialState = {
    auth: {
        user: {
        id: '5cef56d2edf6e8855b7363aa',
        name: 'jens',
        picture: 'https://gravatar.com/avatar/125d680127c0e11f09852a2b0778f6c7?d=identicon',
        firstname: 'Jens',
        lastname: 'H. Nielsen',
        notes: 'Something',
        gender: 'male',
        email: 'jens@silentmode.com',
        createdAt: '2019-05-30T04:06:42.557Z'
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZWY1NmQyZWRmNmU4ODU1YjczNjNhYSIsImlhdCI6MTU1OTIwNzg1N30.H3LY3QFrrROrZT_1R9yMUGfJIBoPaR1n6UuXjpAHLYw',
        loggedIn: true,
        users: []
    },
    users: {
        current: {
        id: '5cef56d2edf6e8855b7363aa',
        name: 'jens',
        picture: 'https://gravatar.com/avatar/125d680127c0e11f09852a2b0778f6c7?d=identicon',
        firstname: 'Jens',
        lastname: 'H. Nielsen',
        notes: 'Something',
        gender: 'male'
        },
        users: [
            {
                id: '5cef56d2edf6e8855b7363aa',
                name: 'jens',
                picture: 'https://gravatar.com/avatar/125d680127c0e11f09852a2b0778f6c7?d=identicon',
                firstname: 'Jens',
                lastname: 'H. Nielsen',
                notes: 'Something',
                gender: 'male'
            }
        ]
    }
};

const mockStore = configureStore()
let store,wrapper

beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow( <Provider store={store}><AppContainer /></Provider> );
})

it('Renders wrapper without crashing', () => {
    expect(wrapper.length).toEqual(1)
});

it('Can change value', () => {
    var newProps = initialState.users.current;
    newProps.name = 'Peter'
    wrapper.setProps({ loggedIn: false })
    expect(wrapper.length).toEqual(1)
});

