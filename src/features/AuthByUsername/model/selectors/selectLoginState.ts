import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const selectLoginState = (state: StateSchema) => {
  return state?.login
}
