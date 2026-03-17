import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Habit } from "./HabitTypes"

interface HabitsState {
  habits: Habit[]
  filter: string
}

const initialState: HabitsState = {
  habits: [],
  filter: "all"
}

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {

    addHabit: (state, action: PayloadAction<{name:string, category:string}>) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        category: action.payload.category,
        completed: false
      }

      state.habits.push(newHabit)
    },

    removeHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(h => h.id !== action.payload)
    },

    toggleHabit: (state, action: PayloadAction<string>) => {
      const habit = state.habits.find(h => h.id === action.payload)

      if (habit) {
        habit.completed = !habit.completed
      }
    },

    editHabit: (state, action: PayloadAction<Habit>) => {
      const index = state.habits.findIndex(h => h.id === action.payload.id)

      if (index !== -1) {
        state.habits[index] = action.payload
      }
    },

    clearCompleted: (state) => {
      state.habits = state.habits.filter(h => !h.completed)
    },

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    }
  }
})

export const {
  addHabit,
  removeHabit,
  toggleHabit,
  editHabit,
  clearCompleted,
  setFilter
} = habitsSlice.actions

export default habitsSlice.reducer