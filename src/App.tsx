import { useState, useEffect, useCallback } from "react";

import { TaskProps } from "./components/TaskItem";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskList } from "./components/TaskList";
import { EmptyTaskList } from "./components/EmptyTaskList";

type StatusType = "all" | "complete" | "incomplete";

const TASKS_LOCALSTORAGE_KEY = "tasks";

function App() {
  const [taskList, setNewTaskList] = useLocalStorage<TaskProps>(
    TASKS_LOCALSTORAGE_KEY
  );
  const [selectStatus, setSelectStatus] = useState<StatusType>("all");
  const [filteredTaskList, setFilteredTaskList] = useState<TaskProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onAddTask(titulo: string) {
    const newTasks = [
      ...taskList,
      {
        id: Math.random(),
        titulo,
        date: "7:30 AM, 09/07/2023",
        checked: false,
      },
    ];
    setNewTaskList(newTasks);
    setIsModalOpen(false);
  }

  function onDelete(id: number) {
    const newTaskList = taskList.filter((task) => task.id != id);
    setNewTaskList(newTaskList);
  }

  function handleToggleTask(id: number) {
    const newArr = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked,
        };
      }

      return task;
    });

    setNewTaskList(newArr);
  }

  function handleOnEditTask(id: number, newTitle: string) {
    const newArr = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          titulo: newTitle,
        };
      }

      return task;
    });

    setNewTaskList(newArr);
  }

  const filterTaskList = useCallback(() => {
    switch (selectStatus) {
      case "complete": {
        const newArr = taskList.filter((task) => task.checked);
        setFilteredTaskList(newArr);
        break;
      }

      case "incomplete": {
        const newArr = taskList.filter((task) => !task.checked);
        setFilteredTaskList(newArr);
        break;
      }

      default: {
        setFilteredTaskList(taskList);
        break;
      }
    }
  }, [taskList, selectStatus]);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    filterTaskList();
  }, [filterTaskList, taskList]);

  return (
    <div className="w-full mx-auto max-w-6xl px-4 py-10">
      {/* TITULO */}
      <h1 className="text-4xl uppercase font-bold text-center text-black">
        Todo app
      </h1>

      {/* BOTOES */}
      <div className="flex justify-between mt-10">
        <Button label="Add Task" onClick={handleOpenModal} />

        <select
          onChange={(event) =>
            setSelectStatus(event.target.value as StatusType)
          }
          className="py-2 rounded font-medium w-[150px] border-2 border-black outline-primary"
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      {/* LISTA */}
      <main className="bg-pampas-200 mt-4 p-4 rounded">
        {taskList.length === 0 ? (
          <EmptyTaskList />
        ) : (
          <TaskList
            taskList={filteredTaskList}
            onDelete={onDelete}
            onEditTask={handleOnEditTask}
            onToggleCheck={handleToggleTask}
          />
        )}
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={onAddTask}
      />
    </div>
  );
}

export default App;
