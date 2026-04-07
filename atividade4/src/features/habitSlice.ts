import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Habit = {
  id: number
  nome: string
  categoria: string
}

const initialState = {
  habits: [] as Habit[],
  filtered: [] as Habit[]
}

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload)
      state.filtered = state.habits
    },
    removeHabit: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.filter(h => h.id !== action.payload)
      state.filtered = state.habits
    },
    filterHabits: (state, action: PayloadAction<string>) => {
      if (!action.payload) {
        state.filtered = state.habits
      } else {
        state.filtered = state.habits.filter(
          h => h.categoria === action.payload
        )
      }
    }
  }
})

export const { addHabit, removeHabit, filterHabits } = habitSlice.actions
export default habitSlice.reducer