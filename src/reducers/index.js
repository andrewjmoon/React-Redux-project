import { combineReducers } from 'redux';
import authedUser from './UserAuthentication';
import users from './Users';
import polls from './Questions';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authedUser: authedUser,
  users: users,
  polls: polls,
  loadingBar: loadingBarReducer
});
