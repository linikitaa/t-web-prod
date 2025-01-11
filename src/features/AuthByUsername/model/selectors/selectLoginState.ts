import { StateSchema } from "app/providers/StoreProvider";

export const selectLoginState = (state: StateSchema) => {
  return state?.login;
};
