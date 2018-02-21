import React from 'react';
import {Input, Icon, Button} from 'antd';
import Header from '../components/Header';
import {resetPassword} from "../services";
import '../stylesheets/ResetPassword.css';

export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verifyBtnDisabled: false,
            isShowPhoneError: false,
            btnValue: '获取验证码',
            username: '',
            password: '',
            phone: '',
            verifyCode: ''
        }
    };

    goToLogin = () => {
        this.props.history.push('/Login');
    };

    getInput = (e) => {
        const {id, value} = e.currentTarget;
        switch (id) {
            case 'username':
                this.state.username = value;
                break;
            case 'password':
                this.state.password = value;
                break;
            case 'phone':
                this.state.phone = value;
                break;
            case 'verifyCode':
                this.state.verifyCode = value;
                break;
        }
    };

    resetPassword = () => {
        const {username, password, phone, verifyCode} = this.state;
        const resetInfo = {
            username: username,
            password: password,
            phone: phone,
            verifyCode: verifyCode
        };
        resetPassword(resetInfo);
        this.props.history.push('/Login');
    };

    getVerifyCode = () => {
        if (this.state.verifyBtnDisabled) {
            return;
        }
        const wait = 60;
        this.time(wait);
    };

    time = (wait) => {
        this.setInterval = setInterval(() => {
            this.start = this.start + 1;
            if (wait <= this.start) {
                clearInterval(this.setInterval);
                this.start = 0;
                this.setState({
                    btnValue: '获取验证码',
                    verifyBtnDisabled: false
                });
                return;
            }
            let time = wait - this.start;
            let value = `重新获取(${time}s)`;
            this.setState({
                btnValue: value,
                verifyBtnDisabled: true
            });
        }, 1000);
    };

    render() {
        const {verifyBtnDisabled, isShowPhoneError, btnValue} = this.state;
        return (
            <div>
                <Header/>
                <div className='input-wrapper'>
                    <i className='iconfont icon-custom-user input-icon'/>
                    <Input className='input-content' id='username' placeholder="请输入用户名" onBlur={this.getInput}/>
                </div>
                <div className='input-wrapper'>
                    <i className='iconfont icon-password input-icon'/>
                    <Input className='input-content' id='password' placeholder="请输入新密码" onBlur={this.getInput}/>
                </div>
                <div className='input-wrapper'>
                    <i className='iconfont icon-phone input-icon'/>
                    <Input className='input-content' id='phone' placeholder="请输入手机号" onBlur={this.getInput}/>
                    <span className={isShowPhoneError ? 'error' : 'no-error'}>手机号输入有误</span>
                </div>
                <div className='input-wrapper'>
                    <i className='iconfont icon-Safety input-icon'/>
                    <Input className='input-content' id='verifyCode' placeholder="请输入验证码" onBlur={this.getInput}/>
                    <button className={verifyBtnDisabled ? 'input-btn dis-input-btn' : 'input-btn'}
                            onClick={this.getVerifyCode}>{btnValue}</button>
                </div>
                <div className='footer'>
                    <Button type="primary" onClick={this.resetPassword} className='input-btn'>确定</Button>
                    <span className='footer-span'><span style={{cursor: 'pointer'}}
                                                        onClick={this.goToLogin}>去登录>></span></span>
                </div>
            </div>
        )
    }
}
