// 群列表
import React from 'react';
import { Avatar, Badge, Table, Input, Icon } from 'antd';
// import { getMsgList, delMsg } from 'src/js/persistence/services';
import { Scrollbars } from 'react-custom-scrollbars';
import '../stylesheets/GroupList.css';

const { Search } = Input;
// const electron = window.require('electron');
// const { remote } = electron;
// const { Menu } = remote;


class MessageList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nowIndex: 0
        }
        // this.contextMenu = Menu.buildFromTemplate([
        //     { label: '删除会话', type: 'normal', click: this.electronMenuClick }
        // ]);
        // this.speakerId = null;
        // this.isGroupChat = 0;
        // this.state = {
        //     dataSource: []
        // };
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
        this.setState({
            nowIndex: record.id
        })
        console.log('切换当前联系人', record);
        // const { handleSwitchCurrentContacts } = this.props;
        // handleSwitchCurrentContacts({ side: record.isGroupChat, title: record.name, speakerId: record.id });
    };

    render () {
        const dataSource = [
            {
                title: '好友',
                list: [
                    {
                        id:'2153231345154541200',
                        name: '武汉市react交流群',
                        keyName: 'react'
                    },
                    {
                        id:'2153231345154541201',
                        name: '武汉市react交流群01',
                        keyName: 'react'
                    },
                    {
                        id:'2153231345154541202',
                        name: '武汉市react交流群02',
                        keyName: 'react'
                    },
                    {
                        id:'2153231345154541203',
                        name: '武汉市react交流群03',
                        keyName: 'react'
                    },
                    {
                        id:'2153231345154541204',
                        name: '武汉市vue交流群',
                        keyName: 'vue'
                    }
                ]
            },
            {
                title: '群分组1',
                list: [
                    {
                        id:'2153231345154541205',
                        name: '武汉市vue交流群01',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541206',
                        name: '成都市vue交流群',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541207',
                        name: '广州市vue交流群01',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541208',
                        name: '海南市vue交流群01',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541209',
                        name: '北京市vue交流群01',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541210',
                        name: '北京市vue交流群02',
                        keyName: 'vue'
                    }
                ]
            },
            {
                title: '群分组2',
                list:  [
                    {
                        id:'2153231345154541211',
                        name: '北京市vue交流群03',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541212',
                        name: '北京市vue交流群04',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541213',
                        name: '北京市vue交流群03',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541214',
                        name: '北京市vue交流群04',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541215',
                        name: '北京市vue交流群03',
                        keyName: 'vue'
                    },
                    {
                        id:'2153231345154541216',
                        name: '北京市vue交流群04',
                        keyName: 'vue'
                    }
                ]
            }
        ];
        const activeStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
        const { nowIndex } = this.state;
        return (
            <div className='message-list' id='messageList'>
                <div className='group-search-container'>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 225 }}
                        size="small"
                    />
                    <div className='add-icon'>+</div>
                </div>
                <Scrollbars>
                    {
                        dataSource.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='group-divice-title'>{ item.title }</div>
                                    {
                                        (item.list).map((ite, idx) => {
                                            return (
                                                <div className='list-item' style={nowIndex === ite.id ? activeStyle : null} key={idx} onClick={() => { this.rowClick(ite); }} onContextMenu={() => { this.rowRightClick(ite) }}>
                                                    <div className='left-wrapper'>
                                                        <Avatar shape="square" size='large'>{ ite.keyName }</Avatar>
                                                    </div>
                                                    <div className='right-wrapper'>
                                                        <span>{ ite.name }</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
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
