import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./login.css";
import { AuthLayout } from "../../auth/layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { FormEvent, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import type {} from "redux-thunk/extend-redux";

export const LoginSample = () => {
  const { status, errorMessage } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  const initialFormData = {
    email: "",
    password: "",
  };

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const { email, password, onInputChange } = useForm(initialFormData);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <AuthLayout authMethod="Login">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="correo@domain.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
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
              ></TextField>
            </Grid>

            <Grid
              container
              sx={{ mt: 1 }}
              display={!!errorMessage ? "" : "none"}
            >
              <Grid item xs={12} sm={6}>
                <Alert severity="error"> {errorMessage}</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  onClick={onGoogleSignIn}
                  variant="contained"
                  fullWidth
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>GOOGLE</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create account
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
