import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex min-h-screen w-full items-center justify-center bg-gray-100">
      <ClipLoader size={70} color="#6366f1" />
    </div>
  );
}

export default Loader;
