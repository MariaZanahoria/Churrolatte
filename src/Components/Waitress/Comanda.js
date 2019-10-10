import React, { Component } from "react";
import baseURL from "../../Constant/env";
import Axios from "axios";

class Comanda extends Component {

  calculateTotal = () => {
    let total = 0;
    for (let index = 0; index < this.props.itemsToOrder.length; index++) {
      total += this.props.itemsToOrder[index].price;
    }
    return total;
  };
  sendOrder = () => {
    let orderToSend = this.props.itemsToOrder
    console.log(orderToSend);
    
        Axios({ method: 'POST',
        url:  baseURL +`/orders`,
        autorizacion: localStorage.token,
        headers: { 
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify({
          name: 'orders',
          comanda: orderToSend
        })
         })
      
        }  
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
          <button onClick={() => {
           this.sendOrder()
           }}>Enviar pedido a cocina</button>
          <p>Total: $ {this.calculateTotal()}</p>
          <button onClick={() => {}}>Cobrar cuenta</button>
        </div>
      </div>
    );
  }
}

export default Comanda;