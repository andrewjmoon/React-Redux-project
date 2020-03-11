import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div className="App">
    <h3>
      No match found. Please type in the correct url or{' '}
      <Link className="Link2" to="/login">
        {' '}
        Click here{' '}
      </Link>{' '}
      to return to the login page.
      <br />
      Thanks{' '}
    </h3>
  </div>
);

export default NoMatch;
