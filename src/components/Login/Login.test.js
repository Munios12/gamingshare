import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/dom";
import { authSlice } from "../../store/auth/authSlice";
import { notAuthenticatedState } from "../../store/auth/fixtures/authFixtures";
import { Login } from "./Login";

const mockStartGoogleSignIn = jest.fn();

jest.mock("../../store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe("Given <Login/>", () => {
  describe("When load", () => {
    test("Should render Login component", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </Provider>
      );
    });

    test("Should call startGoogleSignIn when press google btn", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </Provider>
      );

      const googleBtn = screen.getByLabelText("google-btn");
      fireEvent.click(googleBtn);
      expect(mockStartGoogleSignIn).toHaveBeenCalled();
    });
  });
});
