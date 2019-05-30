import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, List, Input } from 'semantic-ui-react'

import { setCurrentUser } from '../../redux/users/actions';


function mapStateToProps(state) {
    return {
        users: state.users.users,

    };
}

class UserList extends Component {

    constructor(props){
        super(props);

        this.state = {
            search: ''
        };
    }

    onClick = (id) => {

        const selectedUser = this.props.users.filter((user) => {
            return user.id == id;
        })

        setCurrentUser(selectedUser[0]);

    }

    populateUserList = () => {


        return this.props.users.map((user, index) => {

            if (this.state.search != '' && user.name.indexOf(this.state.search) == -1) {
                return;
            }

            return (
                <List.Item onClick={() => this.onClick(user.id)} key={index}>
                    <Image avatar src={user.picture} />
                    <List.Content>
                        <List.Header>{user.name}</List.Header>
                    </List.Content>
                </List.Item>
            );
        });
    }

    onChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }


    render() {

        const userList = this.populateUserList()

        return (
            <div>
                <Input  name="search"
                        icon='users' 
                        iconPosition='left' 
                        placeholder='Search users...' 
                        value={this.state.search}
                        onChange={this.onChange}
                        fluid
                        />
                <List animated verticalAlign='middle'>
                    { userList }
                </List>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(UserList);