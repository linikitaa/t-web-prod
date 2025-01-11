import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "entities/Profile";
import { $api } from "shared/api/api";

export const store = configureStore<StateSchema>({
  reducer: {
    user: userReducer,
    login: loginReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
  // devTools: '__IS_DEV__',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
