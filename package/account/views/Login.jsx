import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button} from 'antd';
import Header from '../../components/Account/Header';
import {getAccountInfo} from '../../controllers/Home';

const electron = window.require('electron');
const {ipcRenderer} = electron;

const FormItem = Form.Item;

class LoginForm extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        isDisabled: false,
        isTip: false
    };

    componentWillReceiveProps(nextProps) {
        const {electron} = nextProps;
        if (electron.action === 'login' && electron.state === true) {
            ipcRenderer.send('open', ['home', '/home']);
            ipcRenderer.send('close', ['login']);
        }
        else if (electron.action === 'login' && electron.state === false) {
            this.state.isTip = true;
        }
    }

    onClick = (e) => {
        switch (e.currentTarget.id) {
            case 'register' :
                return this.context.router.push('/account/phoneRegister');
            case 'forget' :
                return this.context.router.push('/account/phone');
            default:
                return this.context.router.push('/');
        }
    };

    onChang = (e) => {
        const {isTip} = this.state;
        if (isTip)
            this.state.isTip = false;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {handleSubmitLoginInfo} = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                handleSubmitLoginInfo({value: values});
                handleSubmitLoginInfo({});
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {isDisabled, isTip} = this.state;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };

        const tip = (
            <p>
                <Icon type="exclamation-circle-o" style={{fontSize: 12, color: '#08c', marginLeft: 25}}/>
                <span style={{color: "#FF3399"}}>账号或密码错误请重新输入！</span>
            </p>
        );

        return (
            <div className="account-wrap">
                <Header title="登陆"/>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('userName', {
                            rules: [{
                                required: true,
                                message: '用户名必须字母、数字组成!',
                                pattern: /^[a-zA-z0-9]\w{5,17}$/
                            }],
                        })(
                            <Input placeholder="请输入用户名！"  prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                   style={{width: '100%'}} onChange={this.onChang}/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入6-18位密码！', min: 6, max: 18}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="请输入密码！" style={{width: '100%'}} onChange={this.onChang}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <div>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                    disabled={isDisabled}>
                                登录
                            </Button>
                            {isTip ? tip : null}
                        </div>
                        <div className='reg-forgot'>
                            <a id="register" onClick={this.onClick}>新用户注册</a>
                            <a className="login-form-forgot" id="forget" onClick={this.onClick}>忘记密码</a>
                        </div>
                        <div className="layout-copy">
                            2017- &copy; Yuanshu
                        </div>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;