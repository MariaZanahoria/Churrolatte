import React, { Component } from 'react';
import userData from '../User';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      password: '',
      selectedOption: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  sendRequest = (event) => {
    event.preventDefault();
    userData.data[0].users.push({
      userName: this.state.name,
      passWord: this.state.password,
      userOption: this.state.selectedOption
    })
  }


  render() {
    console.log(userData)
    return (
      <div>
        <form className="login">
          <div>
            <input value={this.state.name} name='name' placeholder='Escribe tu nombre' onChange={this.handleChange} />
          </div>
          <div>
            <input value={this.state.email} type='password' name='password' placeholder='Escribe tu contraseña' onChange={this.handleChange} />
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