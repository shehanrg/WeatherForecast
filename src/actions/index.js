import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './Types';

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => loginUserSuccess(dispatch, user))
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            loginUserFail(dispatch);
          }
          firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then((user) => loginUserSuccess(dispatch, user))
              .then(() => loginUserFail(dispatch));
        });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};
