import React from 'react';
import { Avatar } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
// import { getMsgBox } from 'src/js/persistence/services';
import '../stylesheets/MessageBox.css';

// 聊天信息展示框
class MessageBox extends React.Component {
    constructor () {
        super();
        this.msg = [];
        this.state = {
            data: [],
        };
    }

    // 组件第一次渲染时，获取聊天信息
    componentWillMount () {
        const { speakerId, isGroupChat } = this.props;
        this.initMsgBox(speakerId, isGroupChat);
    }
    componentDidMount () {
        this.refs.scrollbars.scrollToBottom();
    }

    // 接受新消息时，重新获取信息
    componentWillReceiveProps (nextProps) {
        // const { speakerId, isGroupChat, operation } = nextProps;
        // if (operation.action === 'imMsg' || speakerId !== this.props.speakerId) {
        //     this.initMsgBox(speakerId, isGroupChat);
        // }
    }
    // 获取聊天信息
    initMsgBox = (id, isGroup) => {
        // getMsgBox(id, isGroup).then((data) => {
        //     this.setState({ data: data });
        //     this.refs.scrollbars.scrollToBottom();
        // });
    };

    render () {
        const { contentHeight } = this.state;
        const mineId = '1233211234567';
        const data = [
            {
                speakerId: '1233211234567',
                name: '李明友',
                content: '今天的会议内容都搞清楚了不? '
            },
            {
                speakerId: '1472583697854',
                speakerName: '黄蓉婆婆',
                content: '搞清楚了呢，谢谢您的关心',
            },
            {
                speakerId: '1233211234567',
                name: '李明友',
                content: '那就行，下去再看看明天的会议内容，有什么不明白的可以问问同事，或者是直接问我都可以的，那就行，下去再看看明天的会议内容，有什么不明白的可以问问同事，或者是直接问我都可以的， '
            },
            {
                speakerId: '1472583697854',
                speakerName: '黄蓉婆婆',
                content: '不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的',
            },
            {
                speakerId: '1233211234567',
                name: '李明友',
                content: '那就行，下去再看看明天的会议内容，有什么不明白的可以问问同事，或者是直接问我都可以的，那就行，下去再看看明天的会议内容，有什么不明白的可以问问同事，或者是直接问我都可以的， '
            },
            {
                speakerId: '1472583697854',
                speakerName: '黄蓉婆婆',
                content: '不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的',
            },
            {
                speakerId: '1233211234567',
                name: '李明友',
                content: '那就行，下去再看看明天的会议内容，有什么不明白的可以问问同事，或者是直接问我都可以的，那就行，下去再看看明天的会议内容，有什么不明白的可以问问同事，或者是直接问我都可以的， '
            },
            {
                speakerId: '1472583697854',
                speakerName: '黄蓉婆婆',
                content: '不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的，不用客气的',
            }

        ]
        let chatMsg = data.map((item, index) => {
            if (item.speakerId === mineId) {
                return (
                    <div key={index} className='rightBox'>
                        <div className='rightContent'>
                            <Avatar shape="square" className='rightPic'>我</Avatar>
                            <div className='rightMsg'>
                                {item.content}
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div key={index} className='leftBox'>
                    <div className='leftTitle'>
                        <div className='leftContent'>
                            <Avatar className='leftPic' shape="square">
                                { item.speakerName.slice(item.speakerName.length-2) }
                            </Avatar>
                            <div className='leftMsg'>
                                <div>{ item.speakerName}</div>
                                <div className='leftMsgContent'>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className='messageBox'>
                <Scrollbars
                    ref="scrollbars"
                >
                    {chatMsg}
                </Scrollbars>
            </div>
        );
    }
}

export default MessageBox;
