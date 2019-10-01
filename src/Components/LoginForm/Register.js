import React, { Component } from 'react';
import axios from 'axios';
import BaseURL from '../../Constant/env';

class Register extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          name:'',
          email:'',
        }
    }
    handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
    }

    sendRequest = () => {
     console.log(BaseURL)   
     
     axios.post(BaseURL+ '/test',{name:'', email:''})
     .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }

  render(){
      return(
          <div>
              <form>
                <input value={this.state.name} name = 'name' placeholder='Escribe tu nombre' onChange={this.handleChange}/>
                <input value={this.state.email} name = 'email' placeholder='Escribe tu correo' onChange={this.handleChange}/>
                <button name='register' onClick={this.sendRequest} >Registrarme</button>
              </form>
          </div>
      )
  }
}
export default Register;