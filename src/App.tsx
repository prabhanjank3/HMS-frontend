import NewAppointment from "./components/appointments/new/NewAppointment";
import User from "./components/users/New/index";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/privateRoutes";
import Login from "./components/auth/login";
import withAuthorized from "./components/shared/hoc/withAuthorized";
import withOverlay from "./components/shared/hoc/withOverlay";

export default function App() {
  let isAuthorized = true;
  let isLoading = false;

  const NewAppointmentHoc = withOverlay(withAuthorized(NewAppointment));
  return (
    <BrowserRouter>
      <div style={{ margin: "20px" }}>
        <Routes>
          <Route
            path="/appointment/new"
            element={
              <PrivateRoute>
                <NewAppointmentHoc
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
