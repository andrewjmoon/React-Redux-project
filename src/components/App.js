import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import Dashboard from '../views/DashBoard';
import QuestionUnit from '../views/QuestionUnit';
import LeaderBoard from '../views/LeaderBoard';
import NewQuestion from '../views/NewQuestion';
import NavBar from './NavBar';
import Login from '../views/Login';
import { handleInitialData } from '../apis/api';
import NoMatch from './NoMatch';
import Resources from '../views/Resources';
import About from '../views/About';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authedUser } = useSelector(({ authedUser }) => ({
      authedUser
    }));

    return (
      <Route
        {...rest}
        render={props =>
          authedUser !== null ? (
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
  };

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Dashboard} />
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

/*
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
*/
