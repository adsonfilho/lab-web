import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import { addHabit, filterHabits } from '../features/habitSlice'
import { useState } from 'react'

export function HabitsSection() {
  const dispatch = useDispatch()
  const habits = useSelector((state: RootState) => state.habits.filtered)

  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState('')

  const handleAdd = () => {
    if (!nome || !categoria) return

    dispatch(addHabit({
      id: Date.now(),
      nome,
      categoria
    }))

    setNome('')
    setCategoria('')
  }

  return (
    <div style={styles.card}>
      <h2>🧠 Hábitos</h2>

      <input
        style={styles.input}
        placeholder="Nome do hábito"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />

      <select
        style={styles.input}
        value={categoria}
        onChange={e => setCategoria(e.target.value)}
      >
        <option value="">Selecione categoria</option>
        <option value="Saúde">Saúde</option>
        <option value="Estudo">Estudo</option>
        <option value="Lazer">Lazer</option>
      </select>

      <button style={styles.button} onClick={handleAdd}>
        Adicionar
      </button>

      <select
        style={styles.input}
        onChange={(e) => dispatch(filterHabits(e.target.value))}
      >
        <option value="">Filtrar</option>
        <option value="Saúde">Saúde</option>
        <option value="Estudo">Estudo</option>
        <option value="Lazer">Lazer</option>
      </select>

      <ul style={styles.list}>
        {habits.map(h => (
          <li key={h.id} style={styles.item}>
            {h.nome} - {h.categoria}
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#2196F3',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    marginBottom: '10px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  }
}