import { UsersSection } from './components/UsersSection'
import { HabitsSection } from './components/HabitsSection'

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mini Dashboard</h1>

      <div style={styles.grid}>
        <UsersSection />
        <HabitsSection />
      </div>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial',
    background: '#f4f6f8',
    minHeight: '100vh',
    padding: '40px'
  },
  title: {
    textAlign: 'center' as const,
    marginBottom: '30px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  }
}

export default App