import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Register from './Register'

class Login extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          token:'',
        }
    }
    handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
    }

    
  render(){
      return(
          <div>
              <form>
                <textarea value={this.state.token} name = 'token' placeholder='Escribe tu Token' onChange={this.handleChange}/>
                <button onClick >Ingresar</button>
                <button onClick={Register}>Registrate</button>
                
              </form>
          </div>
      )
  }
}
export default Login;