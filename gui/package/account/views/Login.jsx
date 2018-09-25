import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Input} from 'antd';
import {ipcMsgRenderer, windowID} from '../../../utils/ipcMsg';
import IconFont from '../../../components/IconFont';
import {login} from "../services";
import styles from '../stylesheets/Login.less';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowErrorTip: false,
            password: '',
            username: ''
        }
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

    //可以自定义最小化和关闭逻辑
    // minimize = () => {
    //     console.log('minimize window');
    // };
    //
    // close = () => {
    //     console.log('close window');
    // };

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
            <div className='login-wrapper' id='login'>
                <div className={styles["login-upper"]}>
                    <div className={styles['operate-icon']}>
                        <span className={styles["operate-icon-minus"]}>
                           <IconFont type="electron-minus" onClick={this.minimize}/>
                        </span>
                        <span className={styles["operate-icon-close"]}>
                           <IconFont type="electron-close" onClick={this.minimize}/>
                        </span>
                    </div>
                </div>
                <div className='input-wrapper'>
                    <i className='iconfont icon-custom-user input-icon'/>
                    <Input className='input-content' id='username' placeholder="请输入用户名" onBlur={this.getInput}/>
                </div>
                <div className='input-wrapper'>
                    <i className='iconfont icon-password input-icon'/>
                    <Input className='input-content' id='password' placeholder="请输入密码" type="password"
                           onBlur={this.getInput}/>
                </div>
                {
                    isShowErrorTip
                        ? <div className='error'>输入的用户名或密码错误</div>
                        : null
                }
                <div className='footer'>
                    <Button type="primary" onClick={this.handleSubmit} className='input-btn'>登录</Button>
                    <div className='footer-operate'>
                        <span onClick={this.toRegistry}>注册</span>
                        <span className='right' onClick={this.forgetPsw}>忘记密码</span>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    electron: PropTypes.object
};
