import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const store = configureStore<StateSchema>({
  reducer: {},
  // devTools: '__IS_DEV__',
})
