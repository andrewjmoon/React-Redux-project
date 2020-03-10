import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    marginTop: '180px',
    overflowX: 'auto',
    marginLeft: '300px',
    backgroundColor: 'lightblue'
  },
  table: {
    width: '120%',
    backgroundColor: 'lightblue'
  },
  avatar: {
    margin: 10,
    paddingLeft: 10,
    display: 'block',
    width: 50,
    height: 50
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
    <div data-testid="leaderboard-view">
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Question Asked</TableCell>
              <TableCell>Question Answered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {board.map((user, index) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{index + 1} </TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <span> {user.created} </span>
                    <Avatar
                      alt={user.id}
                      src={user.imageURL}
                      className={classes.avatar}
                    />
                  </TableCell>
                  <TableCell>{user.answered}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
