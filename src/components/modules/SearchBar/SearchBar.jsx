import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="flex items-center justify-between gap-3 rounded bg-gray-100 p-2">
      <input
        className="w-28 border-0 outline-0 transition-all sm:w-36 md:w-52 md:focus:w-64 lg:w-64 lg:focus:w-80"
        placeholder="Search here.."
        type="text"
      />
      <HiMiniMagnifyingGlass className="h-6 w-6 cursor-pointer text-blue-600" />
    </div>
  );
}

export default SearchBar;
