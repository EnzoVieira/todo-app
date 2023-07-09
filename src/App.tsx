import { useState } from "react"
import { TaskItem, TaskProps } from "./components/TaskItem"

const arr: TaskProps[] = [
  {id: 1, titulo: "Task 1", checked: true, date: "7:30 AM, 09/07/2023", status: "complete"},
  {id: 2, titulo: "Task 2", checked: true, date: "7:30 AM, 09/07/2023", status: "complete"},
  {id: 3, titulo: "Task 3", checked: false, date: "7:30 AM, 09/07/2023", status: "incomplete"},
  {id: 4, titulo: "Task 4", checked: false, date: "7:30 AM, 09/07/2023", status: "incomplete"},
]

function App() {
  const [taskList, setNewTaskList] = useState(arr)
  const [selectStatus, setSelectStatus] = useState("all")

  function onDelete(id: number) {
    const newTaskList = taskList.filter(task => task.id != id)
    setNewTaskList(newTaskList)
  }

  return (
    <div className="w-full mx-auto max-w-6xl px-4 py-10">
      {/* TITULO */}
      <h1 className="text-4xl uppercase font-bold text-center text-black">Todo app</h1>

      {/* BOTOES */}
      <div className="flex justify-between mt-10">
        <button
          className="bg-primary py-2 px-6 rounded font-medium text-white"
          onClick={() => {
            setNewTaskList([...taskList, {id: Math.random(), titulo: "Nova task", date: "", checked: false, status: "complete"}])
          }}
        >
          Add Task
        </button>

        <select onChange={(event) => setSelectStatus(event.target.value)} className="py-2 rounded font-medium w-[150px] border-2 border-black outline-primary">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      {/* LISTA */}
      <main className="bg-pampas-200 mt-4 p-4 rounded">
        <ul>
          {taskList.map((task, index) => 
            task.status == selectStatus ? (
              <li key={index}>
                <TaskItem task={task} onDelete={onDelete} />
              </li>
            ) : selectStatus == "all" ? (
              <li key={index}>
                <TaskItem task={task} onDelete={onDelete} />
              </li>
            ) : null
          )}
        </ul>
      </main>
    </div>
  )
}

export default App
