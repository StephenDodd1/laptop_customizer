import React, {Component} from 'react';
import OptionsBox from '../OptionsBox/OptionsBox';

class Main extends Component {
    render() {
    console.log(this.props.features);
    return(
    <OptionsBox 
        features={this.props.features}
    />
      /*  <CartBox />
            <>
            <ComponentDetails />
            <CartTotal />
            </>*/
    )}
}

export default Main;