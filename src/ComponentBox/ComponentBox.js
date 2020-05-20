import React, {Component} from 'react';
import ComponentOptions from '../ComponentOptions/ComponentOptions';

class ComponentBox extends React.Component {
    render() {
    return(
        <ComponentOptions 
            features={this.props.features} 
        />
    )}
}

export default ComponentBox;