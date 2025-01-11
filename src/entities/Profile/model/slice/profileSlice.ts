import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { loginByUsername } from "features/AuthByUsername";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action?.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
