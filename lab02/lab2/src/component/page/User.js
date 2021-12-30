import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
            return (
            <>
                name:{this.props.name}
                email:{this.props.email}
            </>);
    }
}
    User.propTypes={
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }
    User.defaultProps={
        name:"abc",
        email:"abc@"
    }

    export default User