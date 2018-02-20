import React from 'react';
import GroupList from './GroupList';
import GroupDetail from './GroupDetail';

export default class GroupChat extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div style={{height: '100%', display: 'flex'}}>
                <GroupList />
                <GroupDetail />
            </div>
        )
    }
}