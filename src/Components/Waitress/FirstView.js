import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../App.css';

const View = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img className='logoChurro' alt='' />
            </header>
            
                <div>
                    <nav>
                        <ul>
                        Selecciona tu puesto
                            <li className='navList'>
                                <Link to="/Mesero" className='buttonAccessA'>Mesero</Link>
                            </li>
                            <li className='navList'>
                                <Link to="/Cocinero" className='buttonAccessB'>Cocinero</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            
            <div className='backgroundLogin'></div>
        </div>
    );
}
export default View;