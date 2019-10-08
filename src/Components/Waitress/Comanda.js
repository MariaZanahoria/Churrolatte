import React, { Component } from "react";

class Comanda extends Component {

  calculateTotal = () => {
    let total = 0;
    for (let index = 0; index < this.props.itemsToOrder.length; index++) {
      total += this.props.itemsToOrder[index].price;
    }
    return total;
  };

  render() {
    return (
      <div>
        <p>Numero de mesa</p>
        <input type="text"></input>
        <div>
          <ul>
            {this.props.itemsToOrder.map((item, index) => {
              return (
                <li>
                  {item.name} {"$ " + item.price}
                </li>
              );
            })}
          </ul>
          <button onClick={() => {}}>Enviar pedido a cocina</button>
          <p>Total: $ {this.calculateTotal()}</p>
          <button onClick={() => {}}>Cobrar cuenta</button>
        </div>
      </div>
    );
  }
}

export default Comanda;