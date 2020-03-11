import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ul>
            <li>
              <Link className="Link" to="/about">
                {' '}
                About{' '}
              </Link>
            </li>
            <Divider />
            <br />
            <li>
              <Link className="Link" to="/login">
                {' '}
                Login Page{' '}
              </Link>
            </li>
            <Divider />

            <br />
            <li>
              <Link className="Link" to="/">
                {' '}
                Dashboard{' '}
              </Link>
            </li>
            <Divider />

            <br />
            <li>
              <Link className="Link" to="/leaderboard">
                {' '}
                LeaderBoard{' '}
              </Link>
            </li>
            <Divider />
            <br />

            <li>
              <Link className="Link" to="/add">
                {' '}
                NewQuestion{' '}
              </Link>
            </li>
            <Divider />

            <br />
            <li>
              <Link className="Link" to="/resources">
                {' '}
                Resources{' '}
              </Link>
            </li>
            <Divider />
          </ul>
        </div>
      </Drawer>
    );
  }
}
export default NavDrawer;
