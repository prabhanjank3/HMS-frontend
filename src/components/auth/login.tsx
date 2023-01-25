import { TextField, Box, Button, Autocomplete } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { Navigate } from "react-router-dom";
import { authenticateUser } from "../../store/actions/userActions";
import { useState } from "react";
import logo from "../../assets/logo.png";
import "./style.css";

const initialState = {
  role: "",
  email: "",
  password: ""
};

export default () => {
  const dispatch = useDispatch<any>();
  const [formState, setFormState] = useState(initialState);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const handleChange = (event: any, value = null, fieldName = null) => {
    if (fieldName && value) {
      setFormState({ ...formState, [fieldName]: value });
    } else {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value
      });
    }
  };

  const onSubmit = () => {
    dispatch(authenticateUser(formState));
  };

  return isLoggedIn ? (
    <Navigate to="/appointment/new" />
  ) : (
    <Box className="login-form-box">
      <img src={logo} alt="Logo" className="form-logo" />
      <Box component="form" noValidate sx={{ mt: 2 }}>
        <Autocomplete
          fullWidth
          onChange={(e, v) => {
            handleChange(e, v.value, "role");
          }}
          options={[
            { label: "Doctor", value: "1" },
            { label: "Patient", value: "2" }
          ]}
          // sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Role" name="role" />
          )}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={handleChange}
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
          id="password"
          autoComplete="current-password"
        />

        <Button
          onClick={onSubmit}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};
