import React from 'react';
import { Input, Button } from 'antd';
import '../stylesheets/InputBox.css';
// import { sendGroupIm } from 'src/js/persistence/services';

const { TextArea } = Input;
class InputBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    // 输入内容
    onChange = (e) => {
        this.setState({ text: e.target.value });
    };

    // 点击按钮发送消息
    sendMsg = () => {
        console.log('send message');
        // const {
        //     speakerId,
        //     isGroupChat,
        //     handleSendIm,
        //     handleSendGroupIm
        // } = this.props;
        // const { text } = this.state;
        // if (text === '') return;
        // if (isGroupChat) {
        //     handleSendGroupIm({ target: speakerId, msg: text });
        // } else {
        //     handleSendIm({ target: speakerId, msg: text });
        // }
        // this.setState({ text: '' });
        // document.body.style.overflow = 'scroll';
        // window.scrollTo(0,5000);
    };
    // <TextArea row={4} onPressEnter={this.sendMsg} value={text} onChange={this.onChange} />

    scroll = () => {

    };

    render () {
        const { text } = this.state;
        const iconStyle = {
            fontSize: '22px',
            color: '#aaa',
            marginRight: '10px'
        }
        const voiceIcon = {
            fontSize: '22px',
            color: '#aaa',
            float: 'right',
            marginRight: '10px'
        }
        return (
            <div className='input-box' id='mainFrame-sendMessage'>
                <div className='operate-container'>
                    {/* <i style={iconStyle} className='iconfont icon-xiaolian'></i>
                    <i style={iconStyle} className='iconfont icon-wenjian'></i>
                    <i style={iconStyle} className='iconfont icon-jiandao'></i>
                    <i style={{fontSize: '20px', color: '#aaa'}} className='iconfont icon-xiaoxi1'></i>
                    <i style={voiceIcon} className='iconfont icon-voice_icon'></i> */}
                </div>
                <TextArea rows={4} onPressEnter={this.sendMsg} value={text} onChange={this.onChange} />
                <Button style={{marginBottom: '5px', marginRight: '5px'}} type='primary' onClick={this.sendMsg}>发送</Button>
            </div>
        );
    }
}

export default InputBox;
