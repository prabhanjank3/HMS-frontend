import User from "./components/users/New/index";
import Dashboard from "./pages/dashboard/Dashboard";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/privateRoutes";
import Login from "./components/auth/login";
import withAuthorized from "./components/shared/hoc/withAuthorized";
import withOverlay from "./components/shared/hoc/withOverlay";

export default function App() {
  let isAuthorized = true;
  let isLoading = false;

  const DashboardHOC = withOverlay(withAuthorized(Dashboard));
  return (
    <BrowserRouter>
      <div style={{ margin: "20px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardHOC
                  isAuthorized={isAuthorized}
                  isLoading={isLoading}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/new"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
