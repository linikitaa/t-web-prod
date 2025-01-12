import axios from "axios";
import { userActions } from "entities/User";
import { loginByUsername } from "features/AuthByUsername";
import { instance } from "shared/api/instance";

jest.mock("axios");
jest.mock("shared/api/instance", () => ({
  instance: {
    post: jest.fn(),
  },
}));

const mockedAxios = jest.mocked(axios, { shallow: true });
const mockedInstance = jest.mocked(instance);

describe("loginByUsername.test", () => {
  beforeEach(() => {
    mockedInstance.post.mockClear();
  });

  test("success login", async () => {
    const userValue = { username: "123", id: "1" };
    mockedInstance.post.mockResolvedValueOnce({ data: userValue });

    const dispatch = jest.fn();
    const thunk = loginByUsername({ username: "123", password: "123" });
    const result = await thunk(dispatch, () => ({}), undefined);

    expect(mockedInstance.post).toHaveBeenCalledWith("/login", {
      username: "123",
      password: "123",
    });
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedInstance.post.mockRejectedValueOnce(new Error("Ошибка"));

    const dispatch = jest.fn();
    const thunk = loginByUsername({ username: "123", password: "123" });
    const result = await thunk(dispatch, () => ({}), undefined);

    expect(mockedInstance.post).toHaveBeenCalledWith("/login", {
      username: "123",
      password: "123",
    });
    expect(dispatch).not.toHaveBeenCalledWith(
      userActions.setAuthData(expect.anything()),
    );
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Ошибка");
  });

  test("instance.post is called", () => {
    mockedInstance.post.mockResolvedValueOnce({});
    instance.post("/test", { data: "test" });
    expect(mockedInstance.post).toHaveBeenCalledWith("/test", { data: "test" });
  });
});
