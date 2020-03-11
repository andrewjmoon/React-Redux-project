import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAddQuestion } from '../actions/Shared';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 200
  },
  card: {
    width: '80%',
    height: '200px',
    margin: '0 auto',
    marginTop: '150px',
    textAlign: 'center',
    backgroundColor: 'lightblue'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  title2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

const NewQuestion = (props, { history }) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const dispatch = useDispatch();
  const handleOptionOneChange = e => {
    e.preventDefault();
    setOptionOne(e.target.value);
  };

  const handleOptionTwoChange = e => {
    e.preventDefault();
    setOptionTwo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo)).then(
      props.history.push('/')
    );
  };

  const classes = useStyles();

  return (
    <div className="App">
      <h1 style={{ paddingTop: '30px' }}>Would You Rather</h1>
      <h3>
        Please enter a question in each of the two options and then press the
        add question below.
      </h3>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Add Questions:
          </Typography>
          <form onSubmit={handleSubmit} className={classes.container}>
            <TextField
              id="multiline-flexible"
              label="Option One"
              multiline
              rowsMax="4"
              value={optionOne}
              onChange={handleOptionOneChange}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="multiline-flexible"
              label="Option Two"
              multiline
              rowsMax="4"
              value={optionTwo}
              onChange={handleOptionTwoChange}
              className={classes.textField}
              margin="normal"
            />
            <Button
              color="primary"
              disabled={optionOne === '' || optionTwo === ''}
              type="submit"
            >
              <p className={classes.title2}>ADD QUESTION</p>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewQuestion;
