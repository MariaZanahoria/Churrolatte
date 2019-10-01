import React, { Component } from 'react';
// import axios from 'axios';
// import BaseURL from '../../Constant/env';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange = (changeEvent)=> {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }


  // sendRequest = () => {
  //  console.log(BaseURL)   

  //  axios.post(BaseURL+ '/test',{name:'', email:''})
  //  .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });
  // }

  render() {
    return (
      <div>
        <form>
          <div>
            <input value={this.state.name} name='name' placeholder='Escribe tu nombre' onChange={this.handleChange} />
          </div>
          <div>
            <input value={this.state.email} name='email' placeholder='Escribe tu correo' onChange={this.handleChange} />
          </div>
          <div>
            <label>
              <input type="radio" value="waitress"
                checked={this.state.selectedOption === 'waitress'}
                onChange={this.handleOptionChange} />
              Meser@
          </label>
          </div>
          <div>
            <label>
              <input type="radio" value="cook"
                checked={this.state.selectedOption === 'cook'}
                onChange={this.handleOptionChange} />
              Cociner@
          </label>
          </div>
          <div>
            <button name='register' onClick={this.sendRequest} >Registrarme</button>
          </div>
        </form>
        <div>
          <button name='goBack' onClick={() => this.props.goBackToLogin()} >Inicia Sesion</button>
        </div>
      </div>
    )
  }
}
export default Register;