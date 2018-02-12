import React from 'react';
import { Avatar } from 'antd';
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
                    <i className='iconfont icon-suoxiao icon' onClick={this.minimize} />
                    <i className='iconfont icon-close icon' onClick={this.close} />
                </div>
                {
                    isShowAvatar ? <Avatar size='large' className='user-avatar'>user</Avatar> : null
                }
            </div>
        )
    }
}