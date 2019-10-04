import React, { Component } from 'react';
import './Menu.css';
import menuChurros from '../Menu';

class Menu extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            subCategory: [],
            selectedItem: {}
        }
    }

    render() {
        const {action,ddd} = this.props
        console.log("prop: ", action)
        console.log("prop: ", ddd)
        return <div>
            <ul className='nav'>
                {menuChurros.categories.map((item, key) => {
                    return <li className='block'
                        key={key}>
                        <button
                            key={item.key}
                            onClick={() => this.setState({ subCategory: item.subcategories })}>
                            {item.name}
                        </button>
                    </li>
                })}
            </ul>
            <div>
                {this.state.subCategory ?
                    this.state.subCategory.map((item, key) => {
                        return <li className='list'
                            key={key}>
                            <img className='image' alt='' src={item.url}></img>
                            <h6 className='form' key={item.id}>
                                {item.name}
                            </h6>
                            <p>${item.price}</p>
                            <button onClick={() => this.props.action()}>a</button>
                            <button
                                onClick={() => this.props.action()}
                                className='sendOrder'>
                                Ordenar
                            </button>
                        </li>
                    })
                    : null
                }
            </div>

        </div>
    }
}

export default Menu;