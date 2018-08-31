import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PlayerForm.css';

const baseURL = 'https://players-api.developer.alchemy.codes/api/players';
const token = localStorage.getItem('jwtToken');

class PlayerForm extends Component {
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
    this.props.addPlayer(this.state)
      .then(() => this.props.history.push('/roster'))
      .catch(() => this.props.history.push('/players/new'));
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="player-form-container flex-column-center">
        {errors.message && (
          <div className='alert alert-danger'>{errors.message}</div>
        )}
        <h1>Add a new player.</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="flex-column-left">
            <label htmlFor="firstName">
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
            <label htmlFor="lastName">
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
            <label htmlFor="rating">
              <div className="label-text">Rating</div>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Rating"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="flex-column-left">
            <label htmlFor="handedness">
              <div className="label-text">Handedness</div>
              <input
                type="handedness"
                name="handedness"
                id="handedness"
                placeholder="Handedness"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <button className="btn btn-info">
            <i className="fas fa-user-plus"></i>
          </button>
          <button className="btn btn-info">
            <Link to="/roster">Back to Roster</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
