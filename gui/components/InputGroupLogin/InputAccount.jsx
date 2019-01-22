import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
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


export default class InputAccount extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: []
        }
    }


    handleOnMouseEnter = ({key, domEvent}) => {
        this.setState({
            selectedKeys: [key]
        })
    };

    handleSize = (key) => {
        const {selectedKeys} = this.state;
        if (key === selectedKeys[0])
            return 'large';
        else if (key == (Number(selectedKeys[0]) + 1) || key == (Number(selectedKeys[0]) - 1))
            return 'default';
        else
            return 'small';
    }

    renderMenu = () => {
        return (
            <Menu className={styles['InputGroupLogin-Account-Menu']} selectedKeys={this.state.selectedKeys}>
                <MenuItem key="1" onMouseEnter={this.handleOnMouseEnter}><Avatar size={this.handleSize("1")}
                                                                                 src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></MenuItem>
                <MenuItem key="2" onMouseEnter={this.handleOnMouseEnter}><Avatar size={this.handleSize("2")}
                                                                                 src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></MenuItem>
                <MenuItem key="3" onMouseEnter={this.handleOnMouseEnter}><Avatar size={this.handleSize("3")}
                                                                                 src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></MenuItem>
            </Menu>
        );
    }


    render() {
        return (
            <div className={styles['InputGroupLogin-Account']}>
                <Trigger
                    action={['click']}
                    popup={this.renderMenu()}
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