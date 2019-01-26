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
            inputValue: '',
            popupVisible: false,
            selectedKeys: ["1"]
        }
    }

    handleOnMouseEnter = ({key, domEvent}) => {
        this.setState({
            selectedKeys: [key]
        })
    };

    handleAvatarSize = (key) => {
        const {selectedKeys} = this.state;
        if (key === selectedKeys[0])
            return 'large';
        else if (key == (Number(selectedKeys[0]) + 1) || key == (Number(selectedKeys[0]) - 1))
            return 'default';
        else
            return 'small';
    };

    handleOpenClick = () => {
        const {popupVisible} = this.state;
        this.setState({
            popupVisible: !popupVisible
        });
    };

    handleOnPopupVisibleChange = (popupVisible) => {
        this.setState({
            popupVisible: popupVisible
        });
    };

    handleOnClick = ({key}) => {
        const {data} = this.props;
        this.setState({
            inputValue: data[key].account,
            popupVisible: false
        });
    };

    handleDeleteClick = (index) => {
        console.log(index);
    };

    renderMenu() {
        const {data} = this.props;
        const {selectedKeys} = this.state;
        const element = [];
        for (let i = 0, len = data.length; i < len; i++) {
            const index = String(i);
            element.push(
                <MenuItem key={index} onMouseEnter={this.handleOnMouseEnter}>
                    <Avatar size={this.handleAvatarSize(index)} src={data[i].image}/>
                    <div className="account">
                        {selectedKeys[0] === index ? <span>{data[i].name}</span> : null}
                        <span>{data[i].account}</span>
                    </div>
                    <div className="delete">
                        <IconFont type="electron-close" title="删除账号信息"
                                  onClick={this.handleDeleteClick.bind(null, index)}/>
                    </div>
                </MenuItem>
            );
        }
        return (
            <Menu className={styles['InputGroupLogin-Account-Menu']} selectable={false} selectedKeys={selectedKeys}
                  onClick={this.handleOnClick}>
                {element}
            </Menu>
        );
    };

    render() {
        const {inputValue, popupVisible} = this.state;
        return (
            <div className={styles['InputGroupLogin-Account']}>
                <Trigger
                    action={['click']}
                    popup={this.renderMenu()}
                    popupAlign={{
                        points: ['tc', 'bc'],
                    }}
                    popupVisible={popupVisible}
                    onPopupVisibleChange={this.handleOnPopupVisibleChange}
                    stretch='width'
                    destroyPopupOnHide
                >
                    <div
                        className={popupVisible ? styles['InputGroupLogin-Account-Down'] : styles['InputGroupLogin-Account-Up']}>
                        <input defaultValue={inputValue}/><IconFont type="electron-down"
                                                                    onClick={this.handleOpenClick}/>
                    </div>
                </Trigger>
            </div>
        )
    }
}