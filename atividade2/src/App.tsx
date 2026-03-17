import AddHabitForm from "./components/AddHabitForm"
import HabitList from "./components/HabitList"
import { Provider } from "react-redux"
import { store } from "./app/store"

function App() {

  return (

    <Provider store={store}>

      <div className="container">

        <h1>Controle de Hábitos Diários</h1>

        <AddHabitForm />

        <HabitList />

      </div>

    </Provider>

  )
}

export default App
