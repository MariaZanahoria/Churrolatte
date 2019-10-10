import React, { Component } from "react";
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
      comanda.push(orders[0]);
      console.log(comanda);
      this.setState({ comanda });
    });
    
  }

  render() {
    return (
      <div>
        {this.state.comanda
          ? this.state.comanda.map(item => {
              console.log(item.comanda)
              return (
                <li className="list">
                  <img className="image" src={item.url} alt=""></img>
                  <h6 className="form" key={item.key}>
                    {item.name}
                  </h6>
                  {
                      item.comanda.map((dd)=>{
                          return (
                          <li className="list">
                          <img className='image' src={dd.url}/>
                          <p>{dd.name}</p>
                          <p>{dd.price}</p>
                          </li>
                          )
                      })
                  }
                  <p>{"$ " + item.price}</p>
                  <button onClick={() => {}}>Preparando</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}
