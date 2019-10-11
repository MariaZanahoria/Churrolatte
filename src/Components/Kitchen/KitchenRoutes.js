import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import KitchenOrders from '../Kitchen/Orders';
import '../Waitress/WaitressRoute.css'

class KitchenRoutes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <header className="App-header">
                        <ul className='navRouter'>
                            <li><img className='logo' alt="" /></li>
                            <li className='appNav'><NavLink to='/Ordenes'>Ordenes</NavLink></li>
                            <li className='appNav'><NavLink to='/Pedidos_Completados'>Pedidos Completados</NavLink></li>
                        </ul>
                    </header>
                    <Route path="/Ordenes" component={KitchenOrders} />
                    {/* <Route path="/Pedidos_Completados" component={} /> */}
                </Router>
            </div>
        )
    }
}

export default KitchenRoutes;