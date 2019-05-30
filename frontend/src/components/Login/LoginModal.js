import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Input, Icon} from 'semantic-ui-react'


import { login, signup, getUsers } from '../../redux/auth/actions';

import './LoginModal.scss';

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn,
        token: state.auth.token
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        signup: (email, password) => dispatch(signup(email, password))
    };
};

class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true,
            email: "",
            password: ""
        };
    }


    // show = dimmer => () => this.setState({ dimmer, open: true })
    // close = () => this.setState({ open: false })

    login = () => {
        this.props.login(this.state.email, this.state.password);
    }


    signup = () => {
        this.props.signup(this.state.email, this.state.password);
    }


    onChange = (e) => {

        const key  = e.target.name;
        const value = e.target.value;

        let state = {}
        state[key] = value;

        this.setState(state);
    }

    render() {


        return (
            <Modal dimmer="blurring" open={this.state.open} onClose={this.close} id="LoginModal"  size="mini">
            <Modal.Header>Login</Modal.Header>
            <Modal.Content>                
                <Modal.Description>
                    
                    <Input  name="email"
                            size='large' 
                            icon='mail' 
                            placeholder='E-mail' 
                            iconPosition='left' 
                            fluid
                            value={this.state.email}
                            onChange={this.onChange}/>

                    <Input  name="password"
                            type="password" 
                            size='large' 
                            icon='lock' 
                            placeholder='Password' 
                            iconPosition='left' 
                            fluid
                            value={this.state.password}
                            onChange={this.onChange}/>

                </Modal.Description>
                { this.props.error ? (<div className="error"> <Icon name='exclamation triangle' />Wrong email / password combination</div>) : "" }
            </Modal.Content>
            <Modal.Actions>
            <Button.Group  size='large' className="buttonsGroup">
                <Button onClick={this.signup}>Signup</Button>
                <Button.Or />
                <Button onClick={this.login} positive>Login</Button>
            </Button.Group>
                
            </Modal.Actions>
            </Modal>
        );
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(LoginModal);