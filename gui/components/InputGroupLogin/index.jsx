import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Checkbox} from 'antd';
import InputAccount from './InputAccount';
import InputPassword from './InputPassword';
import './assets/index.less';

export default class Index extends React.Component {

    static defaultProps = {
        prefixCls: 'inputgrouplogin',
        onPopupVisibleChange() {
        }
    };

    static propTypes = {
        prefixCls: PropTypes.string,
        onPopupVisibleChange: PropTypes.func
    };

    render() {
        const {prefixCls} = this.props;
        return (
            <div className={classNames(`${prefixCls}`)}>
                <InputAccount {...this.props}/>
                <InputPassword {...this.props}/>
                <div className={classNames(`${prefixCls}-checkbox`)}>
                    <Checkbox>记住密码</Checkbox><Checkbox>自动登录</Checkbox>
                </div>
            </div>
        )
    }
}