import { TaskItem, TaskProps } from "./TaskItem";

interface ITaskListProps {
  taskList: TaskProps[];
  onDelete: (id: number) => void;
  onToggleCheck: (id: number) => void;
  onEditTask: (id: number, newTitle: string) => void;
}

export function TaskList({
  taskList,
  onDelete,
  onEditTask,
  onToggleCheck,
}: ITaskListProps) {
  return (
    <ul className="grid gap-3">
      {taskList.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onDelete={onDelete}
            handleToggleTask={onToggleCheck}
            handleEditTask={onEditTask}
          />
        </li>
      ))}
    </ul>
  );
}
