import React from 'react';
import PropTypes from 'prop-types';
import InputAccount from './InputAccount';
import InputPassword from './InputPassword';
import styles from './assets/InputGroupLogin.less';


export default class Index extends React.Component {

    render(){
        return (
                <div className={styles['InputGroupLogin']}>
                    <InputAccount />
                    <InputPassword />
                </div>
            )
    }
}