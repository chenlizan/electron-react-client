import React from 'react';
import Header from '../components/Header';
import {Icon, Input, Button, Checkbox, Avatar} from 'antd';
import {login} from "../services";
import '../stylesheets/Login.css';

const electron = window.require('electron');
const {ipcRenderer} = electron;

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowErrorTip: false,
            password: '',
            username: ''
        }
    }

    handleSubmit = (e) => {
        let loginValue = {
            password: this.state.password,
            username: this.state.username
        };
        // 登录返回错误，isShowErrorTip显示为false
        this.setState((prevState) => ({
            isShowErrorTip: !prevState.isShowErrorTip
        }));
        console.log('loginValue: ', loginValue);
        login(loginValue);

    };

    minimize = () => {
        console.log('minimize window');
    };

    close = () => {
        console.log('close window');
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
            <div className='login-wrapper' id='login'>
                <Header isShowAvatar={true} minimize={this.minimize} close={this.close}/>
                <div className='input-wrapper'>
                    <i className='iconfont icon-custom-user input-icon'/>
                    <Input className='input-content' id='username' placeholder="请输入用户名" onBlur={this.getInput}/>
                </div>
                <div className='input-wrapper'>
                    <i className='iconfont icon-password input-icon'/>
                    <Input className='input-content' id='password' placeholder="请输入密码" onBlur={this.getInput}/>
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
