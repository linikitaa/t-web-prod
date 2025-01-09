import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const selectAuthData = (state: StateSchema) => {
  return state.user.authData
}
