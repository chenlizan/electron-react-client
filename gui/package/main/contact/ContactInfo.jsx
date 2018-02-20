import React from 'react';
import { Button } from 'antd';
import '../stylesheets/ContactInfo.css';
import userIcon from '../assets/images/user_icon.png';

export default class ContactInfo extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const info = {
            userName: '八二年的风',
            nick: '王佳',
            area: '湖北 武汉',
            account: '1323211234567'
        }
        return (
            <div className='contactInfoWrapper'>
                <div className='chatContentWrapper'>
                    <div className='header'>
                        <span className='userName'>{info.userName}</span>
                        <i style={{paddingLeft: '10px',color: '#108ee9',fontSize: '20px'}} className='iconfont icon-custom-user'></i>
                        <img className='userIcon' src={userIcon} alt="userIcon"/>
                    </div>
                    <ul className='content'>
                        <li className='item'>备&nbsp;&nbsp;注<span className='whiteSpace'></span>{info.nick}</li>
                        <li className='item'>地&nbsp;&nbsp;区<span className='whiteSpace'></span>{info.area}</li>
                        <li className='item'>微信号<span className='whiteSpace'></span>{info.account}</li>
                    </ul>
                    <div className='footer'>
                        <Button className='buttonStyle' type="primary" size='large'>发送</Button>
                    </div>
                </div>
            </div>
        )
    }
}