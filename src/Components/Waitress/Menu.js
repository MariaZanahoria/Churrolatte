import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div>
               
                <Router>
                    <ul className='nav'>
                        <li className='block'><NavLink to = '/Nueva_Orden/Churros'>Churros</NavLink></li>
                        <li className='block'><NavLink to = '/Nueva_Orden/Maltedas'>Malteadas</NavLink></li>
                        <li className='block'><NavLink to = '/Nueva_Orden/Chocolate_Caliente'>Chocolate Caliente</NavLink></li>
                        <li className='block'><NavLink to = '/Nueva_Orden/Bebidas Frias'>Bebidas Frias</NavLink></li>
                        <li className='block'><NavLink to = '/Nueva_Orden/Bebidas Calientes'>Bebidas Calientes</NavLink></li>
                        <li className='block'><NavLink to = '/Nueva_Orden/Helado Frito'>Helado Frito</NavLink></li>
                        <li className='block'><NavLink to = '/Nueva_Orden/Paquetes'>Paquetes</NavLink></li>
                        <li className='block'><NavLink to = '/Nueva_Orden/Extras'>Extras</NavLink></li>

                    </ul>
                  
                  <Route path="/Nueva_Orden/Churros" />
                  <Route path="/Nueva_Orden/Maltedas" />
                  <Route path="/Nueva_Orden/Bebidas_Frias" />
                  <Route path="/Nueva_Orden/Helado_Frito" />
                  <Route path="/Nueva_Orden/Paquetes" />
                  <Route path="/Nueva_Orden/Extras" />
                </Router>
                
                
            </div>
        )
    }
}

export default Menu;