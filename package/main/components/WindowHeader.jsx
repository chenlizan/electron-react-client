import React from 'react';
import { Icon } from 'antd';
import '../stylesheets/WindowHeader.css';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    minimize = () => {
        console.log('minimize');
    }
    close = () => {
        console.log('close');
    }
    render () {
        const { name } = this.props;
        return (
            <div className='heade'>
                <span className='name'>{name}</span>
                <div className='icon'>
                    <Icon type='minus' onClick={this.minimize} className='Icon' />
                    <Icon type='close' onClick={this.close} className='Icon' />
                </div>
            </div>
        )
    }
}