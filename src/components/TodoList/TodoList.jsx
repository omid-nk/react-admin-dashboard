import { useId, useState, useEffect } from "react";
import { HiOutlinePlus, HiOutlineChevronDown } from "react-icons/hi2";
import Task from "../modules/task/Task";
import CreateNewTaskModule from "../modules/CreateNewTaskModule/CreateNewTaskModule";

function TodoList() {
  const id = useId();
  const [todos, setTodos] = useState([]);
  const [isCreateNewTaskModuleOpen, setIsCreateNewTaskModuleOpen] =
    useState(false);

  const [filter, setFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (newTask) => setTodos((prev) => [...prev, newTask]);

  const deleteTask = (taskId) =>
    setTodos((prev) => prev.filter((task) => task.id !== taskId));

  const toggleComplete = (taskId) =>
    setTodos((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );

  const filteredTodos = todos.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "important") return task.isImportant;
    return true;
  });

  const filterText =
    filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1);

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

        <div className="relative">
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="flex cursor-pointer items-center gap-1 rounded bg-gray-200 px-3 py-2 text-gray-600"
          >
            {filterText}
            <HiOutlineChevronDown className="h-5 w-5" />
          </button>

          {isFilterOpen && (
            <ul className="absolute right-0 z-10 mt-1 w-36 rounded border border-gray-200 bg-white shadow-lg">
              <li
                onClick={() => {
                  setFilter("all");
                  setIsFilterOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                All
              </li>
              <li
                onClick={() => {
                  setFilter("completed");
                  setIsFilterOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                Completed
              </li>
              <li
                onClick={() => {
                  setFilter("important");
                  setIsFilterOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                Important
              </li>
            </ul>
          )}
        </div>
      </header>

      <section>
        {filteredTodos.map((item) => (
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
