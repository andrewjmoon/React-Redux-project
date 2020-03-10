import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'lightblue'
  },
  card2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'lightpink'
  },
  title: {
    marginBottom: 15,
    fontSize: 20,
    justifyContent: 'center',
    backgroundColor: 'royalblue'
  },
  pos: {
    marginBottom: 15
  }
}));

const Question = props => {
  const loadDetails = (e, id) => {
    e.preventDefault();
    props.history.push(`/questions/${id}`);
  };

  const { poll } = props;
  const classes = useStyles();
  return (
    <div className="App">
      <Card className={classes.card} onClick={e => loadDetails(e, poll.id)}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            <b>Would You Rather/Prefer</b>
          </Typography>
          <List component="nav">
            <ListItem button>
              <ListItemText
                className={classes.card2}
                primary={poll.optionOne.text}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={classes.card2}
                primary={poll.optionTwo.text}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

function mapStateToProps({ polls }, { id }) {
  return {
    poll: polls[id]
  };
}

export default withRouter(connect(mapStateToProps)(Question));
