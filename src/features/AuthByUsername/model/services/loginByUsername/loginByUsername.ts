import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  ResponseData,
  loginByUsernameProps,
  { rejectValue: string }
>(
  "login/loginByUsername",
  async (authData, { dispatch, rejectWithValue, extra }) => {
    try {
      // @ts-ignore
      const res = await extra.api.post<User>("/login", authData);
      if (!res.data) {
        throw new Error("No data received");
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
      dispatch(userActions.setAuthData(res.data));
      return res.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue("Неверный логин или пароль");
    }
  },
);

export interface ResponseData {
  id: number;
  username: string;
  password: string;
}
