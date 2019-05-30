import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message,  Grid } from 'semantic-ui-react'

import LoginModal from '../Login/LoginModal';
import Dashboard from '../Dashboard/Dashboard';

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn,
    };
}

class AppContainer extends Component {

    render() {
        return (
            <div>
                {!this.props.loggedIn ? (
                    <LoginModal />
                ) : (
                    <Dashboard />
                )}  
            </div>
        );
    }
}

export default connect( mapStateToProps )(AppContainer);