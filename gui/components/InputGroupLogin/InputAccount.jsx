import React from 'react';
import PropTypes from 'prop-types';
import Trigger from 'rc-trigger';
import IconFont from '../IconFont';
import styles from './assets/InputGroupLogin.less';

export default class InputAccount extends React.PureComponent {
    render() {
        return (
            <div className={styles['InputGroupLogin-Account']}>
                    <input/><IconFont type="electron-down"/>
            </div>
        )
    }
}