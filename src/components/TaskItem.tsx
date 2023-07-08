type Props = { 
  titulo: string
}

export function TaskItem(props: Props) {
  return (
    <div className="flex justify-between bg-pampas-50 rounded-md px-3 py-4 items-center mb-3">
      <div className="flex items-center">
        <input
          className="h-8 w-8 accent-primary"
          type="checkbox" 
        />

        <div className="flex flex-col ml-2">
          <strong className="font-medium text-pampas-900 text-lg leading-tight">{props.titulo}</strong>
          <time className="text-pampas-500 text-sm">5:22 AM, 01/07/2023</time>
        </div>
      </div>

      <div>
        <button>Editar</button>
        <button>Apagar</button>
      </div>
    </div>
  )
}