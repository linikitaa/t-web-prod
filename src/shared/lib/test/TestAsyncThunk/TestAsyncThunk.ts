import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import RejectedValue = jest.RejectedValue;
import axios, { AxiosStatic } from "axios";

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const res = await action(this.dispatch, this.getState, undefined);
    return res;
  }
}
