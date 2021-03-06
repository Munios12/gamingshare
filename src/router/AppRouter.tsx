import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { LoginSample } from "../components/login/LoginSample";
import { FirebaseAuth } from "../firebase/config";
import { MainAppRoutes } from "../main-app/routes/MainAppRoutes";
import { login, logout } from "../store/auth/authSlice";
import { CheckingAuth } from "../ui/components/CheckingAuth";

export const AppRouter = () => {
  const { status } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        return dispatch(logout({}));
      }
      const { uid, email, displayName } = user;
      dispatch(login({ uid, email, displayName }));
    });
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  console.log(status);

  return (
    <Routes>
      {/* <Route index element={<LoginSample />} /> */}

      {status === "authenticated" ? (
        <Route path="/*" element={<MainAppRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* <Route path="/*" element={<MainAppRoutes />} /> */}
      {/* <Route path="/*" element={<MainAppRoutes />} /> */}
    </Routes>
  );
};
