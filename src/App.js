import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';
import Header from './Header/Header';
import OptionsBox from './OptionsBox/OptionsBox';
import ComponentOptions from './ComponentOptions/ComponentOptions';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
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
      }}
    }
  };

  updateFeature = (feature, newValue) => {
    console.log(newValue)
    const selectedItem = Object.assign({}, this.state.selected);
    selectedItem[feature] = newValue;
    this.setState({
      selected: selectedItem
    })
    console.log(selectedItem)
    this.render()
  };

  componentDidMount() {
    
  }


  componentWillUnmount() {
    
  }

  render() {


    return (
      <div className="App">
        <Header />
        <main>
        <OptionsBox
              features={this.props.features}
              selected={this.state.selected}
              handleUpdate={(feature,newValue) => this.updateFeature(feature,newValue)}
            />
        <ComponentOptions 
                        features={this.props.features}
                        selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;