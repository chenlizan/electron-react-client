import React from 'react';
import MessageList from './MessageList';
import '../stylesheets/SlidebarList.css';

// 左边栏消息展示组件
class SlidebarList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className='chatSidebarList'>
                <MessageList />
            </div>
        );
    }
}

export default SlidebarList;
