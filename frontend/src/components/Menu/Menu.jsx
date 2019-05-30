import React, { Component } from 'react';
import { connect } from 'react-redux';

// UI
import { Menu } from 'semantic-ui-react'

const items = [
    { key: 'home', name: 'Home' },
    { key: 'Add', name: 'Add User' },
  ]

class MenuBar extends Component {
    render() {
        return (
            <Menu items={items}  onItemClick={this.props.menuChange} fluid widths={2}/>
        );
    }
}


function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}


export default MenuBar;