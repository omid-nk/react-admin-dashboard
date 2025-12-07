import { useId, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Task from "../modules/task/Task";

function TodoList() {
  const [todos] = useState([
    {
      id: 1,
      title: "Sample Task",
      description: "This is a sample task description.",
      isCompleted: false,
      isImportant: true,
    },
    {
      id: 2,
      title: "Sample Task",
      description: "This is a sample task description.",
      isCompleted: true,
      isImportant: true,
    },
    {
      id: 3,
      title: "Sample Task",
      description: "This is a sample task description.",
      isCompleted: false,
      isImportant: false,
    },
  ]);
  const id = useId();
  return (
    <>
      <header className="flex items-center justify-between">
        <button className="flex cursor-pointer items-center gap-1 rounded bg-green-500 px-3 py-2 text-white transition-all hover:bg-green-600">
          Add New Task
          <HiOutlinePlus className="h-5 w-5" />
        </button>
        <div className="flex cursor-pointer items-center gap-1 rounded bg-gray-200 px-3 py-2 text-gray-600">
          Filter
          <HiOutlineChevronDown className="h-5 w-5" />
        </div>
      </header>
      <section>
        {todos.map((item) => {
          return <Task key={id + item.id} {...item} />;
        })}
      </section>
    </>
  );
}

export default TodoList;
