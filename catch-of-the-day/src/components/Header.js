import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return(
            <header className="top">
                <h1>Catch 
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">The</span>
                    </span> 
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.quote}</span>
                </h3>                
            </header>
        );
    }
}

Header.propTypes = {
    quote: PropTypes.string.isRequired
}

export default Header;