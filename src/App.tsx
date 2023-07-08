import { TaskItem } from "./components/TaskItem"

function App() {
  return (
    <div className="w-full mx-auto max-w-6xl px-4 py-10">
      {/* TITULO */}
      <h1 className="text-4xl uppercase font-bold text-center text-black">Todo app</h1>

      {/* BOTOES */}
      <div className="flex justify-between mt-10">
        <button
          className="bg-primary py-2 px-6 rounded font-medium text-white"
          onClick={() => console.log("Apertou no botao")}
        >
          Add Task
        </button>

        <select className="py-2 rounded font-medium w-[150px] border-2 border-black outline-primary">
          <option>All</option>
          <option>Complete</option>
          <option>Incomplete</option>
        </select>
      </div>

      {/* LISTA */}
      <main className="bg-pampas-200 mt-4 p-4 rounded">
        <TaskItem titulo="Concluir trabalho da faculdade" />
        <TaskItem titulo="Outro titulo" />
        <TaskItem titulo="String" />
      </main>
    </div>
  )
}

export default App
