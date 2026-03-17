import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { addHabit } from "../features/habits/habitsSlice"

export default function AddHabitForm() {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("saude")

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name) return

    dispatch(addHabit({ name, category }))

    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Nome do hábito"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="saude">Saúde</option>
        <option value="estudo">Estudo</option>
        <option value="lazer">Lazer</option>
      </select>

      <button type="submit">
        Adicionar
      </button>

    </form>
  )
}