import React from 'react';
import { Icon, Input, Avatar } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import '../stylesheets/Slider.css';

const { Search } = Input;
export default class Slider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nowIndex: 0
        }
    }
    addFriend = () => {
        console.log('addFriend')
    }
    changeCurrent = (current) => {
        this.setState({
            nowIndex: current.id
        })
        console.log(current)
    }
    render () {
        const data = [
            {
                title: '家人',
                list: [
                    {
                        userName: '张三',
                        id: '01'
                    },
                    {
                        userName: '张四',
                        id: '02'
                    },
                    {
                        userName: '张五',
                        id: '03'
                    },
                    {
                        userName: '王佳',
                        id: '04'
                    },
                    {
                        userName: '王佳佳',
                        id: '05'
                    }
                ]
            },
            {
                title: '朋友',
                list: [
                    {
                        userName: '王乐',
                        id: '06'
                    },
                    {
                        userName: '王乐乐',
                        id: '07'
                    },
                    {
                        userName: '欧阳林',
                        id: '08'
                    },
                    {
                        userName: '王乐',
                        id: '09'
                    },
                    {
                        userName: '王乐',
                        id: '10'
                    },
                    {
                        userName: '王乐',
                        id: '11'
                    }
                ]
            },
            {
                title: '分组1',
                list: [
                    {
                        userName: '王乐',
                        id: '12'
                    },
                    {
                        userName: '王乐乐',
                        id: '13'
                    },
                    {
                        userName: '欧阳林',
                        id: '14'
                    },
                    {
                        userName: '王乐',
                        id: '15'
                    },
                    {
                        userName: '王乐',
                        id: '16'
                    },
                    {
                        userName: '王乐',
                        id: '17'
                    }
                ]
            }
        ];
        const activeStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
        const { nowIndex } = this.state;
        return (
            <div id='chatContact' className='contact-slider-wrapper'>
                <div className='search-container'>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 225 }}
                        size="small"
                    />
                    <div className='add-icon'>+</div>
                </div>
                <Scrollbars>
                    <div className='slider-item' onClick={this.addFriend} style={{borderBottom: '1px solid #ddd'}}>
                        <div className='icon-wrapper'>
                            <i style={{fontSize: '34px', color: '#fff'}} className='iconfont icon-custom-user' />
                        </div>
                        {/* <Avatar shape="square" size="large"><icon style={{fontSize: '34px'}} className='iconfont icon-lianxiren' /></Avatar> */}
                        <span className='slider-name'>新的朋友</span>
                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='item-list' key={index}>
                                    <span className='slider-title'>{ item.title }</span>
                                    {
                                        item.list.map((ite, idx) => {
                                            return (
                                                <div className='slider-item' style={ nowIndex === ite.id ? activeStyle : null } key={idx} onClick={() => {this.changeCurrent(ite)}}>
                                                    <Avatar shape="square" size="large">{ ite.userName }</Avatar>
                                                    <span className='slider-name'>{ ite.userName }</span>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            )
                        })
                    }
                </Scrollbars>
            </div>
        )
    }
}