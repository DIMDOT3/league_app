import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addUser(this.state)
      .then(() => this.props.history.push('/roster'))
      .catch(() => {return;});
  }

  render() {
    return (
      <div className="register-container flex-column-center">
        <h2>Glad to have you. <br /> Lets get started!</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="flex-column-left">
            <label htmlFor="first_name">
              <div className="label-text">First Name</div>
              <input
                type="text"
                name="first_name"
                id="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="flex-column-left">
            <label htmlFor="last_name">
              <div className="label-text">Last Name</div>
              <input
                type="text"
                name="last_name"
                id="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="flex-column-left">
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
          <div className="flex-column-left">
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
          <div className="flex-column-left">
            <label htmlFor="confirm_password">
              <div className="label-text">Confirm Password</div>
              <input
                type="password"
                name="confirm_password"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <button className="btn btn-info" id="register">Register</button>
        </form>
      </div>
    );
  }
}

// Register.propTypes = {
//   history: PropTypes.object,
//   push: PropTypes.func,
// }

export default Register;
