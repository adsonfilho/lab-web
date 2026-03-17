import { useAppSelector, useAppDispatch } from "../app/hooks"
import HabitItem from "./HabitItem"
import { clearCompleted, setFilter } from "../features/habits/habitsSlice"

export default function HabitList() {

  const { habits, filter } = useAppSelector(state => state.habits)
  const dispatch = useAppDispatch()

  const filteredHabits =
    filter === "all"
      ? habits
      : habits.filter(h => h.category === filter)

  return (
    <div>

      <div>

        <button onClick={() => dispatch(setFilter("all"))}>
          Todos
        </button>

        <button onClick={() => dispatch(setFilter("saude"))}>
          Saúde
        </button>

        <button onClick={() => dispatch(setFilter("estudo"))}>
          Estudo
        </button>

        <button onClick={() => dispatch(setFilter("lazer"))}>
          Lazer
        </button>

      </div>

      <ul>
        {filteredHabits.map(h => (
          <HabitItem key={h.id} habit={h}/>
        ))}
      </ul>

      <button
        className="clear"
        onClick={() => dispatch(clearCompleted())}
      >
        Limpar concluídos
      </button>

    </div>
  )
}