import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileSchema } from "entities/Profile";

export interface StateSchema {
  user: UserSchema;
  login: LoginSchema;
  profile: ProfileSchema;
}
