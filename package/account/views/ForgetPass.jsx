import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Icon, Button, notification} from 'antd';
import Header from '../../components/Account/Header';

const FormItem = Form.Item;

class ForgetPassForm extends React.Component {

    static propTypes = {};

    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        confirmDirty: false,
        isDisabled: false,
        visible: true
    };

    componentWillReceiveProps(nextProps) {
        const {electron} = nextProps;
        if (electron.action === 'newPassword' && electron.state === true) {
            notification.open({
                message: '成功提示',
                description: '修改密码成功！',
                onClose: () => {
                    this.context.router.push('/account/login')
                }
            });
        }
        else if (electron.action === 'newPassword' && electron.state === false) {
            notification.open({
                message: '错误提示',
                description: '修改密码失败！',
                onClose: () => {
                    this.context.router.push('/account/login')
                }
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {handleSubmitChangPassword, forgetPhone} = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            let data = {
                phone: forgetPhone,
                password: values.passWord
            };
            handleSubmitChangPassword({value: data});
            handleSubmitChangPassword({});
        });
    };

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    handleReturn = () => {
        this.context.router.push('/account/phone');
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        const {isDisabled, visible} = this.state;
        const suffix = visible ?
            <Icon type="eye" onClick={() => {
                this.setState({visible: false})
            }} style={{fontSize: 20}}/> :
            <Icon type="eye-o" onClick={() => {
                this.setState({visible: true})
            }} style={{fontSize: 20}}/>;
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

        return (
            <div className="account-wrap">
                <Header title="忘记密码"/>
                <Form onSubmit={this.handleSubmit} className="passWord-form">
                    <FormItem{...formItemLayout}>
                        {getFieldDecorator('passWord', {
                            rules: [{
                                required: true, message: '请输入6-12位密码！', min: 6, max: 12
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input
                                type={visible ? "password" : "text"}
                                placeholder="密码(6-12位，区分大小写)！"
                                prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                style={{width: '100%'}}
                                suffix={suffix}
                            />
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit"  onClick={this.handleReturn}>
                        上一步
                    </Button>
                    <Button type="primary" htmlType="submit" className="passWord-btn" disabled={isDisabled}>
                        确定
                    </Button>
                </Form>
            </div>
        );
    }
}

const WrappedForgetPassForm = Form.create()(ForgetPassForm);

export default WrappedForgetPassForm;