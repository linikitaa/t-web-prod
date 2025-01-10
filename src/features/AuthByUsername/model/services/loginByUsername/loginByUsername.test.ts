import axios from "axios";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Dispatch } from "react";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { userActions } from "entities/User";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("loginByUsername.test", () => {
  let dispatch: Dispatch<Dispatch<any>>;
  let getState: () => StateSchema;
  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });
  test("success login", async () => {
    const userValue = { username: "123", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByUsername({ username: "123", password: "123" });
    const res = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe("fulfilled");
    expect(res.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: "123", password: "123" });
    const res = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe("rejected");
    expect(res.payload).toBe("Неверный логин или пароль");
  });
});
