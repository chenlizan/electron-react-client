import React from 'react';
import SlidebarList from './SlidebarList';
import ChatWindow from './ChatWindow';
import '../stylesheets/ChatContainer.css';

export default class ChatContainer extends React.Component {
    render () {
        return (
            <div className='chatContent'>
                <SlidebarList />
                <ChatWindow />
            </div>
        );
    }
}
