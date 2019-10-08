import React, { Component } from "react";
import "./Menu.css";
import Axios from 'axios';

export default class MenuNav extends React.Component {
    state = {
        categories: [],
        products: []
    }

    categories = ["churros","malteadas", "chocolate caliente", "bebidas frias", "helado frito", "paquetes", "extras"]

    componentDidMount() {
        Axios.get(`https://churro-latte.herokuapp.com/products`)
            .then(res => {
                const products = res.data;
                let categories = [];
                let category = {};
                let i;

                for (i = 0; i < this.categories.length; i++){
                    category.name = this.categories[i]
                    category.products = products.filter((products)=> {
                       return products.category===this.categories[i]
                    })
                    categories.push(category)
                } 

                this.setState({ categories });
            })
    }

    render() {
        return (
            <div>
                {this.state.categories.map((item, id) =>{
                    return (
                        <li className="block" >
                        <button key={id}
                          onClick={() => this.setState({categories: item.products})}>
                          {item.name}
                        </button>
                      </li>
                    )

                })}
            </div>
        )
    }
}