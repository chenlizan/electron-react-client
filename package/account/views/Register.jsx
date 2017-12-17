import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Account/Header';
import {Form, Input, Icon, Button, Checkbox, notification} from 'antd';

const FormItem = Form.Item;

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.isDisabled = true;
        this.state = {
            visible: true
        }
    }

    static propTypes = {};

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillReceiveProps(nextProps) {
        const {electron} = nextProps;
        if (electron.action === 'register' && electron.state === true) {
            this.context.router.push('/account/login');
        }
        else if (electron.action === 'register' && electron.state === false) {
            notification.open({
                message: '错误提示',
                description: '账号注册失败！',
                onClose: () => {
                    this.context.router.push('/account/login')
                }
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {registerPhone, handleSubmitRegisterInfo} = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                handleSubmitRegisterInfo({
                    value: {
                        user: values.userName,
                        password: values.password,
                        phone: registerPhone
                    }
                });
                handleSubmitRegisterInfo({});
            }
        });
    };

    checkAgreement = (rule, value, callback) => {
        this.isDisabled = !value;
        callback();
    };
    handleReturn = () => {
        this.context.router.push('/account/phoneRegister');
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const {visible} = this.state;
        const suffix = visible ?
            <Icon type="eye" onClick={() => {
                this.setState({visible: false})
            }} style={{fontSize: 20}}/> :
            <Icon type="eye-o" onClick={() => {
                this.setState({visible: true})
            }} style={{fontSize: 20}}/>;

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                }
            }
        };

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            }
        };

        return (
            <div className="account-wrap">
                <Header title="注册"/>
                <Form onSubmit={this.handleSubmit} className="register-form">
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('userName', {
                            rules: [{
                                required: true,
                                message: '账号名必须字母、数字组成!',
                                pattern: /^[a-zA-z]\w{5,17}$/
                            }],
                        })(
                            <Input placeholder="账号(请输入6-12个字母或数字)！"
                                   prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                   style={{width: '105%'}}/>
                        )}
                    </FormItem>
                    <FormItem{...formItemLayout}>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入6-12位密码！', min: 6, max: 18
                            }],
                        })(
                            <Input
                                type={visible ? "password" : "text"}
                                placeholder="密码(6-12位，区分大小写)！"
                                prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                style={{width: '105%'}}
                                suffix={suffix}
                            />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout} style={{marginBottom: 8}}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                            rules: [{
                                required: true
                            }, {
                                validator: this.checkAgreement,
                            }],
                        })(
                            <Checkbox><a>我同意该条款</a></Checkbox>
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit" onClick={this.handleReturn}>
                        上一步
                    </Button>
                    <Button type="primary" htmlType="submit" className="register-btn" disabled={this.isDisabled}>
                        注册
                    </Button>
                </Form>
            </div>
        );
    }
}

const WrappedRegisterForm = Form.create()(RegisterForm);

export default WrappedRegisterForm;