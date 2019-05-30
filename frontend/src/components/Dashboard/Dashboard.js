import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Rail, Segment, Container } from 'semantic-ui-react'

import UserList from '../UserList/UserList';
import Menu from '../Menu/Menu';
import Editor from '../Editor/Editor';
import AddUser from '../AddUser/AddUser';

import { getUsers } from '../../redux/users/actions';


function mapStateToProps(state) {
    return {
        token: state.auth.token,
        current: state.users.current
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (token) => dispatch(getUsers(token)),
    };
};

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editmode: false,
        }
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.current !== prevProps.current) {
            this.setState({
                editmode: this.props.current.id 
            });
        }
    }

    menuChange = (e, data) => {
        this.setState({
            editmode: !data.index
        })
    }

    render() {

        this.props.getUsers(this.props.token);

        return (
            <div>
                <Menu menuChange={this.menuChange}/>

                <Grid stackable>
                    <Grid.Column width={2} only='computer'>
                    </Grid.Column>
                    <Grid.Column width={2} only='computer'>
                        <UserList/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        { this.state.editmode ? <Editor/> : <AddUser />}
                    </Grid.Column>
                    <Grid.Column width={2} only='computer'>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);