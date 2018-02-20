import React from 'react';
import {Icon} from 'antd';
import {ipcMsgRenderer, windowID} from '../../../utils/ipcMsg';
import '../stylesheets/WindowHeader.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    minimize = () => {
        const {minimize} = this.props;
        minimize ? minimize : ipcMsgRenderer.minWindow(windowID.main);
    };

    close = () => {
        const {close} = this.props;
        close ? close : ipcMsgRenderer.closeWindow(windowID.main);
    };

    render() {
        const {name} = this.props;
        return (
            <div className='windowHeader'>
                <span className='headerName'>{name}</span>
                <div className='headerIcon'>
                    <Icon type='minus' onClick={this.minimize} className='Icon'/>
                    <Icon type='close' onClick={this.close} className='Icon'/>
                </div>
            </div>
        )
    }
}
