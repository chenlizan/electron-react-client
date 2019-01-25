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
            popupVisible: false,
            selectedKeys: ["1"]
        }
    }

    handleOnMouseEnter = ({key, domEvent}) => {
        this.setState({
            selectedKeys: [key]
        })
    };

    handleOnPopupVisibleChange = (popupVisible) => {
        this.setState({popupVisible})
    };

    handleSize = (key) => {
        const {selectedKeys} = this.state;
        if (key === selectedKeys[0])
            return 'large';
        else if (key == (Number(selectedKeys[0]) + 1) || key == (Number(selectedKeys[0]) - 1))
            return 'default';
        else
            return 'small';
    };

    handleOnClick = (key) => {
        console.log(key)
    };

    renderMenu = (data) => {
        const {selectedKeys} = this.state;
        const element = [];
        for (let i = 0, len = data.length; i < len; i++) {
            const index = String(i);
            element.push(
                <MenuItem key={index} onMouseEnter={this.handleOnMouseEnter}>
                    <Avatar size={this.handleSize(index)} src={data[i].image}/>
                    <div className="account">
                        {selectedKeys[0] === index ? <span>{data[i].name}</span> : null}
                        <span>{data[i].account}</span>
                    </div>
                    <div className="delete">
                        <IconFont type="electron-close" title="删除账号信息" onClick={this.handleOnClick.bind(null, index)}/>
                    </div>
                </MenuItem>
            );
        }
        return (
            <Menu className={styles['InputGroupLogin-Account-Menu']} selectedKeys={selectedKeys}>
                {element}
            </Menu>
        );
    };

    render() {
        const {popupVisible} = this.state;

        const accountList = [
            {
                account: "903949",
                name: "陈明亮",
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },
            {
                account: "903949",
                name: "陈明亮",
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },
            {
                account: "903949",
                name: "陈明亮",
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },


        ];

        return (
            <div className={styles['InputGroupLogin-Account']}>
                <Trigger
                    action={['click']}
                    popup={this.renderMenu(accountList)}
                    popupAlign={{
                        points: ['tc', 'bc'],
                    }}
                    onPopupVisibleChange={this.handleOnPopupVisibleChange}
                    stretch='width'
                    destroyPopupOnHide
                >
                    <div
                        className={popupVisible ? styles['InputGroupLogin-Account-Down'] : styles['InputGroupLogin-Account-Up']}>
                        <input/><IconFont type="electron-down"/>
                    </div>
                </Trigger>
            </div>
        )
    }
}