import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  root: {
    width: '55%',
    marginTop: '150px',
    overflowX: 'auto',
    marginLeft: '360px'
  },
  table: {
    width: '100%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  table2: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  },
  table3: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50
  },
  avatar: {
    marginBottom: 1,
    marginLeft: 80,
    display: 'inline-block',
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

export default () => {
  const board = useSelector(({ users }) => {
    return Object.keys(users)
      .map(id => ({
        id,
        imageURL: users[id].avatarURL,
        created: users[id].questions.length,
        answered: Object.keys(users[id].answers).length
      }))
      .sort((a, b) => b.created + b.answered - (a.created + a.answered));
  });

  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ marginBottom: '60px' }}>The Leaderboard Page</h1>
      <Card className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>Rank</h2>
              </TableCell>
              <TableCell>
                <h2>User</h2>
              </TableCell>
              <TableCell>
                <h2>Questions Asked</h2>
              </TableCell>
              <TableCell>
                <h2>Questions Answered</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {board.map((user, index) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>
                    <h2>{index + 1}</h2>{' '}
                  </TableCell>
                  <TableCell>
                    <h2>{user.id}</h2>
                  </TableCell>
                  <TableCell>
                    <span className={classes.table2}>
                      {' '}
                      <h2>{user.created}</h2>{' '}
                    </span>
                    <Avatar
                      alt={user.id}
                      src={user.imageURL}
                      className={classes.avatar}
                    />
                  </TableCell>
                  <TableCell className={classes.table3}>
                    <h2>{user.answered}</h2>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
