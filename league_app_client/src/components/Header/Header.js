import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/user';
import { removeError } from '../../store/actions/errors';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    this.props.history.listen(() => {
      this.props.removeError();
    });

    const { isAuthenticated, user } = this.props.currentUser;
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-info navbar-custom">
          <Link to="/">
            <i className="fas fa-bowling-ball"></i> BOWLeagues
          </Link>
          { isAuthenticated &&
            <div className="flex-row-end">
              <p>Hello { user.first_name }</p>
              <a onClick={this.handleLogout}>Log Out</a>
            </div>
          }
        </nav>
        {this.props.errors.message && (
          <div className='alert alert-danger message'>{this.props.errors.message}</div>
        )}
      </header>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    errors: reduxState.errors,
  };
}

export default connect(mapStateToProps, { logout, removeError })(Header);
