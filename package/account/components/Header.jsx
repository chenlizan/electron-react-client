import React from 'react';
import { Icon, Avatar } from 'antd';
import '../stylesheets/Header.css';
import bgImage from '../asset/images/bg-image.jpg';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    };
    minimize = () => {
        this.props.minimize();
    };
    close = () => {
        this.props.close();
    }
    render () {
        const { isShowAvatar } = this.props;
        return (
            <div className='header-wrapper'>
                <img src={bgImage} className='bg-image'/>
                <div className='operate-icon'>
                    <Icon type='minus' onClick={this.minimize} className='icon' />
                    <Icon type='close' onClick={this.close} className='icon' />
                    {/* <i className='iconfont icon-suoxiao icon' /> */}
                </div>
                {
                    isShowAvatar ? <Avatar size='large' className='user-avatar'>user</Avatar> : null
                }
            </div>
        )
    }
}