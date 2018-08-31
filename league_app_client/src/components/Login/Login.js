import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.login(this.state)
      .then(() => {
        this.props.history.push('/roster');
      })
      .catch(() => {
        return;
      });
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="login-container flex-column-center">
        <h1>Welcome Back to <i className="fas fa-bowling-ball"></i> BOWLeagues</h1>
        <form className="flex-column-center" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">
              <div className="label-text">Email</div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <div className="label-text">Password</div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <button className="btn btn-info" id="login">Login</button>
          <Link to="/">
            <button className="btn btn-info" id="home">
              <i className="fas fa-home" />
              Home
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
