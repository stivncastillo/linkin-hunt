import { SET_ALERT_MESSAGE } from '../actions/actionTypes/alertTypes';

const initialState = {
  type: 'info',
  message: '',
};

function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT_MESSAGE:
      return Object.assign({}, state, {
        type: action.type,
        message: action.message,
      });
    default:
      return state;
  }
}

export { alertReducer };
