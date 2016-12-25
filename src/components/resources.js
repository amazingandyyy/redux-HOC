import React, { Component } from 'react';
import requireAuth from './require_authentication';

class Resources extends Component {
    render() {
        return (
            <div>
                hi
            </div>
        )
    }
}

export default requireAuth(Resources);