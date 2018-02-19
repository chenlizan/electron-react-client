import React from 'react';
import { Tabs } from 'antd';
import ChatContainer from '../chat/ChatContainer.jsx';
import '../stylesheets/MainFrame.css';
import userIcon from '../assets/images/user_icon.png';

const { TabPane } = Tabs
export default class MainFrame extends React.Component{
    constructor (props) {
        super(props);
    };
    render () {
        return (
            <div className='chatWrapper' id='mainFrame'>
                <Tabs defaultActiveKey='1' tabPosition='left' style={{ height: '100%' }}>
                    <TabPane tab={<img src={userIcon} />} disabled key='0'>
                    </TabPane>
                    <TabPane tab={<div className='iconContainer'><i className='iconfont icon-xiaoxi'></i><span>会话</span></div>} key='1'>
                        <ChatContainer />
                    </TabPane>
                    <TabPane tab={<div className='iconContainer'><i className='iconfont icon-custom-user'></i><span>好友</span></div>} key='2'>
                        {/* <Contact /> */}
                        联系人
                    </TabPane>
                    <TabPane tab={<div className='iconContainer'><i className='iconfont icon-qunzu'></i><span>群聊</span></div>} key='3'>
                        {/* <GroupChat /> */}
                        群聊
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}