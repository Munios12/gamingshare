import { authSlice, checkingCredentials, login, logout } from "./authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
} from "./fixtures/authFixtures";

describe("When authSlice load", () => {
  test("Should return initial state called auth", () => {
    expect(authSlice.name).toBe("auth");
    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual({
      status: "checking",
      uid: null,
      email: null,
      displayName: null,
      errorMessage: null,
    });
  });

  test("Should start authentication", () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      errorMessage: undefined,
    });
  });

  test("Should start logout with no arguments", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      errorMessage: undefined,
    });
  });

  test("Should start logout and show error message", () => {
    const errorMessage = "Wrong Credencials";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );

    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      errorMessage: errorMessage,
    });
  });

  test("Should change status as checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe("checking");
  });
});
