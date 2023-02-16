import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserDetails, authenticateUser } from "../actions/userActions";
import User from "../../models/user";

interface UserState {
  currentUser: any;
  selectedUser: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
const initialState: UserState = {
  currentUser: null,
  selectedUser: null,
  isLoggedIn: false,
  isLoading: false,
  error: null
};

const sampleSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoggedOut(state) {
      state.currentUser = null,
      state.selectedUser = null,
      state.isLoggedIn = false,
      state.isLoading = false,
      state.error = null
    }
  },
  extraReducers(builder) {
    builder.addCase(
      fetchUserDetails.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.selectedUser = payload;
      }
    );
    builder.addCase(
      authenticateUser.fulfilled,
      (state, { payload }: PayloadAction<User[]>) => {
        if(payload.length > 0)
        {
          // To be changed. Logic to add role of user in currentUser
          state.currentUser = payload[0];
          state.isLoggedIn = true;
          state.isLoading = false;
        }
        else{
          state.error = 'No user found!'
        }
      }
    );
    builder.addCase(
      authenticateUser.pending,
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      authenticateUser.rejected,
      (state) => {
        state.error = "Something went wrong while fetching users";
        state.isLoading = false;
      }
    );
  }
});
// export actions and reducer.
export const { setUserLoggedOut } = sampleSlice.actions;
export default sampleSlice.reducer;
