import React, {Component} from 'react';
import ComponentBox from '../ComponentBox/ComponentBox';

class OptionsBox extends Component{
    render() {
        const listHead = Object.keys(this.props.features).map((item,idx)=>
            <h3 key={idx}>{item}</h3>);
        console.log(listHead)
        return(
            <div>
                {listHead}
                <ul>
                    <ComponentBox 
                        features={this.props.features}
                        key={this.props.key}
                        listHead={listHead}
                    />
                </ul>
            </div>
        )}
}
export default OptionsBox;