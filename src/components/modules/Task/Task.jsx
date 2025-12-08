import { useEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";
import { HiFire } from "react-icons/hi2";

function Task({
  title,
  description,
  isCompleted,
  isImportant,
  onDelete,
  onToggleComplete,
}) {
  return (
    <div className="my-2 flex items-center justify-between gap-3 rounded border border-gray-200 bg-blue-50 p-2 transition-all hover:shadow">
      <div>
        <h3 className="text-md flex items-center gap-1 font-bold">
          {isImportant && <HiFire className="text-orange-600" />}
          <span className={`${isCompleted ? "line-through" : ""}`}>
            {title}
          </span>
        </h3>
        <p className={`${isCompleted ? "line-through" : ""} text-sm`}>
          {description}
        </p>
      </div>
      <div className="flex flex-col items-center justify-end gap-1 md:flex-row">
        <button
          onClick={onDelete}
          className="cursor-pointer rounded bg-red-500 p-1.5 text-sm text-white hover:bg-red-600"
        >
          <HiOutlineTrash className="h-4 w-4" />
        </button>
        <button
          onClick={onToggleComplete}
          className={`cursor-pointer rounded p-1.5 text-sm text-white ${
            isCompleted
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          <HiCheckCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default Task;
