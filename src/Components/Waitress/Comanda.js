import React, { Component } from 'react';

class Comanda extends Component {

  render() {
    const { dishName, dishPrice } = this.props;

    return (
      <div>
        <p>Number of table</p>
        <input type="text"></input>
        <div>
          <ul>

            {this.props.order.map((item, index) =>
              <li>{item.name} - {item.price}
                <button onClick={() => this.props.removeValuesMethod(index)}> - </button>
              </li>
            )}
          </ul>
          <p>Total: {this.props.total}</p>
        </div>
       </div>
    );
  }
}

export default Comanda;