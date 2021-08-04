import React from 'react';
import { Component } from 'react';

class StrictAccess extends Component {
    render() {
        const { user } = this.props
        return (
            user.userName === 'joao' && user.password === 1234 ? <p>{`Welcome ${user.firstName}!`}</p> : alert('Access denied')
        );
    }
}

export default StrictAccess;
