import { AnyAction, Dispatch } from "@reduxjs/toolkit";

import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = (
  email: string,
  password: string,
  displayName: string | undefined | any
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(checkingCredentials());

    const { ok, uid, errorMessage } = await registerUserWithEmailPassword(
      email,
      password,
      displayName
    );

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email }));
  };
};

export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(checkingCredentials());

    const resp = await loginWithEmailPassword(email, password);

    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startLogout = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
