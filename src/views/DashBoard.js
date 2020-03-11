import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Question from './Question';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100px',
    width: '55%',
    paddingLeft: '400px',
    marginTop: '20px'
  }
}));
function TabBox(props) {
  return (
    <Typography
      component="div"
      style={{
        padding: 10 * 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {props.children}
    </Typography>
  );
}

const DashBoard = props => {
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const { polls, users, authedUser } = useSelector(
    ({ polls, users, authedUser }) => ({
      polls,
      users,
      authedUser
    })
  );

  const user = users[authedUser];

  let answeredPolls = Object.keys(user.answers).sort(
    (a, b) => polls[b].timestamp - polls[a].timestamp
  );
  const unansweredPolls = Object.keys(polls)
    .filter(qid => !answeredPolls.includes(qid))
    .sort((a, b) => polls[b].timestamp - polls[a].timestamp);

  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '55%',
        marginTop: '20px'
      }}
    >
      <h1 style={{ paddingTop: '30px' }}> Dashboard</h1>
      <TabBox>
        <AppBar position="static">
          <Tabs
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            value={value}
            onChange={handleChange}
          >
            <Tab label="Unaswered Question" />
            <Tab label="Answered Question" />
          </Tabs>
        </AppBar>

        {value === 0 && (
          <TabBox>
            {unansweredPolls.map(qid => (
              <div key={qid}>
                <Question id={qid} />
              </div>
            ))}
          </TabBox>
        )}
        {value === 1 && (
          <TabBox>
            {answeredPolls.map(qid => (
              <div key={qid}>
                <Question id={qid} />
              </div>
            ))}
          </TabBox>
        )}
      </TabBox>
    </div>
  );
};

export default DashBoard;
