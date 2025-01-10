import { DeepPartial } from "react-hook-form";
import {
  loginActions,
  loginReducer,
  LoginSchema,
} from "features/AuthByUsername";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "123",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("12223")),
    ).toStrictEqual({ username: "12223" });
  });
  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "123",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("12223")),
    ).toStrictEqual({ password: "12223" });
  });
});
