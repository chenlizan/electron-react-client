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
    };
    stopPropagation = (e) => {
        e.stopPropagation()
    }
    editNick = (e) => {
        // e.stopPropagation();
        this.setState({
            editNick: true
        })
    }
    saveNick = (e) => {
        // e.stopPropagation();
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
            <div className='userInfoWrapper' onClick={this.stopPropagation}>
                <div className='avatarWrapper'>
                    <i className='iconfont icon-close closeIcon' onClick={hideUserInfo} />
                    <img className='userAvatar' src={UserIcon} alt="user_icon" />
                </div>
                <ul className='userInfoContent'>
                    <li className='userInfoItem'>
                        <span className='itemTitle'>账号：</span>
                        <span className='itemDetail'>{ userInfo.account }</span>
                    </li>
                    <li className='userInfoItem'>
                        <span className='itemTitle'>昵称：</span>
                        {
                            editNick
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.nick} onBlur={this.saveNick} className='inputStyle'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='itemDetail'>{ userInfo.nick }</span>
                                        <span className='operate' onClick={this.editNick}>编辑</span>
                                    </span>
                                )
                        }
                    </li>
                    <li className='userInfoItem'>
                        <span className='itemTitle'>手机号：</span>
                        {
                            editPhone
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.tel} onBlur={this.savePhone} className='inputStyle'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='itemDetail'>{ userInfo.tel }</span>
                                        <span className='operate' onClick={this.editPhone}>编辑</span>
                                    </span>
                                )
                        }
                    </li>
                    <li className='userInfoItem'>
                        <span className='itemTitle'>邮箱：</span>
                        {
                            editEmail
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.email} onBlur={this.saveEmail} className='inputStyle'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='itemDetail'>{ userInfo.email }</span>
                                        <span className='operate' onClick={this.editEmail}>编辑</span>
                                    </span>
                                )
                        }
                    </li>
                    <li className='userInfoItem'>
                        <span className='itemTitle'>个性签名：</span>
                        {
                            editQM
                                ? (
                                    <span>
                                        <input type="text" placeholder={userInfo.qianming} onBlur={this.saveQM} className='inputStyle'/>
                                    </span>
                                )
                                : (
                                    <span>
                                        <span className='itemDetail'>{ userInfo.qianming }</span>
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