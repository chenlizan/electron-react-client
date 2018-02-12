import React from 'react';
import Header from '../components/Header';
import {Form, Icon, Input, Button, Checkbox, Avatar } from 'antd';

import {login} from "../services";
import '../stylesheets/Login.css';


const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor (props) {
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
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         this.props.handleSubmitLoginInfo(values);
        //         login(values);
        //         console.log(`loginInfo: ${JSON.stringify(values)}`);
        //     }
        // });
    };
    minimize = () => {
        console.log('minimize window');
    };
    close = () => {
        console.log('close window');
    };
    getInput = (e) => {
        let target = e.target;
        if (target.id === 'password') {
            this.setState({
                password: target.value
            })
            
        }
        if (target.id === 'username') {
            this.setState({
                username: target.value
            })
            
        }
    };
    toRegistry = () => {
        console.log('to registry');
        this.props.history.push('/registry');
    };
    forgetPsw = () => {
        console.log('forget pwd');
        this.props.history.push('resetPassword');
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {electron} = this.props;
        const { isShowErrorTip } = this.state;
        return (
            <div className='login-wrapper' id='login'>
                <Header isShowAvatar={true} minimize={this.minimize} close={this.close}/>
                <div className='input-wrapper'>
                    <i className='iconfont icon-custom-user input-icon' />
                    <Input className='input-content' id='username' placeholder="请输入用户名" onBlur={this.getInput} />
                </div>
                <div className='input-wrapper'>
                    <i className='iconfont icon-password input-icon' />
                    <Input className='input-content' id='password' placeholder="请输入密码" onBlur={this.getInput} />
                </div>
                {
                    isShowErrorTip
                        ? <div className='error'>输入的用户名或密码错误</div>
                        : null
                }
                {/* <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 15}}/>} placeholder="请输入用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 15}}/>} type="password"
                                placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <div className='other-operate'>
                            <span>注册</span>
                            <span className='right'>忘记密码</span>
                        </div>
                        <div>{(electron === undefined) ? '' : electron.result}</div>
                    </FormItem>
                </Form> */}
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

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
