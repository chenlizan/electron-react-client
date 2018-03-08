import React from 'react';
import {Icon, Input, Avatar} from 'antd';
import {Scrollbars} from 'react-custom-scrollbars';
import {getAllFriend} from "../../services/index";
import '../../stylesheets/Slider.css';

const {Search} = Input;
export default class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowIndex: 0,
            data: []
        }
    }

    componentWillMount() {
        getAllFriend()
            .then(data => {
                this.setState({data: data})
            })
    }

    addFriend = () => {
        console.log('addFriend')
    };

    changeCurrent = (e) => {
        const {id} = e.currentTarget;
        this.setState({
            nowIndex: id
        });
        console.log(id);
    };

    render() {
        const activeStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        };
        const {nowIndex, data} = this.state;
        return (
            <div id='chatContact' className='contact-slider-wrapper'>
                <div className='search-container'>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{width: 225}}
                        size="small"
                    />
                    <div className='add-icon'>+</div>
                </div>
                <Scrollbars>
                    <div className='slider-item' onClick={this.addFriend} style={{borderBottom: '1px solid #ddd'}}>
                        <div className='icon-wrapper'>
                            <i style={{fontSize: '34px', color: '#fff'}} className='iconfont icon-custom-user'/>
                        </div>
                        {/* <Avatar shape="square" size="large"><icon style={{fontSize: '34px'}} className='iconfont icon-lianxiren' /></Avatar> */}
                        <span className='slider-name'>新的朋友</span>
                    </div>
                    {
                        data.map((ite, idx) => {
                            return (
                                <div className='slider-item' style={nowIndex === ite.id ? activeStyle : null}
                                     id={ite.id} key={idx} onClick={this.changeCurrent}>
                                    <Avatar shape="square" size="large">{ite.note || ite.nickName}</Avatar>
                                    <span className='slider-name'>{ite.note || ite.nickName}</span>
                                </div>
                            )
                        })
                    }
                </Scrollbars>
            </div>
        )
    }
}
