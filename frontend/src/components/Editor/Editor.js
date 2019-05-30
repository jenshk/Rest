import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'


import { saveCurrentUser } from '../../redux/users/actions';


function mapStateToProps(state) {
    return {
        current: state.users.current,
        token: state.auth.token
    };
}

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Editor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            gender: "",
            id: "",
            lastname: "",
            name: "",
            notes: "",
            picture: ""
        }

        if (this.props.current.id) {
            this.state = this.props.current
        }
    }



    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.current !== prevProps.current) {
            this.setState(this.props.current);
        }
    }

    onChangeDropdown = (e, data) => {

        this.setState({
           "gender":  data.value
        });
    }

    onChange = (e) => {

        const key  = e.target.name;
        const value = e.target.value;

        let state = {}
        state[key] = value;

        this.setState(state);
    }


    onClick = () => {
        saveCurrentUser(this.state, this.props.token);
    }

    render() {

        const firstname = ( this.state.firstname ? this.state.firstname : this.state.name );

        return (
            <Form>
                <h1>Edit User</h1>

                <Form.Group widths='equal'>
                <Form.Input name="firstname"
                            fluid 
                            label='First name' 
                            placeholder='First name' 
                            value={firstname}
                            onChange={this.onChange}/>
                            

                <Form.Input name="lastname"
                            fluid 
                            label='Last name' 
                            placeholder='Last name' 
                            value={this.state.lastname}
                            onChange={this.onChange}/>

                <Form.Select name="gender"
                             fluid 
                             label='Gender' 
                             options={options} 
                             placeholder='Gender' 
                             value={this.state.gender}
                             onChange={this.onChangeDropdown}/>
                </Form.Group>
                <Form.TextArea  name="notes"
                                label='About' 
                                placeholder='Notes...' 
                                value={this.state.notes}
                                onChange={this.onChange}/>

                <Form.Button onClick={this.onClick}>Submit</Form.Button>
            </Form>
        );
    }
}

export default connect(
    mapStateToProps,
)(Editor);