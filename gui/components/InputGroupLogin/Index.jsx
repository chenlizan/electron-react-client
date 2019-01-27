import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';
import InputAccount from './InputAccount';
import InputPassword from './InputPassword';
import styles from './assets/InputGroupLogin.less';

export default class Index extends React.Component {

    static defaultProps = {
        onPopupVisibleChange() {
        }
    };

    static propTypes = {
        onPopupVisibleChange: PropTypes.func
    };

    render() {
        return (
            <div className={styles['InputGroupLogin']}>
                <InputAccount {...this.props}/>
                <InputPassword/>
                <div className={styles['InputGroupLogin-checkbox']}>
                    <Checkbox>记住密码</Checkbox><Checkbox>自动登录</Checkbox>
                </div>
            </div>
        )
    }
}