import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";

function Header() {
  return (
    <>
      <div className="hidden sm:block">
        <h1 className="cursor-default text-xl font-bold text-blue-600">
          MY-STORE
        </h1>
      </div>
      <div className="flex items-center justify-between gap-3 rounded bg-gray-100 p-2">
        <input
          className="w-36 border-0 outline-0 transition-all md:w-52 md:focus:w-56 lg:focus:w-72"
          placeholder="Search here.."
          type="text"
          name=""
          id=""
        />
        <HiMiniMagnifyingGlass className="h-6 w-6 cursor-pointer text-blue-600" />
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded bg-yellow-50 sm:flex">
          <HiOutlineBell className="h-6 w-6 text-yellow-600" />
        </div>
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded">
            <img
              className="rounded"
              src="public/images/img-avatar-default.png"
              alt="user avatar"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-text text-md cursor-default">Omid Daliri</p>
            <p className="text-text cursor-default text-sm">Admin</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
