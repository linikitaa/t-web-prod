import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "shared/api/instance";
import { Profile } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { selectProfileData } from "entities/Profile";
import { selectProfileForm } from "entities/Profile/model/selectors/selectProfileForm";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const formData = selectProfileForm(getState());
  try {
    const res = await instance.put<Profile>("/profile", formData);
    if (!res.data) {
      throw new Error("No data received");
    }
    return res.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
