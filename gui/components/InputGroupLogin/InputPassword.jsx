import React from 'react';
import PropTypes from 'prop-types';

import styles from './assets/InputGroupLogin.less';

export default class InputPassword extends React.PureComponent{
    render() {
        return (
            <div className={styles['InputGroupLogin-Password']}>
                <input/>
            </div>
        )
    }
}