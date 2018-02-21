import React, { Component } from 'react';
import '../stylesheets/Header.css';
// const electron = window.require('electron');
// const { ipcRenderer } = electron;

class Header extends Component {
    // 窗口最小化
    minimize = () => {
        // ipcRenderer.send('minimize', [this.props.name]);
    };

    // 窗口关闭
    close = () => {
        // ipcRenderer.send('close', [this.props.name]);
    };
    render () {
        return (
            <div className='all-wrap'>
                <div className='title-wrap'>
                    <div className='title'>
                        <span>{this.props.title}</span>
                    </div>
                    <div className='icon'>
                        <i className='iconfont icon-suoxiao header-icon' onClick={this.minimize} />
                        <i className='iconfont icon-close header-icon' onClick={this.close} />
                    </div>
                </div>
                <div className='header-wrap'>
                    <div className='header-content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
