import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Tables from './Components/Waitress/Tables';

class Rutas extends Component {
    render() {
        return (
            <div>
                <Router>
                  <header className="App-header">
                    <ul className ='navRouter'>
                        <li><NavLink to = '/mesas'>Mesas</NavLink></li>
                        <li><NavLink to = '/nueva-orden'>Nueva Orden</NavLink></li>
                        <li><NavLink to = '/estatus-de-orden'>Estatus de Orden</NavLink></li>
                    </ul>
                  </header>
                  <Route path="/mesas" component={Tables} />
                  <Route path="/nueva-orden" />
                  <Route path="/estatus-de-orden" />
                </Router>
                
                <p>'Hola mundo'</p>
            </div>
        )
    }
}

export default Rutas;