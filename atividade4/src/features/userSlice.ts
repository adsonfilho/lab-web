import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  users: [] as string[]
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.users.push(action.payload)
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(u => u !== action.payload)
    }
  }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer