import React, {Component} from 'react';
import ComponentOptions from '../ComponentOptions/ComponentOptions';

class ComponentBox extends React.Component {
    render() {
        const arr = [];
        const listItem = this.props.listHead;
        const comp=this.props.features;
        console.log(comp[listItem[0].props.children].length)
        for(let i = 0; i < 2; i++){
        arr.push(comp[listItem[i].props.children].name, + ' (', + comp[listItem[i].props.children].cost)
        }
    return(
        <ul>
        <li>{arr}</li>
        <ComponentOptions 
            features={this.props.features} 
        />
        </ul>
    )}
}

export default ComponentBox;