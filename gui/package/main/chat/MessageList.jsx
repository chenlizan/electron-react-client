import React from 'react';
import { Avatar, Badge, Table, Input, Icon } from 'antd';
// import { getMsgList, delMsg } from 'src/js/persistence/services';
import { Scrollbars } from 'react-custom-scrollbars';
import '../stylesheets/MessageList.css';

const { Search } = Input;
// const electron = window.require('electron');
// const { remote } = electron;
// const { Menu } = remote;

// 消息列表
class MessageList extends React.Component {
    constructor (props) {
        super(props);
        // this.contextMenu = Menu.buildFromTemplate([
        //     { label: '删除会话', type: 'normal', click: this.electronMenuClick }
        // ]);
        // this.speakerId = null;
        // this.isGroupChat = 0;
        // this.state = {
        //     dataSource: []
        // };
        this.state = {
            nowIndex: 0
        }
    }

    // 组件第一次渲染时获取消息
    componentWillMount () {
        this.initMsgList();
    }

    // 接受新的消息时，重新获取消息
    componentWillReceiveProps (nextProps) {
        // const { operation } = nextProps;
        // if (operation.action === 'imMsg') {
        //     this.initMsgList();
        // }
    }

    // 获取消息列表
    initMsgList = () => {
        // getMsgList().then((data) => {
        //     console.log(data);
        //     const _dataSource = data && data.map((item, index) => {
        //         return {
        //             key: index,
        //             pic: '',
        //             id: item.isGroupChat ? item.audienceId : item.speakerId,
        //             name: item.isGroupChat ? item.audienceName : item.speakerName,
        //             count: item.count,
        //             isGroupChat: item.isGroupChat
        //         };
        //     });
        //     if (_dataSource) {
        //         this.setState({ dataSource: _dataSource });
        //     } else {
        //         this.setState({ dataSource: [] });
        //     }
        // });
        console.log('获取消息列表');
    };

    // 点击右键菜单，删除会话
    electronMenuClick = (item) => {
        // if (item.label === '删除会话') {
        //     delMsg(this.speakerId, this.isGroupChat);
        //     this.initMsgList();
        // }
        // this.contextMenu.closePopup();
        console.log('点击右键菜单，删除会话', item);
    };

    // 删除聊天
    rowRightClick = (item) => {
        console.log('删除聊天', item);
        // const array = e.currentTarget.id.split('|');
        // const [
        //     speakerId,
        //     isGroupChat
        // ] = array;
        // this.speakerId = speakerId;
        // this.isGroupChat = isGroupChat;
        // this.contextMenu.popup();
    };

    // 切换当前联系人
    rowClick = (record) => {
        console.log('切换当前联系人', record);
        this.setState({
            nowIndex: record.id
        })
        // const { handleSwitchCurrentContacts } = this.props;
        // handleSwitchCurrentContacts({ side: record.isGroupChat, title: record.name, speakerId: record.id });
    };

    render () {
        const dataSource = [
            {
                id:'2153231345154541201',
                count: 1111,
                name: '张山',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541202',
                count: 1111,
                name: '李明友',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541203',
                count: 1111,
                name: '张山',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541204',
                count: 1111,
                name: '翻仓里',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541205',
                count: 1111,
                name: '陈礼赞',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541206',
                count: 1111,
                name: '李明',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541207',
                count: 1111,
                name: '黎明',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541208',
                count: 1111,
                name: '李旺',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541209',
                count: 1111,
                name: '李浩美',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541210',
                count: 1111,
                name: '美美哒',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541211',
                count: 1111,
                name: '美美哒',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541212',
                count: 1111,
                name: '美美哒',
                lastMsg: '你已添加好友'
            },
            {
                id:'2153231345154541213',
                count: 1111,
                name: '王佳',
                lastMsg: '你已添加好友'
            }
        ];
        const activeStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        };
        const { nowIndex } = this.state;
        return (
            <div className='chatMessageList' id='messageList'>
                <div className='chatSearchContainer'>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 225 }}
                        size="small"
                    />
                    <div className='addIcon'>+</div>
                    {/* <Icon type="plus-square-o" className='IconStyle' style={{verticalAlign: 'middle'}} /> */}
                </div>
                <Scrollbars style={{ marginBottom: '0px' }}>
                    {
                        dataSource.map((item, index) => {
                            return (
                                <div className='chatItem' style={ nowIndex === item.id ? activeStyle : null } key={index} onClick={() => { this.rowClick(item); }} onContextMenu={() => { this.rowRightClick(item) }}>
                                    <div className='chatItemLeft'>
                                        <Badge dot>
                                            <Avatar shape="square" size='large'>{ item.name }</Avatar>
                                        </Badge>
                                    </div>
                                    <div className='chatItemRight'>
                                        <div className='chatName'>
                                            <span>{ item.name }</span>
                                            <span className='chatTime'>13:00</span>
                                        </div>
                                        <div className='chatDetail'>{ item.lastMsg }</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Scrollbars>
            </div>
        );
    }
}

export default MessageList;
