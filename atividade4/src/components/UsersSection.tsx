import { useUsers } from '../hooks/useUsers'
import { useState } from 'react'

export function UsersSection() {
  const { getUsers, addUser, removeUser } = useUsers()
  const [nome, setNome] = useState('')

  const handleAdd = () => {
    if (!nome.trim()) return
    addUser(nome)
    setNome('')
  }

  return (
    <div style={styles.card}>
      <h2>👤 Usuários</h2>

      <div style={styles.inputGroup}>
        <input
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <button style={styles.button} onClick={handleAdd}>
          Adicionar
        </button>
      </div>

      <ul style={styles.list}>
        {getUsers().map((user, index) => (
          <li key={index} style={styles.item}>
            {user}
            <button
              style={styles.delete}
              onClick={() => removeUser(user)}
            >
              ✕
            </button>
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
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  },
  delete: {
    background: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    padding: '5px 10px'
  }
}