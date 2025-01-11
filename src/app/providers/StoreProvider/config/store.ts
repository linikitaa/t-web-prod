import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "entities/Profile";

// const extraArg: ThunkExtraArg = {
//   api: $api,
// };

export const store = configureStore<StateSchema>({
  reducer: {
    user: userReducer,
    login: loginReducer,
    profile: profileReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: { extraArg },
  //     },
  //   }),
  // devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
