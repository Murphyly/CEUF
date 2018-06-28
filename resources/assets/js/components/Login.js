/* Core */
import React, { Component } from 'react';
/* Helpers */
import { Link, Redirect } from 'react-router-dom';


export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  submit = (e) => {
    e.preventDefault();
    //@TODO: Chamar API de cadastro aqui
    this.props.login(this.state.username, this.state.password);
  }

  onInputUserNameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onInputPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.submit}>
          <fieldset className="form-container">

            <legend className="login-legend">FAÇA SEU LOGIN</legend>

            <div className="form-items-container">

              <label htmlFor="username" className="username-label">Nome</label>
              <input
                type="text"
                id="username"
                onChange={this.onInputUserNameChange}
              />

              <label htmlFor="password" className="password-label">Senha</label>
              <input
                type="password"
                id="password"
                onChange={this.onInputPasswordChange}
              />

              <button type="submit" className="btn-submit-form">Submit</button>

              <p className="link-to-register-text">
                Não tem conta?
                Registre-se
              </p>

            </div>

          </fieldset>
        </form>
      </div>
    )
  }
}

