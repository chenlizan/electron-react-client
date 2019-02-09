import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu, {MenuItem} from "rc-menu";
import Trigger from 'rc-trigger';
import IconFont from '../IconFont';


function preventDefault(e) {
    e.preventDefault();
}

class Avatar extends React.PureComponent {

    static defaultProps = {
        prefixCls: 'avatar'
    };

    static propTypes = {
        prefixCls: PropTypes.string
    };

    render() {
        const {prefixCls, size, src} = this.props;

        const sizeCls = classNames({
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-base`]: size === 'base',
            [`${prefixCls}-sm`]: size === 'small',
        });

        return (
            <img className={classNames(sizeCls)} src={src}/>
        )
    }
}


export default class InputAccount extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            value: undefined,
            popupVisible: false,
            selectedKeys: ["1"]
        }
    }

    handleOnMouseEnter = ({key, domEvent}) => {
        this.setState({
            selectedKeys: [key]
        })
    };

    handleAvatarSize = (key) => {
        const {selectedKeys} = this.state;
        if (key === selectedKeys[0])
            return 'large';
        else if (key == (Number(selectedKeys[0]) + 1) || key == (Number(selectedKeys[0]) - 1))
            return 'base';
        else
            return 'small';
    };

    handleOpenClick = () => {
        const {popupVisible} = this.state;
        this.setState({
            popupVisible: !popupVisible
        });
    };

    handleOnPopupVisibleChange = (popupVisible) => {
        const {onPopupVisibleChange} = this.props;
        this.setState({
            popupVisible: popupVisible
        }, () => {
            onPopupVisibleChange(popupVisible);
        });
    };

    handleOnClick = ({key}) => {
        const {data, onSelect} = this.props;
        this.setState({
            inputValue: data[key].account,
            popupVisible: false
        }, () => {
            onSelect(key);
        });
    };

    handleDeleteClick = (index) => {
        console.log(index);
    };

    renderMenu() {
        const {data, prefixCls} = this.props;
        const {selectedKeys} = this.state;
        const element = [];
        for (let i = 0, len = data.length; i < len; i++) {
            const index = String(i);
            element.push(
                <MenuItem key={index} onMouseEnter={this.handleOnMouseEnter}>
                    <Avatar prefixCls={`${prefixCls}-account-menu-avatar`} size={this.handleAvatarSize(index)}
                            src={data[i].image}/>
                    <div className={classNames(`${prefixCls}-account-menu-info`)}>
                        {selectedKeys[0] === index ? <span>{data[i].name}</span> : null}
                        <span>{data[i].account}</span>
                    </div>
                    <div className={classNames(`${prefixCls}-account-menu-delete`)}>
                        <IconFont type="electron-close" title="删除账号信息"
                                  onClick={this.handleDeleteClick.bind(null, index)}/>
                    </div>
                </MenuItem>
            );
        }
        return (
            <Menu className={classNames(`${prefixCls}-account-menu`)}
                  selectable={false} selectedKeys={selectedKeys}
                  onClick={this.handleOnClick}>
                {element}
            </Menu>
        );
    }

    componentDidMount() {
        const {data} = this.props;
        this.setState({
            inputValue: data[0].account
        })
    }

    render() {
        const {prefixCls} = this.props;
        const {inputValue, value, popupVisible} = this.state;
        return (
            <div className={classNames(`${prefixCls}-account`)}>
                <Trigger
                    action={['click']}
                    popup={this.renderMenu()}
                    popupAlign={{
                        points: ['tc', 'bc'],
                    }}
                    popupVisible={popupVisible}
                    onPopupVisibleChange={this.handleOnPopupVisibleChange}
                    stretch='width'
                    destroyPopupOnHide
                >
                    <div className={classNames(`${prefixCls}-account-${popupVisible ? 'down' : 'up'}`)}>
                        <input defaultValue={inputValue} placeholder="PP号码/手机/邮箱"/>
                        <IconFont type="electron-down" onClick={this.handleOpenClick}/>
                    </div>
                </Trigger>
            </div>
        )
    }
}