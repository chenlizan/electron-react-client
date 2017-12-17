import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Account/Header';
import {Form, Input, Select, Row, Col, Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class phoneVerifyForm extends React.Component {

    constructor() {
        super();
        this.start = 0;
        this.setInterval;
    }

    static propTypes = {};

    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        confirmDirty: false,
        isDisabled: false,
        verifyBtnDisabled: false,
        btnValue: '获取验证码'
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {handleSaveRegisterPhone} = this.props
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                handleSaveRegisterPhone(values.phone);
                this.context.router.push('/account/register');
            }
        });
    };

    onClick = () => {
        const wait = 60;
        this.time(wait);
    };

    time = (wait) => {
        this.setInterval = setInterval(
            () => {
                this.start = this.start + 1;
                if (this.start >= wait) {
                    clearInterval(this.setInterval);
                    this.start = 0;
                    this.setState({
                        btnValue: '获取验证码',
                        verifyBtnDisabled: false
                    });
                    return;
                }
                let time = wait - this.start;
                let value = '重新获取' + '(' + time + ')';
                this.setState({
                    btnValue: value,
                    verifyBtnDisabled: true
                });
            },
            1000
        );
    };

    handleReturn = () => {
        this.context.router.push('/account/login');
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        const {isDisabled, btnValue, verifyBtnDisabled} = this.state;

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

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <span style={{width: 60}}>+86</span>
        );

        return (
            <div className="account-wrap">
                <Header title="注册"/>
                <Form onSubmit={this.handleSubmit} className="forget-form">
                    <FormItem{...formItemLayout}>
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: '请输入正确格式的手机号码！', pattern: /^1[3|4|5|7|8][0-9]\d{4,8}$/}],
                        })(
                            <Input addonBefore={prefixSelector} style={{width: '95%'}} placeholder="请输入手机号码！"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Row gutter={8}>
                            <Col span={11}>
                                {getFieldDecorator('captcha', {
                                    rules: [{required: true, message: '请输入您的验证码！'}],
                                })(
                                    <Input size="large" placeholder="请输入验证码！"/>
                                )}
                            </Col>
                            <Col span={12}>
                                <Button size="large" onClick={this.onClick}
                                        disabled={verifyBtnDisabled}>{btnValue}</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <Button type="primary" htmlType="submit"  onClick={this.handleReturn}>
                        上一步
                    </Button>
                    <Button type="primary" htmlType="submit" className="forget-btn" disabled={isDisabled}>
                        下一步
                    </Button>
                </Form>
            </div>
        );
    }
}

const PhoneRegister = Form.create()(phoneVerifyForm);

export default PhoneRegister;