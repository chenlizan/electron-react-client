import React from 'react';
import WindowHeader from '../components/WindowHeader.jsx';
import Content from './Content';
import '../stylesheets/GroupDetail.css';

export default class GroupDetail extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='group-detail-wrapper'>
                <WindowHeader name='武汉react技术交流群' />
                <Content />
            </div>
        )
    }
}