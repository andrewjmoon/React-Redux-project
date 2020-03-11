import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveAnswer } from '../actions/Shared';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  checked: {},
  card: {
    width: '45%',
    margin: '0 auto',
    marginTop: '200px',
    textAlign: 'center',
    backgroundColor: 'lightblue'
  },
  size: {
    width: 40,
    height: 40
  },
  sizeIcon: {
    fontSize: 40
  },
  avatar: {
    margin: 10,
    justifyContent: 'center'
  },
  avatar2: {
    width: 80,
    height: 80,
    justifyContent: 'center'
  }
}));

const QuestionUnit = props => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = React.useState('');
  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.savePollAnswer(selectedOption);
  };
  const { polls, users, authedUser } = useSelector(
    ({ polls, users, authedUser }, props) => ({
      polls,
      users,
      authedUser
    })
  );

  const { id } = props.match.params;
  const poll = polls[id];

  if (typeof poll === 'undefined') {
    return {
      notFound: true
    };
  }

  const pollAuthor = users[poll.author];
  const authorURL = pollAuthor.avatarURL;
  const authorName = pollAuthor.name;
  const isOneAnswered = poll.optionOne.votes.includes(authedUser);
  const isTwoAnswered = poll.optionTwo.votes.includes(authedUser);
  const QuestionIssAnswered = isOneAnswered || isTwoAnswered;

  const percOneLength = poll.optionOne.votes.length;
  const percTwoLength = poll.optionTwo.votes.length;

  const percOne = (
    (percOneLength / (percOneLength + percTwoLength)) *
    100
  ).toFixed(2);
  const percTwo = (
    (percTwoLength / (percOneLength + percTwoLength)) *
    100
  ).toFixed(2);

  console.log(props);
  if (!poll) {
    return <Redirect to="/404" />;
  }

  const optionOneSelected = isOneAnswered
    ? { color: 'blue' }
    : { color: 'red' };
  const optionTwoSelected = !isOneAnswered
    ? { color: 'blue' }
    : { color: 'red' };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          Would You Rather
          <Avatar
            alt="image of the user"
            src={authorURL}
            className={(classes.avatar, classes.avatar2)}
          />
          <span style={{ marginBottom: '20px' }}>
            {' '}
            {authorName} wants to know:{' '}
          </span>
          {QuestionIssAnswered ? (
            <div>
              <div style={optionOneSelected}>
                <span>
                  {percOneLength} people voted for {poll.optionOne.text}{' '}
                </span>
                {`${percOne}%`}
              </div>
              <div style={optionTwoSelected}>
                <span>
                  {percTwoLength} people voted for {poll.optionTwo.text}{' '}
                </span>
                {`${percTwo}%`}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="Questions"
                  name="Questions"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="optionOne"
                    control={<Radio />}
                    label={poll.optionOne.text}
                  />
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={poll.optionTwo.text}
                  />
                </RadioGroup>
              </FormControl>
              <Button disabled={selectedOption === ''} type="submit">
                Submit
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;
  return {
    savePollAnswer: answer => {
      dispatch(handleSaveAnswer(id, answer));
    }
  };
}

export default connect(undefined, mapDispatchToProps)(QuestionUnit);
