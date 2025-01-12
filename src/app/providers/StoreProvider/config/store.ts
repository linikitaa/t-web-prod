import { configureStore, Reducer } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "entities/Profile";
import { instance } from "shared/api/instance";

const extraArg: ThunkExtraArg = {
  api: instance,
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: extraArg,
        },
      },
    }),
  devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
