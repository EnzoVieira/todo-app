import {MdEdit, MdDelete} from "react-icons/md"

export type TaskProps = {
  id: number
  titulo: string
  date: string
  checked: boolean
  status: "complete" | "incomplete"
}

type Props = { 
  task: TaskProps
  onDelete: (id: number) => void
}

export function TaskItem({ task, onDelete }: Props) {
  return (
    <div className="flex justify-between bg-pampas-50 rounded-md px-3 py-4 items-center mb-3">
      <div className="flex items-center">
        <input
          onChange={() => console.log("input")}
          className="h-8 w-8 accent-primary"
          type="checkbox"
          checked={task.checked}
        />

        <div className="flex flex-col ml-2">
          <strong className="font-medium text-pampas-900 text-lg leading-tight">{task.titulo}</strong>
          <time className="text-pampas-500 text-sm">{task.date}</time>
        </div>
      </div>

      <div>
          <button className="bg-pampas-300 p-2 rounded">
            <MdEdit size={18} />
          </button>

          <button onClick={() => onDelete(task.id)} className="bg-pampas-300 p-2 rounded ml-2">
            <MdDelete size={18} />
          </button>
      </div>
    </div>
  )
}