import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { login, addUser } from '../store/actions/user';
import { addPlayer } from '../store/actions/roster';

// Components
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Register from './Register/Register';
import RosterList from '../containers/RosterList/RosterList';
import PlayerForm from './PlayerForm/PlayerForm';
import Footer from './Footer/Footer';

const App = (props) => {
  const { errors, user, login, addPlayer, addUser, history, location } = props;
  return (
    <div>
      <Header history={history} />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
            <Switch location={location} >
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" render={ props => <Login errors={errors} login={login} { ...props } /> } />
              <Route exact path="/register" render={ props => <Register user={user} errors={errors} addUser={addUser} { ...props } />} />
              <Route exact path="/roster" component={RosterList} />
              <Route exact path="/players/new" render={ props => <PlayerForm errors={errors} addPlayer={addPlayer} {...props} />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      <Footer />
    </div>
  );
}

function mapStateToProps(reduxState) { 
  return {
    user: reduxState.user,
    errors: reduxState.errors,
  };
};

export default withRouter(connect(mapStateToProps, { login, addPlayer, addUser })(App));
