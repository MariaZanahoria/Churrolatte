import React from "react";
import "./Menu.css";
import Axios from "axios";
import Comanda from "./Comanda";
import baseURL from "../../Constant/env"

export default class MenuNav extends React.Component {
  state = {
    categories: [],
    subCategory: [],
    itemsToOrder: []
  };

  componentDidMount() {
    Axios.get( baseURL +`/products`).then(res => {
      const products = res.data;
      let categories = [];
      let categoryNames = [];
      let i;

      //obtiene el nombre unico de cada categoria sin repetir
      for (i = 0; i < products.length; i++) {
        if (!categoryNames.includes(products[i].category))
          categoryNames.push(products[i].category);
      }
      //inicializa el objeto categorias en la forma requerida
      for (i = 0; i < categoryNames.length; i++) {
        categories.push({ name: categoryNames[i], subCategories: [] });
      }
      //llena el objeto de categorias con sus subcategorias
      for (i = 0; i < products.length; i++) {
        for (let j = 0; j < categories.length; j++) {
          if (products[i].category === categories[j].name) {
            categories[j].subCategories.push({
              name: products[i].name,
              price: products[i].price,
              url: products[i].image,
              id: products[i].id
            });
          }
        }
      }
      this.setState({ categories });
    });
  }

  orderItem = item => {
    const orderList = [...this.state.itemsToOrder];
    orderList.push(item);
    this.setState({ itemsToOrder: orderList });
  };

  render() {
    return (
      <div>
        <ul className="nav">
          {this.state.categories.map(item => {
            return (
              <li className="block">
                <button
                  key={item.key}
                  onClick={() =>
                    this.setState({ subCategory: item.subCategories })
                  }
                >
                  {item.name.toUpperCase()}
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          {this.state.subCategory
            ? this.state.subCategory.map(item => {
                return (
                  <li className="list">
                    <img className="image" src={item.url} alt=""></img>
                    <h6 className="form" key={item.key}>
                      {item.name}
                    </h6>
                    <p>{ "$ " + item.price}</p>
                    <button onClick={() => this.orderItem(item)}>
                      Ordenar
                    </button>
                  </li>
                );
              })
            : null}
        </div>
        <div>
          {this.state.itemsToOrder.length > 0 ? (
            <Comanda itemsToOrder={this.state.itemsToOrder} />
          ) : null}
        </div>
      </div>
    );
  }
}