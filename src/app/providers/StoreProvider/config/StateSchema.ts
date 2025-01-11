import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router";

export interface StateSchema {
  user: UserSchema;
  login: LoginSchema;
  profile: ProfileSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
