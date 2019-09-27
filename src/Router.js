import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Tables from './Components/Waitress/Tables';
import Menu from './Components/Waitress/Menu';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                  <header className="App-header">
                    <ul className ='navRouter'>
                        <li><img className= 'logo' alt=""/></li>
                        <li className= 'appNav'><NavLink to = '/Mesas'>Mesas</NavLink></li>
                        <li className= 'appNav'><NavLink to = '/Nueva_Orden'>Nueva Orden</NavLink></li>
                        <li className= 'appNav'><NavLink to = '/Estatus_de_Orden'>Estatus de Orden</NavLink></li>
                    </ul>
                  </header>
                  <Route path="/Mesas" component={Tables}/>
                  <Route path="/Nueva_Orden" component={Menu} />
                  <Route path="/Estatus_de_Orden" />
                </Router>

            </div>
        )
    }
}

export default Routes;