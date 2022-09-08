import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { demoUser } from "./fixtures/authFixtures";
import { checkingAuthentication, startGoogleSignIn } from "./thunks";

jest.mock("../../firebase/providers");

describe("AuthThunks tests", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("Should initiate checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn should call checkingCredentials + login", async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn should call checkingCredentials and logout throw Error", async () => {
    const loginData = { ok: false, errorMessage: "Google throw error" };
    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
