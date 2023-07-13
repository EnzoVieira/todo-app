import { useState, useEffect } from "react"
import { TaskItem, TaskProps } from "./components/TaskItem"

import { Button } from "./components/Button"
import { Modal } from "./components/Modal"

type StatusType = "all" | "complete" | "incomplete"

const arr: TaskProps[] = [
  {id: 1, titulo: "Task 1", checked: true, date: "7:30 AM, 09/07/2023" },
  {id: 2, titulo: "Task 2", checked: true, date: "7:30 AM, 09/07/2023" },
  {id: 3, titulo: "Task 3", checked: false, date: "7:30 AM, 09/07/2023" },
  {id: 4, titulo: "Task 4", checked: false, date: "7:30 AM, 09/07/2023" },
]

function App() {
  const [taskList, setNewTaskList] = useState(arr)
  const [selectStatus, setSelectStatus] = useState<StatusType>("all")
  const [filteredTaskList, setFilteredTaskList] = useState<TaskProps[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  function onAddTask(titulo: string) {
    setNewTaskList([...taskList, { id: Math.random(), titulo, date: "7:30 AM, 09/07/2023", checked: false }])
    setIsModalOpen(false)
  }

  function onDelete(id: number) {
    const newTaskList = taskList.filter(task => task.id != id)
    setNewTaskList(newTaskList)
  }

  function handleToggleTask(id: number) {
    const newArr = taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked
        }
      }

      return task
    })

    setNewTaskList(newArr)
  }

  function handleOnEditTask(id: number, newTitle: string) {
    const newArr = taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          titulo: newTitle
        }
      }

      return task
    })

    setNewTaskList(newArr)
  }

  function filterTaskList() {
    switch (selectStatus) {
      case "complete": {
        const newArr = taskList.filter(task => task.checked)
        setFilteredTaskList(newArr)
        break
      }

      case "incomplete": {
        const newArr = taskList.filter(task => !task.checked)
        setFilteredTaskList(newArr)
        break
      }

      default: {
        setFilteredTaskList(taskList)
        break
      }
    }
  }

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  useEffect(() => {
    filterTaskList()
    // loadState()
  }, [taskList, selectStatus])

  return (
    <div className="w-full mx-auto max-w-6xl px-4 py-10">
      {/* TITULO */}
      <h1 className="text-4xl uppercase font-bold text-center text-black">Todo app</h1>

      {/* BOTOES */}
      <div className="flex justify-between mt-10">
        <Button label="Add Task" onClick={handleOpenModal} />

        <select onChange={(event) => setSelectStatus(event.target.value as StatusType)} className="py-2 rounded font-medium w-[150px] border-2 border-black outline-primary">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      {/* LISTA */}
      <main className="bg-pampas-200 mt-4 p-4 rounded">
        <ul>
          {filteredTaskList.map((task) => (
            <li key={task.id}>
              <TaskItem task={task} onDelete={onDelete} handleToggleTask={handleToggleTask} handleEditTask={handleOnEditTask} />
            </li>
          ))}
        </ul>
      </main>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSave={onAddTask} />
    </div>
  )
}

export default App
