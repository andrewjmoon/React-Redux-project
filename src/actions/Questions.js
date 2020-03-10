export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_QUESTION';

export function receiveQuestions(polls) {
  return {
    type: RECEIVE_QUESTIONS,
    polls
  };
}

export function addQuestion(poll) {
  return {
    type: ADD_QUESTION,
    poll
  };
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  };
}
