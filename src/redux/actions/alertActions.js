import { SET_ALERT_MESSAGE } from './actionTypes/alertTypes';

export const setAlert = (message, type) => {
  return {
    type: SET_ALERT_MESSAGE,
    message,
    type,
  };
};
