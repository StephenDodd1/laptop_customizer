import React, {Component} from 'react';
import OptionsBox from '../OptionsBox/OptionsBox';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            selected: {
                Processor: {
                  name: '17th Generation Intel Core HB (7 Core with donut spare)',
                  cost: 700
                },
                'Operating System': {
                  name: 'Ubuntu Linux 16.04',
                  cost: 200
                },
                'Video Card': {
                  name: 'Toyota Corolla 1.5v',
                  cost: 1150.98
                },
                Display: {
                  name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                  cost: 1500
                }
              }
        }
    }
    render() {
    console.log(this.state);
    return(
        <main>
            <form className='main__form'>
                <h2>Customize your laptop</h2>
                    <OptionsBox 
                        features={this.props.features}
                        state={this.state}
                    />
            </form>
        </main>
      /*  <CartBox />
            <>
            <ComponentDetails />
            <CartTotal />
            </>*/
    )}
}

export default Main;