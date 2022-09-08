export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated",
  uid: "123456",
  email: "alex@alex.es",
  displayName: null,
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "123456",
  email: "alex@alex.es",
  displayName: null,
};
