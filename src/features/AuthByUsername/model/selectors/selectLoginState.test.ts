import { DeepPartial } from "react-hook-form";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { selectLoginState } from "features/AuthByUsername/model/selectors/selectLoginState";

describe("selectLoginState.test", () => {
  test("should return the login state", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: "password",
        username: "username",
        isLoading: false,
        error: null,
        rememberMe: false,
      },
    };
    expect(selectLoginState(state as StateSchema)).toEqual(state.login);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginState(state as StateSchema)).toBeUndefined();
  });
});
