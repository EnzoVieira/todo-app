interface IButtonProps {
  label: string
  onClick: () => void
}

export function Button({label, onClick}: IButtonProps) {
  return (
    <button
      className="bg-primary py-2 px-6 rounded font-medium text-white"
      onClick={onClick}
    >
      {label}
    </button>
  )
}