import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
    static propTypes = {
        authenticate: PropTypes.func.isRequired
    }

    render() {
        return (
            <nav className="login">
                <p>Sign in to store user's inventory</p>
                <button className="github" onClick={() => this.props.authenticate('Github')}> Github</button>
            </nav>
        );
    }
}

export default Login;