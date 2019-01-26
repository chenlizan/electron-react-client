import React from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'antd';
import {ipcMsgRenderer, windowID} from '../../../utils/ipcMsg';
import IconFont from '../../../components/IconFont';
import InputGroupLogin from '../../../components/InputGroupLogin';
import {login} from "../services";

import drawLine from "./canv";
import styles from '../stylesheets/Login.less';

const InputGroup = Input.Group;

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowErrorTip: false,
            password: '',
            username: ''
        }
    }

    componentDidMount() {
        drawLine();
    }


    componentWillReceiveProps(nextProps) {
        const {electron} = nextProps;
        if (electron.action === 'login' && electron.state)
            ipcMsgRenderer.showWindow(windowID.main);
        else {
            this.setState({isShowErrorTip: !electron.state});
            setTimeout(() => {
                this.setState({isShowErrorTip: electron.state});
            }, 3000);
        }
    }

    handleSubmit = (e) => {
        let loginValue = {
            password: this.state.password,
            username: this.state.username
        };
        login(loginValue);
    };

    minimize = () => {
        const {minimize} = this.props;
        minimize ? minimize : ipcMsgRenderer.minWindow(windowID.account);
    };

    close = () => {
        const {close} = this.props;
        close ? close : ipcMsgRenderer.closeWindow(windowID.account);
    };

    getInput = (e) => {
        const {id, value} = e.currentTarget;
        switch (id) {
            case 'password':
                this.state.password = value;
                break;
            case 'username':
                this.state.username = value;
                break;
        }
    };

    toRegistry = () => {
        console.log('to registry');
        this.props.history.push('/registry');
    };

    forgetPsw = () => {
        console.log('forget pwd');
        this.props.history.push('resetPassword');
    };

    render() {
        const {isShowErrorTip} = this.state;
        return (
            <div className={styles['login']}>
                <canvas id="canvas" className={styles['login-canvas']} width={430} height={183}></canvas>
                <div className={styles['login-upper']}>
                    <div className={styles['login-upper-operate-icon']}>
                        <span className={styles['login-upper-operate-icon-setup']}>
                           <IconFont type="electron-setup"/>
                        </span>
                        <span className={styles['login-upper-operate-icon-minus']}>
                           <IconFont type="electron-minus" onClick={this.minimize}/>
                        </span>
                        <span className={styles['login-upper-operate-icon-close']}>
                           <IconFont type="electron-close" onClick={this.close}/>
                        </span>
                    </div>
                </div>
                <div className={styles['login-lower']}>
                    <div style={{textAlign: 'center', paddingTop: 14}}>
                        <div className={styles['login-lower-input-group-login']}>
                            <InputGroupLogin/>
                        </div>
                        <div>
                            <Button className={styles['login-lower-button']} type="primary">登&nbsp;&nbsp;录</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    electron: PropTypes.object
};