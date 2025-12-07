import { HiOutlineTrash } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";
import { HiFire } from "react-icons/hi2";

function Task({ title, description, isCompleted, isImportant }) {
  return (
    <div className="my-2 flex items-center justify-between gap-3 rounded border border-gray-200 bg-blue-50 p-2 transition-all hover:shadow">
      <div>
        <h3 className="text-md flex items-center gap-1 font-bold">
          {isImportant && <HiFire className="text-orange-600" />}
          <span className={`${isCompleted ? "line-through" : null}`}>
            {title}
          </span>
        </h3>
        <p className={`${isCompleted ? "line-through" : null} text-sm`}>
          {description}
        </p>
      </div>
      <div className="flex flex-col items-center justify-end gap-1 md:flex-row">
        <button className="cursor-pointer rounded bg-red-500 p-1.5 text-sm text-white">
          <HiOutlineTrash className="h-4 w-4" />
        </button>
        <button className="cursor-pointer rounded bg-blue-500 p-1.5 text-sm text-white">
          <HiCheckCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default Task;
