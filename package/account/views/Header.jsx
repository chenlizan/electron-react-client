import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../resources/logo.png';

class Header extends React.Component {

    static propTypes = {};

    static contextTypes = {
        router: PropTypes.object
    };

    state = {};

    render() {
        return (
            <div className="header">
                <div className="head-title"><span>{this.props.title}</span></div>
                <div className="logo-pic">
                    <img src={logo} />
                </div>
                <div className="head-name"><p>元数通</p></div>
            </div>
        )
    }
}

export default Header;