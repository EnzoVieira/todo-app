import { useState } from "react"
import ReactModal from "react-modal"

import { Button } from "./Button"

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  onSave?: (titulo: string) => void
  onEdit?: (id: number, newTitle: string) => void
  taskId?: number
}

export function Modal({ isOpen, onClose, onSave, onEdit, taskId }: IModalProps) {
  const [inputText, setInputText] = useState("")

  return (
    <ReactModal
      isOpen={isOpen}
    >
      <h2>Hello</h2>

      <form>
        <label>
          Your Task
          <input 
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Name your task"
            className="bg-pampas-300 w-full p-2 rounded"
          />
        </label>
      </form>

      <Button label="Save Task" onClick={() => {
        if (onSave) {
          onSave(inputText)
        } else if (onEdit && taskId) {
          console.log("Editar task", taskId)
          onEdit(taskId, inputText)
        }
      }} />
      <Button label="Close Modal" onClick={onClose} />
    </ReactModal>
  )
}