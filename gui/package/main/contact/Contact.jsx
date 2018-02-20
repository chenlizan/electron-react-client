import React from 'react';
import Slider from './Slider';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div style={{ height: '100%', display: 'flex' }}>
                <Slider />
                <ContactInfo />
            </div>
        );
    }
}
