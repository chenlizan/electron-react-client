import React from 'react';
import ChatContainer from '../chat/ChatContainer.jsx';
import Contact from '../contact/Contact.jsx';
import Group from '../group/Group.jsx';
import UserInfo from '../user/UserInfo.jsx';
import {ipcMsgRenderer, windowID} from '../../../utils/ipcMsg';
import '../stylesheets/MainFrame.css';
import userIcon from '../assets/images/user_icon.png';

export default class MainFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowUserInfo: false,
            nowIndex: 0
        }
    };

    componentDidMount() {
        ipcMsgRenderer.closeWindow(windowID.account);
    }

    showUserInfo = () => {
        this.setState({
            isShowUserInfo: true
        })
    };
    hideUserInfo = () => {
        this.setState({
            isShowUserInfo: false,
        })
    };
    chooseTabItem = (index) => {
        this.setState({
            nowIndex: index
        })
    };
    preventDefault = (e) => {
        e.stopPropagation();
    };
    render() {
        const tabItemIcon = [
            {icon: 'iconfont icon-xiaoxi icon-style'},
            {icon: 'iconfont icon-custom-user icon-style'},
            {icon: 'iconfont icon-qunzu icon-style'}
        ]
        const {isShowUserInfo, nowIndex, contentComponent} = this.state;
        return (
            <div className='chat-wrapper' id='mainFrame'>
                <ul className='tab-wrapper'>
                    <li className='tab-item' onClick={this.showUserInfo}>
                        <img src={userIcon}/>
                    </li>
                    {
                        tabItemIcon.map((item, index) => {
                            return (
                                <li onClick={() => {
                                    this.chooseTabItem(index)
                                }} className={this.state.nowIndex === index ? 'tab-item tab-item-active' : 'tab-item'}
                                    key={index}>
                                    <i className={item.icon}></i>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='main-frame-right'>
                    {
                        nowIndex === 0
                            ? <ChatContainer/>
                            : nowIndex === 1
                            ? <Contact/>
                            : <Group/>
                    }
                </div>
                <div className='bg-wrapper' onClick={this.hideUserInfo}
                     style={{display: isShowUserInfo ? 'block' : 'none'}}>
                    <div className='main-user-info' onClick={this.preventDefault}>
                        <UserInfo hideUserInfo={this.hideUserInfo}/>
                    </div>
                </div>
            </div>
        )
    }
}
