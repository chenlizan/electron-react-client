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
            <div className='window-header'>
                <span className='window-header-name'>{name}</span>
                <div className='window-icon-wrapper'>
                    <i className='iconfont icon-suoxiao window-icon' onClick={this.minimize} />
                    <i className='iconfont icon-close window-icon' onClick={this.close} />
                </div>
            </div>
        )
    }
}
