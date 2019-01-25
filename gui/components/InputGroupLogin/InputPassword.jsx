import React from 'react';
import PropTypes from 'prop-types';
import IconFont from "../IconFont";
import styles from './assets/InputGroupLogin.less';


export default class InputPassword extends React.PureComponent {
    render() {
        return (
            <div className={styles['InputGroupLogin-Password']}>
                <div>
                    <input/><IconFont type="electron-keyboard"/>
                </div>
            </div>
        )
    }
}