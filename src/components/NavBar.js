import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { unsetAuthedUser } from '../actions/UserAuthentication';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavDrawer from './NavDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = themes => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuButton2: {
    marginRight: 0
  },
  icon: {
    margin: themes.spacing * 4
  },
  avatar: {
    margin: 10,
    paddingLeft: 10
  },
  bigAvatar: {
    width: 20,
    height: 20
  },
  secondaryBar: {
    zIndex: 0
  },
  root: {
    background: 'linear-gradient(45deg, #00BFFF 20%, #000080 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  title: {
    flexGrow: 3,
    alignItems: 'center',
    color: 'black',
    textDecoration: 'none',
    fontSize: '15px'
  },
  title2: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '35px',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title3: {
    color: 'white',
    textDecoration: 'none',
    flexGrow: 0.1,
    justifyContent: 'right'
  },
  center: {
    flexGrow: 3,
    alignItems: 'center',
    color: 'white',
    underline: 'hover'
  }
});

class NavBar extends Component {
  state = {
    isOpen: false,
    drawerOpened: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleLogOut = () => {
    this.props.dispatch(unsetAuthedUser());
  };
  toggleDrawer = booleanValue => () => {
    this.setState({
      drawerOpened: booleanValue
    });
  };

  render() {
    const { authedUser, classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon className={classes.menuButton} />
            </IconButton>
            <NavDrawer
              drawerOpened={this.state.drawerOpened}
              toggleDrawer={this.toggleDrawer}
            />
            <Typography className={classes.title2} variant="h3" align="center">
              <Link className={classes.title2} to="/">
                {' '}
                <b> Would You Rather</b>
              </Link>
            </Typography>
            <Typography className={classes.title3} variant="h6" align="center">
              <Link className={classes.title3} to="/about">
                {' '}
                <b> About</b>
              </Link>
            </Typography>
            <Typography className={classes.title3} variant="h6" align="center">
              <Link className={classes.title3} to="/">
                {' '}
                <b> Home</b>
              </Link>
            </Typography>
          </Toolbar>
          <Toolbar>
            {authedUser && (
              <>
                <Typography
                  variant="caption"
                  color="inherit"
                  className={classes.title}
                >
                  Hello,{authedUser}
                </Typography>
                <Typography className={classes.title} color="inherit">
                  <Link className="Link" to="/">
                    Dashboard
                  </Link>
                </Typography>
                <Typography className={classes.title} color="inherit">
                  <Link className="Link" to="/add">
                    {' '}
                    NewQuestion{' '}
                  </Link>
                </Typography>
                <Typography color="inherit" className={classes.title}>
                  <Link className="Link" to="/leaderboard">
                    {' '}
                    LeaderBoard
                  </Link>
                </Typography>

                <Button
                  color="inherit"
                  className={classes.menuButton2}
                  onClick={this.handleLogOut}
                >
                  <Link className="Link" to="/login">
                    {' '}
                    Logout{' '}
                  </Link>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default withStyles(styles)(withRouter(connect(mapStateToProps)(NavBar)));
