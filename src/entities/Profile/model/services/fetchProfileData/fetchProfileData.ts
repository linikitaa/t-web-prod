import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { instance } from "shared/api/instance";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await instance.get<Profile>("/profile");
    if (!res.data) {
      throw new Error("No data received");
    }
    return res.data;
  } catch (error) {
    console.log(error.message);
    return rejectWithValue("error");
  }
});
