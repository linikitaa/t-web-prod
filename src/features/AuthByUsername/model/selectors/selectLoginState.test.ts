import { DeepPartial } from "react-hook-form";
import { selectLoginState } from "features/AuthByUsername/model/selectors/selectLoginState";
import { StateSchema } from "app/providers/StoreProvider";

describe("selectLoginState.test", () => {
  test("should return the login state", () => {
    let state: DeepPartial<StateSchema>;
    state = {
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
