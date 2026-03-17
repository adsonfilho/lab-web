import type { Habit } from "../features/habits/HabitTypes"
import { useAppDispatch } from "../app/hooks"
import { toggleHabit, removeHabit } from "../features/habits/habitsSlice"

interface Props {
  habit: Habit
}

export default function HabitItem({ habit }: Props) {

  const dispatch = useAppDispatch()

  return (
    <li>

      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => dispatch(toggleHabit(habit.id))}
      />

      <span className={habit.completed ? "completed" : ""}>
        {habit.name} ({habit.category})
      </span>

      <button
        className="delete"
        onClick={() => dispatch(removeHabit(habit.id))}
      >
        excluir
      </button>

    </li>
  )
}

