import React, {Component} from 'react';

class ComponentBox extends React.Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
    return(
        <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
      </div>
    )}
}

export default ComponentBox;