import React, {Component} from 'react';
import ComponentBox from '../ComponentBox/ComponentBox';

class OptionsBox extends Component{
    render() {
        return(
    <ComponentBox 
        features={this.props.features}
        />

        )}
}
export default OptionsBox;