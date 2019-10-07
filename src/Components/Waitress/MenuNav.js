import React, { Component } from "react";
import "./Menu.css";
import menuChurros from "../Menu";
import Comanda from "./Comanda";
import Axios from 'axios';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: [],
      selectedItem: [],
      total: 0
    };
  }
  componentDidMount() {
    Axios.get('https://churro-latte.herokuapp.com/products')
    .then((res) =>{
        console.log(res)
        const data = [];
        const menuChurros = () => {
            res.data.map((item) =>{
              data.push(item)
              console.log(data);
            });
            return data
        }
        menuChurros()
        this.setState({
            subCategory: data.category
        })
    })
  }
  addProduct = () => {};

  render() {
    console.log(this.state.selectedItem)
    const command = this.state;
    console.log(command);
    
    let total = this.state.name + this.state.price;
    return (
      <div>
        <ul className="nav">
         <button>
             
         </button>
        </ul>
        </div>
      
    );
  }
}

export default Menu;






/*import React, { Component } from "react";
import "./Menu.css";
import menuChurros from "../Menu";
import Comanda from "./Comanda";
import Axios from 'axios';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: [],
      selectedItem: [],
      total: 0
    };
  }
  componentDidMount() {
    Axios.get('https://churro-latte.herokuapp.com/products')
    .then((res) =>{
        console.log(res)
        const data = res.data.category
        console.log(data)
        this.setState({
             data
            
        })
    })
  }
  addProduct = () => {};

  render() {
    
    let total = this.state.name + this.state.price;
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
                          total
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

          </div>
        </div>
        
      </div>
    );
  }
}

export default Menu;*/
