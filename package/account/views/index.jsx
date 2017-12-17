/**
 * Created by chenlizan on 2017/9/22.
 */

import PropTypes from 'prop-types';
import React from 'react';
import {Icon} from 'antd';

const electron = window.require('electron');
const {ipcRenderer} = electron;

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextTypes = {
        router: PropTypes.object
    };


    /*    minimize = () => {
            ipcRenderer.send('minimize', ['login']);
        };*/

    close = () => {
        /*        let value = this.props.children.props.route.path;
                if (value === 'login') {*/
        ipcRenderer.send('close', ['login']);
        /*        } else {
                    return this.context.router.push('/account/login');
                }*/
    };

    render() {
        return (
            <div id="dragBox">
                <div className="wrap">
                    <div className="icon">
                        <Icon type="close" className='close-icon' onClick={this.close}/>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Account;