import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { setAuthedUser } from '../actions/UserAuthentication';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
    paddingLeft: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigAvatar: {
    width: 20,
    height: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  margin: {
    marginBottom: 30
  },
  inputWidth: {
    width: 170
  }
}));

const Login2 = props => {
  const [userId, setUserId] = useState('');
  const [redirectToReferrer, setredirectToReferrer] = useState(false);
  const { users } = useSelector(({ users, authedUser }) => ({
    users,
    authedUser
  }));
  const classes = useStyles();

  const onUserChange = userId => {
    setUserId(userId);
  };

  const login = () => {
    props.dispatch(setAuthedUser(userId));
    setredirectToReferrer(true);
  };

  const { from } = props.location.state || {
    from: { pathname: '/dashboard' }
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography color="primary" variant="h6" style={{ marginBottom: '60px' }}>
        {' '}
        Welcome to the Would You Prefer Game.
      </Typography>
      <form>
        <FormControl>
          <InputLabel>Please choose a user</InputLabel>
          <Select
            value={userId}
            onChange={e => onUserChange(e.target.value)}
            className={classes.inputWidth}
          >
            {Object.keys(users).map(user => (
              <MenuItem key={user} value={user}>
                {users[user].name}

                <Avatar
                  alt={user.name}
                  src={users[user].avatarURL}
                  className={(classes.avatar, classes.bigAvatar)}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          color="primary"
          onClick={login}
          disabled={!userId}
          style={{ marginLeft: '50px' }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default connect()(Login2);
