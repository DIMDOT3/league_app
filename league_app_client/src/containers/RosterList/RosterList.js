import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import axios from 'axios';
import './RosterList.css';
import { getRoster, deletePlayer } from '../../store/actions/roster';

// Components
import RosterItem from '../../components/RosterItem/RosterItem';

// const baseURL = 'https://players-api.developer.alchemy.codes/api';

class RosterList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if(!this.props.currentUser.isAuthenticated) {
      this.props.history.push('/');
    } else {
    this.props.getRoster()
      .catch(() => this.props.history.push('/'));
    }
  }

  handleDelete(id) {
    this.props.deletePlayer(id)
      .then(() => {
        console.log('successfully deleted');
      });
  }

  render() {
    const { errors } = this.props;
    const rosterArray = this.props.roster.map((player, i) => (
      <CSSTransition
        key={i}
        timeout={{ enter: 300, exit: 300 }}
        classNames={'fade'}
      >
        <RosterItem
          player={player}
          key={player.id}
          handleDelete={this.handleDelete.bind(this, player.id)}
        />
      </CSSTransition>
    ));
    const leftHandedPlayers = this.props.roster.filter(player => player.handedness === 'left');
    const rightHandedPlayers = this.props.roster.filter(player => player.handedness === 'right');
    return (
      <section className="roster-list-container">
        {errors.message && (
          <div className='alert alert-danger'>{errors.message}</div>
        )}
        <h1>Roster</h1>
        <button className="btn btn-info">
          <Link to="/players/new">
            <i className="fas fa-user-plus"></i>
          </Link>
        </button>
        <div>
          <p>Total Players: {this.props.roster.length}</p>
        </div>
        <div>
          <p>Left-Handed: {leftHandedPlayers.length}</p>
        </div>
        <div>
          <p>Right-Handed: {rightHandedPlayers.length}</p>
        </div>
        {this.props.roster === 0 && (
          <div>Currently no players on roster.</div>
        )}
        <div className="roster-items-container">
          <TransitionGroup>
            {rosterArray}
          </TransitionGroup>
        </div>
      </section>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    roster: reduxState.roster,
    errors: reduxState.errors,
    currentUser: reduxState.currentUser,
  }
}

export default connect(mapStateToProps, { getRoster, deletePlayer })(RosterList);
