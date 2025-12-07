import { useId, useState, useEffect } from "react";
import { HiOutlinePlus, HiOutlineChevronDown } from "react-icons/hi2";
import Task from "../modules/task/Task";
import CreateNewTaskModule from "../modules/CreateNewTaskModule/CreateNewTaskModule";

function TodoList() {
  const id = useId();
  const [todos, setTodos] = useState([]);
  const [isCreateNewTaskModuleOpen, setIsCreateNewTaskModuleOpen] =
    useState(false);

  // هنگام لود صفحه، تسک‌ها را از LocalStorage بخوان
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // هر بار که todos تغییر کرد، LocalStorage را آپدیت کن
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (newTask) => {
    setTodos((prev) => [...prev, newTask]);
  };

  const deleteTask = (taskId) => {
    setTodos((prev) => prev.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  return (
    <>
      <header className="flex items-center justify-between">
        <button
          onClick={() => setIsCreateNewTaskModuleOpen(true)}
          className="flex cursor-pointer items-center gap-1 rounded bg-green-500 px-3 py-2 text-white transition-all hover:bg-green-600"
        >
          Add New Task
          <HiOutlinePlus className="h-5 w-5" />
        </button>
        <div className="flex cursor-pointer items-center gap-1 rounded bg-gray-200 px-3 py-2 text-gray-600">
          Filter
          <HiOutlineChevronDown className="h-5 w-5" />
        </div>
      </header>

      <section>
        {todos.map((item) => (
          <Task
            key={id + item.id}
            {...item}
            onDelete={() => deleteTask(item.id)}
            onToggleComplete={() => toggleComplete(item.id)}
          />
        ))}
      </section>

      {isCreateNewTaskModuleOpen && (
        <CreateNewTaskModule
          closeModal={() => setIsCreateNewTaskModuleOpen(false)}
          addTask={addTask}
        />
      )}
    </>
  );
}

export default TodoList;
