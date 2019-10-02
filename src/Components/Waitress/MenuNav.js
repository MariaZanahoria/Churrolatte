import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Menu.css';
import menuChurros from '../Menu';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { subCategory: [], selectedItem: {} }
    }

    render() {
        return <div>
            <ul className='nav'>
                {menuChurros.categories.map((item, index) => {
                    { console.log(item) }
                    return <li className='block'>
                        <button 
                            key={item.key}
                            onClick={() => this.setState({ subCategory: item.subcategories })}>
                            {item.name}
                        </button>
                    </li>
                })}
            </ul>
            <div>
                {console.log(this.state.subCateory)}
                {this.state.subCategory ?
                    this.state.subCategory.map((item, index) => {
                        return <li className='list'>
                            <img className='image' src={item.url}></img>
                            <h6 className='form' key={item.key}>
                                {item.name}
                            </h6>
                            <p>${item.price}</p>
                            <button onClick={() => this.setState({ selectedItem: item })}>
                                Ordenar
                            </button>
                        </li>
                    })
                    : null
                }
            </div>
            <div>
                {console.log(this.state.selectedItem)}
                <img src={this.state.selectedItem.url}></img>
            </div>
        </div>
    }
}

export default Menu;