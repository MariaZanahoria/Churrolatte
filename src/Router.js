import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import Tables from './Components/Waitress/Tables';
import Menu from './Components/Waitress/MenuNav';
import Login from './Components/LoginForm/Login';
import KitchenOrders from './Components/Kitchen/Orders';

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
                  <Route path="/Ingresar" component={Login}/>
                  <Route path="/Mesas" component={Tables}/>
                  <Route path="/Nueva_Orden" component={Menu} />
                  <Route path="/Estatus_de_Orden" component={KitchenOrders}/>
                  <Redirect to="/Ingresar"/>
                </Router>

            </div>
        )
    }
}

export default Routes;