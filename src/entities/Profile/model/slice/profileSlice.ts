import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  data: undefined,
  errors: undefined,
  isLoading: false,
  readonly: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction) => {},
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
