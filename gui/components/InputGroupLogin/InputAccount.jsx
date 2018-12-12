import React from 'react';
import PropTypes from 'prop-types';
import Menu, {MenuItem} from "rc-menu";
import Trigger from 'rc-trigger';
import IconFont from '../IconFont';
import styles from './assets/InputGroupLogin.less';

function preventDefault(e) {
    e.preventDefault();
}

function getPopupContainer(trigger) {
    return trigger.parentNode;
}

function renderMenu() {
    return (
        <Menu>
            <MenuItem>i do not need key</MenuItem>
        </Menu>
    );
}

export default class InputAccount extends React.PureComponent {
    render() {
        return (
            <div className={styles['InputGroupLogin-Account']}>
                <Trigger
                    action={['click']}
                    popup={renderMenu()}
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