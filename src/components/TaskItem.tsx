import { useState } from "react"
import {MdEdit, MdDelete} from "react-icons/md"

import { Modal } from "./Modal"

export type TaskProps = {
  id: number
  titulo: string
  date: string
  checked: boolean
}

type Props = { 
  task: TaskProps
  onDelete: (id: number) => void
  handleToggleTask: (id: number) => void
  handleEditTask: (id: number, newTitle: string) => void
}

export function TaskItem({ task, onDelete, handleToggleTask, handleEditTask }: Props) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(task.checked)

  function handleToggleChecked() {
    setIsChecked(!isChecked)
    handleToggleTask(task.id)
  }

  function handleOpenModal() {
    setIsEditModalOpen(true)
  }

  function handleCloseModal() {
    setIsEditModalOpen(false)
  }

  function onEditTask(id: number, newTitle: string) {
    handleEditTask(id, newTitle)
  }

  return (
    <div className="flex justify-between bg-pampas-50 rounded-md px-3 py-4 items-center mb-3">
      <div className="flex items-center">
        <input
          onChange={handleToggleChecked}
          className="h-8 w-8 accent-primary"
          type="checkbox"
          checked={isChecked}
        />

        <div className="flex flex-col ml-2">
          <strong className="font-medium text-pampas-900 text-lg leading-tight">{task.titulo}</strong>
          <time className="text-pampas-500 text-sm">{task.date}</time>
        </div>
      </div>

      <div>
          <button onClick={handleOpenModal} className="bg-pampas-300 p-2 rounded">
            <MdEdit size={18} />
          </button>

          <button onClick={() => onDelete(task.id)} className="bg-pampas-300 p-2 rounded ml-2">
            <MdDelete size={18} />
          </button>
      </div>

      <Modal isOpen={isEditModalOpen} onClose={handleCloseModal} onEdit={onEditTask} taskId={task.id} />
    </div>
  )
}