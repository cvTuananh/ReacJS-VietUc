import React, { Component } from 'react';
import PropTypes from 'prop-types';
class User extends Component {
    render() {
    return ( 
        <>
            <div class='user'>
                <div class='row'>
                    <label>firstName</label>
                    <span class='value'>{this.props.firstName}</span>
                </div>
                <div class='row'>
                    <label>lastName</label>
                    <span class='value'>{this.props.lastName}</span>
                </div>
            </div>
        </>
     );
}
}
export default User;

User.prototypes={
    firstName:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired
}

User.defaultProps={
    firstName:"Enter your first name",
    lastName:"Enter your last name"
}