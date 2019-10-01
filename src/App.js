import React from 'react';
import './App.css';
import Routes from './Router';

function App() {
  return (
    <div className="App">
      <header>
          <Routes/>
      </header>
    </div>
  );
}

export default App;

/*import React, {Component} from 'react';
import './App.css';
import Routes from './Router';
import Axios from 'axios';
import Login from './Components/LoginForm/Login';

class App extends Component {
  state = {
    repos:null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.userName.value;
    if(user){
      Axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({repos});
      })
    }else return;
  }
  render(){
  return (
    <div className="App">
      <header>
          <Login getUser={this.getUser}/>
          {this.state.repos? <p>Number of repos:{this.state.repos}</p>:
          <p>Please enter a userName</p>}
      </header>
    </div>
  )};
}

export default App;*/