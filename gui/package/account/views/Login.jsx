import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'antd';
import {ipcMsgRenderer, windowID} from '../../../utils/ipcMsg';
import IconFont from '../../../components/IconFont';
import InputGroupLogin from '../../../components/InputGroupLogin';
import CanvasBanner from '../../../components/CanvasBanner';
import {login} from '../services';

import styles from '../stylesheets/Login.less';

const accountList = [
    {
        account: "903949",
        name: "陈明亮",
        image: "http://pic1.win4000.com/pic/2/5c/3b41f7bb5c.jpg"
    },
    {
        account: "444067326",
        name: "本拉登",
        image: "http://pic1.win4000.com/pic/2/5c/7fe6fb0809.jpg"
    },
    {
        account: "616028858",
        name: "一直很贵，除了今天",
        image: "http://pic1.win4000.com/pic/6/c2/4f2c91fee0.jpg"
    },
    {
        account: "124458019",
        name: "熊高",
        image: "http://pic1.win4000.com/pic/6/c2/269225b7eb.jpg"
    },
];

export default class Login extends React.Component {

    static propTypes = {
        electron: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            isShowErrorTip: false,
            password: '',
            username: '',
            image: accountList[0].image,
            isSetup: false
        }
    }

    componentDidMount() {
        CanvasBanner();
    }

    componentWillReceiveProps(nextProps) {
        const {electron} = nextProps;
        if (electron.action === 'login' && electron.state)
            ipcMsgRenderer.showWindow(windowID.main);
        else {
            this.setState({isShowErrorTip: !electron.state});
            setTimeout(() => {
                this.setState({isShowErrorTip: electron.state});
            }, 3000);
        }
    }

    minimize = () => {
        const {minimize} = this.props;
        minimize ? minimize : ipcMsgRenderer.minWindow(windowID.account);
    };

    close = () => {
        const {close} = this.props;
        close ? close : ipcMsgRenderer.closeWindow(windowID.account);
    };

    setup = (value) => {
        this.setState({isSetup: value});
    };

    handleOnPopupVisibleChange(popupVisible) {
        if (popupVisible) {
            const height = (accountList.length - 2) * 25 + 360;
            ipcMsgRenderer.resizeWindow(windowID.account.concat([450, height]));
        } else {
            ipcMsgRenderer.resizeWindow(windowID.account.concat([450, 351]));
        }
    }

    handleOnSelect = (key) => {
        this.setState({
            image: accountList[key].image
        });
    }

    render() {
        const {image, isSetup, isShowErrorTip} = this.state;
        return (
            <div className={styles[isSetup ? 'window-rotate' : 'window']}>
                <div>
                    <div className={styles['login']}>
                        <canvas id="canvas" className={styles['login-canvas']} width={430} height={183}></canvas>
                        <div className={styles['login-upper']}>
                            <div className={styles['login-upper-operate-icon']}>
                        <span className={styles['login-upper-operate-icon-setup']}
                              onClick={this.setup.bind(null, true)}>
                           <IconFont type="electron-setup"/>
                        </span>
                                <span className={styles['login-upper-operate-icon-minus']} onClick={this.minimize}>
                           <IconFont type="electron-minus"/>
                        </span>
                                <span className={styles['login-upper-operate-icon-close']} onClick={this.close}>
                           <IconFont type="electron-close"/>
                        </span>
                            </div>
                        </div>
                        <div className={styles['login-lower']}>
                            <div className={styles['login-lower-input-group-login']}>
                                <div>
                                    <img src={image}/>
                                </div>
                                <InputGroupLogin data={accountList}
                                                 onPopupVisibleChange={this.handleOnPopupVisibleChange}
                                                 onSelect={this.handleOnSelect}
                                />
                                <div>
                                    <a>注册账号</a>
                                    <a>找回密码</a>
                                </div>
                            </div>
                            <Button className={styles['login-lower-button']} type="primary">登&nbsp;&nbsp;录</Button>
                        </div>
                    </div>
                    <div className={styles['setup']}>
                        <span>https://github.com/chenlizan/electron-react-client</span>
                        <Button onClick={this.setup.bind(null, false)}>
                            <Icon type="left"/>Go back
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}