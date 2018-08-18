import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import {ipcMsgRenderer, windowID} from '../../../utils/ipcMsg';
import styles from '../stylesheets/Header.css';
import {} from  '../../../assets/'
import bgImage from '../asset/images/bg-image.jpg';
import Login from "../views/Login";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    minimize = () => {
        const {minimize} = this.props;
        minimize ? minimize : ipcMsgRenderer.minWindow(windowID.account);
    };

    close = () => {
        const {close} = this.props;
        close ? close : ipcMsgRenderer.closeWindow(windowID.account);
    };

    render() {
        const {isShowAvatar} = this.props;
        return (
            <div className={styles['header-wrapper']}>
                <img src={bgImage} className={styles['bg-image']}/>
                <div className={styles['operate-icon']}>
                    <i className='iconfont icon-suoxiao icon' onClick={this.minimize}/>
                    <i className='iconfont icon-close icon' onClick={this.close}/>
                </div>
                {isShowAvatar ? <Avatar size='large' className={styles['user-avatar']}>user</Avatar> : null}
            </div>
        )
    }
}

Header.propTypes = {
    close: PropTypes.func,
    minimize: PropTypes.func,
    isShowAvatar: PropTypes.bool
};
