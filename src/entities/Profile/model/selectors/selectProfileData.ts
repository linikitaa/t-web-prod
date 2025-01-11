import { ProfileSchema } from "entities/Profile";

export const selectProfileData = (state: ProfileSchema) => state.data;
