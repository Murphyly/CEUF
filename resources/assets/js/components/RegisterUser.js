/* Core */
import React, { Component } from 'react';

export default class RegisterUser extends Component {
  state = {
    username: '',
    password: '',
  }

  submit = e => {
    e.preventDefault();
    this.props.registerUser(this.state.username, this.state.password);
  }

  inputRegisterUserNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  inputRegisterPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div>
        <form onSubmit={this.submit}>
          <fieldset>

            <legend className="register-user-legend">
              CRIE SUA CONTA
          </legend>

            <div className="register-user-items-container">
              <label htmlFor="username" className="username">
                NOME
            </label>
              <input
                type="text"
                id="username"
                onChange={this.inputRegisterUserNameChange}
              />

              <label htmlFor="password" className="password">
                SENHA
            </label>
              <input
                type="password"
                id="password"
                onChange={this.inputRegisterPasswordChange}
              />

              <button type="submit" className="btn-submit-form">
                Enviar
            </button>

              <p className="link-to-register-text">
                Já tem uma conta? Faça o login
              </p>

            </div>

          </fieldset>
        </form>
      </div>
    )
  }
}
