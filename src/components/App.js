import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Dashboard from '../views/DashBoard';
import QuestionUnit from '../views/QuestionUnit';
import LeaderBoard from '../views/LeaderBoard';
import NewQuestion from '../views/NewQuestion';
import NavBar from './NavBar';
import Login2 from '../views/Login2';
import { handleInitialData } from '../apis/api';
import NoMatch from './NoMatch';
import Resources from '../views/Resources';
import About from '../views/About';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  function PrivateRoute({ component: Component, ...rest }) {
    const { authUser } = rest;

    return (
      <Route
        {...rest}
        render={props =>
          authUser !== null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location.pathname }
              }}
            />
          )
        }
      />
    );
  }

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Login2} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/leaderboard" exact component={LeaderBoard} />
          <PrivateRoute path="/add" exact component={NewQuestion} />
          <PrivateRoute path="/questions/:id" exact component={QuestionUnit} />
          <PrivateRoute path="/resources" component={Resources} />
          <PrivateRoute path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

function mapStateToProps({ authedUser, loggedOut }) {
  return {
    loggedOut: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
