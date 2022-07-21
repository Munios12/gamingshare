import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../../auth/layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const registerData = {
  email: "",
  password: "",
  displayName: "",
};

// const formValidations = {
//   email: [(value: string) => value.includes("@"), "Email must have @"],
//   password: [
//     (value: string) => value.length <= 6,
//     "Pasword must have more than 6 characters",
//   ],
//   displayName: [(value: string) => value.length >= 1, "A name is required"],
// };

export const Register = () => {
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state: any) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(registerData);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(startCreatingUserWithEmailPassword(email, password, displayName));
  };

  return (
    <>
      <AuthLayout authMethod="Register">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                id="name"
                label="Name"
                type="name"
                placeholder="your name"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={displayNameValid}
                helperText={
                  displayName && displayName?.length <= 1
                    ? "Introduce a correct name"
                    : ""
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="correo@domain.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={emailValid}
                helperText={
                  email && !email?.includes("@")
                    ? "Introduce a correct email (@)"
                    : ""
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={passwordValid}
                helperText={
                  password && password?.length < 6
                    ? "Minimum 6 length characters"
                    : ""
                }
              ></TextField>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6} display={!!errorMessage ? "" : "none"}>
                <Alert severity="error"> {errorMessage}</Alert>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isCheckingAuthentication}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Register Now
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}> Already have an account ?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
