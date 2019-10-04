import React, { Component } from "react";
import "./Menu.css";
import menuChurros from "../Menu";
import Comanda from "./Comanda";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: [],
      selectedItem: [],
      order: []
    };
  }
  addProduct = () => {};

  render() {
    let suma = this.state.total + this.state.price;
    return (
      <div>
        <ul className="nav">
          {menuChurros.categories.map((item, key) => {
            return (
              <li className="block" key={key}>
                <button
                  key={item.key}
                  onClick={() =>
                    this.setState({ subCategory: item.subcategories })
                  }
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          {this.state.subCategory
            ? this.state.subCategory.map((item, index) => {
                return (
                  <li className="list" key={item.id}>
                    <img className="image" alt="" src={item.url}></img>
                    <h6 className="form" key={item.id}>
                      {item.name}
                    </h6>
                    <p>${item.price}</p>

                    <button
                      onClick={() =>
                        this.setState({
                          selectedItem: [...this.state.selectedItem, item],
                          suma
                        })
                      }
                      className="sendOrder"
                    >
                      Ordenar
                    </button>
                  </li>
                );
              })
            : null}
          <div>
            {console.log(...[this.state.selectedItem])}
            {this.state.selectedItem.name} {this.state.selectedItem.price}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
