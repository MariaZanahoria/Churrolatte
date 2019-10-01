import React, { Component } from 'react';
import Register from './Register'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      token: '',
      showRegister: false
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleBackToLogin = () => {
    this.setState({ showRegister: false })
  }

  // onRegisterSuccessful = () => {
  //   this .setState({ })
  // }

  render() {
    return (
      <div>
        {
          this.state.showRegister
            ? <Register
              goBackToLogin={this.handleBackToLogin}
            />
            : <form>
              <textarea value={this.state.token} name='token' placeholder='Escribe tu Token' onChange={this.handleChange} />
              <button onClick={() => { }}>Ingresar</button>
              <button onClick={() => this.setState({ showRegister: true })}>Registrate</button>
            </form>
        }

      </div>
    )
  }
}
export default Login;