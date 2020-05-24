import React, {Component} from 'react';
import ItemOptions from '../ItemOptions/ItemOptions';
import slugify from 'slugify';

class OptionsBox extends Component{
  static defaultProps = {
    features:{}
  }


    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
<ItemOptions 
  itemHash={itemHash}
  feature={feature}
  item={item}
  selected={this.props.selected}
  features={this.props.features}
  handleUpdate={this.props.handleUpdate}
  />
            );
        });
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>  
          );
        });
        return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
        )
    }    
}
export default OptionsBox;