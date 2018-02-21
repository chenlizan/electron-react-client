import React from 'react';
import UserIcon from '../assets/images/user_icon.png';
import '../stylesheets/userInfo.css';

export default class UserInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            editNick: false,
            editPhone: false,
            editEmail: false,
            editQM: false
        }
    }
    editNick = (e) => {
        this.setState({
            editNick: true
        })
    }
    saveNick = (e) => {
        this.setState({
            editNick: false
        })
        let target = e.target;
        console.log('email: ', target.value);
    };
    editPhone = () => {
        this.setState({
            editPhone: true
        });
    };
    savePhone = (e) => {
        this.setState({
            editPhone: false
        });
        let target = e.target;
        console.log('new Phone: ', target.value);
    };
    editEmail = () => {
        this.setState({
            editEmail: true
        })
    };
    saveEmail = (e) => {
        this.setState({
            editEmail: false
        });
        let target = e.target;
        console.log('new email: ', target.value);
    };
    editQM = () => {
        this.setState({
            editQM: true
        });
    }
    saveQM = (e) => {
        this.setState({
            editQM: false
        });
        let target = e.target;
        console.log('new qianming: ', target.value);

    }
    render () {
        const { hideUserInfo } = this.props;
        const userInfo = {
            account: '12225489',
            nick: '王佳佳',
            email: '123321@360.com',
            tel: '12345678911',
            qianming: '写代码，写代码，写代码.....'
        }
        const { editNick, editPhone, editEmail, editQM } = this.state;
        return (
            <div className='user-info-wrapper'>
                <div className='avatar-wrapper'>
                    <i className='iconfont icon-close close-icon' onClick={hideUserInfo} />
                    <img className='user-avatar' src={UserIcon} alt="user_icon" />
                </div>
                <ul className='user-info-content'>
                    <li className='user-info-item'>
                        <span className='item-title'>账号：</span>
                        <span className='item-detail'>{ userInfo.account }</span>
                    </li>
                    <li className='user-info-item'>
                        <span className='item-title'>昵称：</span>
                        {
                            editNick
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.nick} onBlur={this.saveNick} className='input-style'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='item-detail'>{ userInfo.nick }</span>
                                        <span className='operate' onClick={this.editNick}>编辑</span>
                                    </span>
                                )
                        }
                    </li>
                    <li className='user-info-item'>
                        <span className='item-title'>手机号：</span>
                        {
                            editPhone
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.tel} onBlur={this.savePhone} className='input-style'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='item-detail'>{ userInfo.tel }</span>
                                        <span className='operate' onClick={this.editPhone}>编辑</span>
                                    </span>
                                )
                        }
                    </li>
                    <li className='user-info-item'>
                        <span className='item-title'>邮箱：</span>
                        {
                            editEmail
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.email} onBlur={this.saveEmail} className='input-style'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='item-detail'>{ userInfo.email }</span>
                                        <span className='operate' onClick={this.editEmail}>编辑</span>
                                    </span>
                                )
                        }
                    </li>
                    <li className='user-info-item'>
                        <span className='item-title'>个性签名：</span>
                        {
                            editQM
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.qianming} onBlur={this.saveQM} className='input-style'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='item-detail'>{ userInfo.qianming }</span>
                                        <span className='operate' onClick={this.editQM}>编辑</span>
                                    </span>
                                )
                        }
                    </li>
                </ul>
            </div>
        )
    }
}