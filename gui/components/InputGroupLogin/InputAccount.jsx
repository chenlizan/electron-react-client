import React from 'react';
import PropTypes from 'prop-types';
import Trigger from 'rc-trigger';
import IconFont from '../IconFont';
import styles from './assets/InputGroupLogin.less';

function preventDefault(e) {
    e.preventDefault();
}

export default class InputAccount extends React.PureComponent {
    render() {
        return (
            <div className={styles['InputGroupLogin-Account']}>
                <Trigger
                    action={['click']}
                    popup={<div>i am a popup</div>}
                    popupAlign={{
                        points: ['tc', 'bc'],
                    }}
                    stretch='width'
                >
                    <div>
                        <input/><IconFont type="electron-down"/>
                    </div>
                </Trigger>
            </div>
        )
    }
}