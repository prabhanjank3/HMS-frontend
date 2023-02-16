import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { Navigate } from "react-router-dom";
import { authenticateUser } from "../../store/actions/userActions";
import { useState, createRef, useRef } from "react";
import logo from "../../assets/logo.png";
import "./style.css";
import OneForm from "../forms/OneForm";
import loginFields from "../forms/fields/login";

export default () => {
  const dispatch = useDispatch<any>();
  const submitRef = useRef<HTMLAnchorElement>();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const onSubmit = (values:any) => {
    dispatch(authenticateUser(values))
  };

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Box className="login-form-box">
      <img src={logo} alt="Logo" className="form-logo" />
      <Box component="form" noValidate sx={{ mt: 2 }}>
        <OneForm ref={submitRef} fieldSet={loginFields} handleSubmit={onSubmit} 
        renderActionButtons = 
        {<Button ref={submitRef} variant="contained" fullWidth>Sign In</Button>}
         />
      </Box>
    </Box>
  );
};
