import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, uid } = result.user;

    return {
      ok: true,
      //User info
      displayName,
      email,
      uid,
    };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
      email,
    };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage: "Already registered",
    };
  }
};

export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, displayName } = resp.user;
    return {
      ok: true,
      uid,
      displayName,
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: "User not found",
    };
  }
};
