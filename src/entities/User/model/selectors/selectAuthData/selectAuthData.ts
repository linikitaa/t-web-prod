import { StateSchema } from "app/providers/StoreProvider";

export const selectAuthData = (state: StateSchema) => {
  return state.user.authData;
};
