import React, { Component } from 'react';
import Register from './Register'
import Axios from 'axios';
import menuData from '../../Menu.json'


/*const Login = (props) => {
    return(
        <form onSubmit={props.getUser}>
            <input type='text' name = 'userName'/>
            <button>Submit</button>
        </form>
    )
}
export default Login;*/

class Login extends Component {
  constructor(props) {
      console.log(menuData);
      
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
  componentDidMount(){
      Axios.get('https://api.github.com/users/26erika')
      .then((res) =>{
          console.log(res)
          this.setState({
              token: res
              
          })
      })
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