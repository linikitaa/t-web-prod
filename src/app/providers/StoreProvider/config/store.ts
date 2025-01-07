import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { userReducer } from 'entities/User'
import { useDispatch } from 'react-redux'

export const store = configureStore<StateSchema>({
  reducer: {
    user: userReducer,
  },
  // devTools: '__IS_DEV__',
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
