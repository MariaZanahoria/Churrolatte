import React from "react";
import Axios from "axios";
import baseURL from "../../Constant/env";

export default class KitchenOrders extends React.Component {
  state = {
    comanda: [],
    orderStatus: []
  };

  componentDidMount() {
    Axios.get(baseURL + `/orders`).then(res => {
      let comanda = [];
      const orders = res.data;
      for(let i=0; i<orders.length;i++){
        comanda.push(orders[i]);
      }
      this.setState({ comanda });
    });
    
  }

  render() {
    return (
      <div>
        {this.state.comanda
          ? this.state.comanda.map(item => {
              return (
                <li className="list">
                  <h6 className="form" key={item.key}>
                    {item.name}
                  </h6>
                  {
                      item.comanda.map((orderList)=>{
                          return (
                          <li className="list">
                          <p>{orderList.name}</p>
                          </li>
                          )
                      })
                  }
                  <button onClick={() => {}}>Preparando</button>
                  <button onClick={() => {}}>Listo</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}
