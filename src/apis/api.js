import { _getUsers, _getQuestions } from './_DATA';
import { receiveUsers } from '../actions/Users';
import { receiveQuestions } from '../actions/Questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, polls]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(polls));
        dispatch(hideLoading());
      }
    );
  };
}
