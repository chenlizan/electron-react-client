import React from 'react';
import { Layout, Icon } from 'antd';
import WindowHeader from  '../components/WindowHeader.jsx';
// import { Layout } from 'antd';
// import MemberList from './chat.chatWindow.memberList';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import '../stylesheets/ChatWindow.css';

// const { Header, Sider, Content } = Layout;
const { Header, Content, Footer } = Layout;


// 聊天页面窗口
class ChatWindow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // collapsed: true
        };
    }

    toggle = () => {
        console.log('1111');
        // this.setState({
        //     collapsed: !this.state.collapsed
        // });
    };

    render () {
        return (
            <div className='chat-window'>
                <Layout>
                    <Header>
                        <WindowHeader name='黄蓉婆婆'/>
                    </Header>
                    <Content style={{backgroundColor: 'f5f5f5'}}>
                        <MessageBox />
                    </Content>
                    <Footer>
                        <InputBox />
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default ChatWindow;
