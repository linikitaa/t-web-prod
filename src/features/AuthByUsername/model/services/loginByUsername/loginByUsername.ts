import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { ThunkConfig } from "app/providers/StoreProvider";
import { instance } from "shared/api/instance";

export interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await instance.post("/login", authData);
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
});
