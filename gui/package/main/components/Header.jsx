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
            <div className='allWrap'>
                <div className='titleWrap'>
                    <div className='title'>
                        <span>{this.props.title}</span>
                    </div>
                    <div className='icon'>
                        <i className='iconfont icon-suoxiao Icon' onClick={this.minimize} />
                        <i className='iconfont icon-close Icon' onClick={this.close} />
                    </div>
                </div>
                <div className='Wrap'>
                    <div className='content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
