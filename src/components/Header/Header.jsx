import { HiOutlineBell } from "react-icons/hi2";
import UserCardMinimal from "../modules/UserCardMinimal/UserCardMinimal";
import { HiOutlineBars3 } from "react-icons/hi2";
import SearchBar from "../modules/SearchBar/SearchBar";

function Header({ switchIsSidebarOpen }) {
  return (
    <>
      <div className="hidden sm:block">
        <h1 className="cursor-default text-xl font-bold text-blue-600">
          MY-STORE
        </h1>
      </div>
      <SearchBar />
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-white md:bg-yellow-50">
          <HiOutlineBell className="h-6 w-6 text-yellow-600" />
        </div>
        <div
          onClick={() => switchIsSidebarOpen((prev) => !prev)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-blue-50 md:hidden"
        >
          <HiOutlineBars3 className="h-6 w-6 text-blue-600" />
        </div>
        <UserCardMinimal className="hidden lg:flex" />
      </div>
    </>
  );
}

export default Header;
