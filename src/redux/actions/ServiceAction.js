import {
  PUSH_DATA_FAILED,
  PUSH_DATA_RESET,
  PUSH_DATA_SUCCESS,
} from './actionType';

export const ServiceAction = payload => {
  return async dispatch => {
    try {
      dispatch({
        type: PUSH_DATA_RESET,
      });
      dispatch({
        type: PUSH_DATA_SUCCESS,
        payload: payload,
      });
    } catch (e) {
      dispatch({
        type: PUSH_DATA_FAILED,
        payload: e,
      });
    }
  };
};
