import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/User'

export interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  ResponseData,
  loginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const res = await axios.post('http://localhost:8000/login', authData)
    if (!res.data) {
      throw new Error('No data received')
    }
    return res.data
  } catch (error) {
    console.log(error.message)
    return thunkAPI.rejectWithValue('error')
  }
})

export interface ResponseData {
  id: number
  username: string
  password: string
}
