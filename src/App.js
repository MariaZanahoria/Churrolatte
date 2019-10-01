import React from 'react';
import './App.css';
import Routes from './Router';
import Register from './Components/LoginForm/Register';
//import {BrowserRouter as Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
          <Register/>
      </header>
    </div>
  );
}

export default App;
