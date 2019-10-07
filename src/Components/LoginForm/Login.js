import React, { Component } from "react";
import Register from "./Register";
import "./Login.css";
//import Axios from 'axios';

/*const Login = (props) => {
    return(
        <form onSubmit={props.getUser}>
            <input type='text' name = 'userName'/>
            <button>Submit</button>
        </form>
    )
}*/

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      password: "",
      showRegister: false
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleBackToLogin = () => {
    this.setState({ showRegister: false });
  };

  /*
  componentDidMount() {
    Axios.get('https://api.github.com/users/26erika')
    .then((res) =>{
        console.log(res)
        this.setState({
            token: res
            
        })
    })
  }*/
  // onRegisterSuccessful = () => {
  //   this .setState({ })
  // }

  render() {
    return (
      <div className="backgroundLogin">
        <div>
          {this.state.showRegister ? (
            <Register goBackToLogin={this.handleBackToLogin} />
          ) : (
            <form className="login">
              <div>
                <input
                  value={this.state.name}
                  name="name"
                  placeholder="Escribe tu Nombre"
                  onChange={this.handleChange}
                />
                <input
                  value={this.state.password}
                  type="password"
                  name="password"
                  placeholder="Escribe tu Contraseña"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button onClick={() => {}}>Ingresar</button>
                <button onClick={() => this.setState({ showRegister: true })}>
                  Registrate
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}
export default Login;
