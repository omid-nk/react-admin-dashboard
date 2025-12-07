import { use, useState } from "react";

function CreateNewTaskModule({ closeModal, addTask }) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const addTaskBtn = (e) => {
    e.preventDefault();
    if (titleInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: titleInput,
      description: descriptionInput,
      isCompleted: false,
      isImportant: isImportant,
    };
    addTask(newTask);
    closeModal();
  };
  const cancelBtn = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-100 flex h-dvh w-full items-center justify-center bg-gray-500/60 backdrop-blur-xs">
      <div className="m-2 w-xl rounded bg-white p-4">
        <h3 className="text-center font-bold">Create New Task</h3>
        <form action="" className="mt-4 flex flex-col gap-1">
          <label className="text-sm" htmlFor="">
            Title
          </label>
          <input
            value={titleInput}
            onChange={(e) => {
              setTitleInput(e.target.value);
            }}
            className="rounded bg-gray-100 p-2 outline-0 focus:shadow-md"
            type="text"
            maxLength={42}
          />
          <label className="mt-2 text-sm" htmlFor="">
            Descripttion
          </label>
          <textarea
            value={descriptionInput}
            onChange={(e) => {
              setDescriptionInput(e.target.value);
            }}
            className="resize-none rounded bg-gray-100 p-2 text-sm outline-0 focus:shadow-md"
            rows="4"
            maxLength={220}
            name=""
            id=""
          ></textarea>
          <div className="mt-2 flex items-center gap-2 pl-2">
            <input
              onChange={(e) => setIsImportant(e.target.checked)}
              checked={isImportant}
              className="h-4 w-4 cursor-pointer"
              type="checkbox"
              name="isImportant"
              id="isImportant"
            />
            <label className="cursor-pointer" htmlFor="isImportant">
              Is Important?
            </label>
          </div>
          <div className="flex gap-2">
            <button
              onClick={addTaskBtn}
              className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
            >
              Add Task
            </button>
            <button
              onClick={cancelBtn}
              className="mt-4 w-full cursor-pointer rounded bg-red-600 p-2 text-white hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewTaskModule;
