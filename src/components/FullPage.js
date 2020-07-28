import React , { Component } from 'react';

import './FullPage.css' ;

class FullPage extends Component {
    render() {
        const {children} = this.props 
        return (
            <div className={`fullpage ${this.props.className || ''}`}
                style={{color: this.props.color , backgroundColor: this.props.backgroundColor}}
            >
                {children} 
            </div>
        ) 
    }
}

export default FullPage
