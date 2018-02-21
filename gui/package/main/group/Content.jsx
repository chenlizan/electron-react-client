import React from 'react';
import { Avatar, Switch, Button } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import '../stylesheets/Content.css';

export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    toggleChoose = () => {
        console.log('toggle change');
    }
    sendMessage = () => {
        console.log('send message');
    }
    render () {
        const groupMember = [
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
            {userName: '李明友'},
        ]
        return (
            <div className='group-content-wrapper'>
                <Scrollbars>
                    <ul className='ul-wrapper'>
                        <li className='li-wrapper'>
                            <span className='title'>群名称： </span>
                            <span className='name'>武汉react技术交流群</span>
                        </li>
                        <li className='li-wrapper'>
                            <span className='title'>群二维码： </span>
                            <i className='iconfont icon-erweima'></i>
                        </li>
                        <li className='li-wrapper'>
                            <span className='title'>置顶群聊</span>
                            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={false} onChange={this.toggleChoose} />
                        </li>
                        <li className='li-wrapper'>
                            <span className='title'>免打扰</span>
                            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={false} onChange={this.toggleChoose} />
                        </li>
                    </ul>
                    <div className='send-message'>
                        <Button onClick={this.sendMessage} type="primary" style={{width: '130px'}} >发送</Button>
                    </div>
                    <div className='group-member-title'>群成员:</div>
                    <div>
                        <div className='group-item' style={{verticalAlign: 'top'}}>
                            <span className='deal'>+</span>
                        </div>
                        <div className='group-item' style={{verticalAlign: 'top'}}>
                            <span className='deal'>-</span>
                        </div>
                        {
                            groupMember.map((item, index) => {
                                return (
                                    <div className='group-item' key={index}>
                                        <Avatar shape="square" size='large' className='right-pic'>{ item.userName }</Avatar>
                                        <span className='name'>{ item.userName }</span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </Scrollbars>
            </div>
        )
    }
}