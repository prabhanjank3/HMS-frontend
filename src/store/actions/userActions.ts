import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "https://mdzlv4-8080.preview.csb.app";

const fetchUserDetails = createAsyncThunk(
  "user/details",
  async (id: number) => {
    const response = await axios.get(SERVER_URL + "/users/" + id);
    return response.data;
  }
);
const authenticateUser = createAsyncThunk(
  "user/authenticate",
  async ({
    role,
    email,
    password
  }: {
    role: string;
    email: string;
    password: string;
  }) => {
    const response = await axios.get(SERVER_URL + "/users/1");
    return response.data;
  }
);

export { fetchUserDetails, authenticateUser };
