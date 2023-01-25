import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserDetails, authenticateUser } from "../actions/userActions";
import User from "../models/user";

interface UserState {
  currentUser: User | null;
  selectedUser: User | null;
  isLoggedIn?: boolean;
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
      state.isLoggedIn = false;
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
      (state, { payload }: PayloadAction<User>) => {
        state.currentUser = payload;
        state.isLoggedIn = true;
      }
    );
    builder.addCase(
      authenticateUser.pending,
      (state, { payload }: PayloadAction<User>) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      authenticateUser.rejected,
      (state, { payload }: PayloadAction<User>) => {
        state.error = "Something went wrong while fetching users";
      }
    );
  }
});
// export actions and reducer.
export const { setUserLoggedIn } = sampleSlice.actions;
export default sampleSlice.reducer;
