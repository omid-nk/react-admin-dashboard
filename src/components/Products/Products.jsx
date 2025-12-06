import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi2";

function Products() {
  return (
    <>
      <div className="flex items-center justify-between rounded bg-gray-50 p-2">
        <div className="relative w-48 md:w-64">
          <button
            id="dropdownButton"
            className="w-full cursor-pointer rounded bg-white px-4 py-2 text-left focus:outline-none"
          >
            Filter Products
            <HiOutlineChevronDown className="text-text float-right h-6 w-6 transition-all" />
          </button>
        </div>
        <div className="text-text flex items-center gap-2 pr-2">
          <HiOutlinePlusCircle className="h-8 w-8 cursor-pointer text-green-600" />

          <p id="totalProducts" className="hidden sm:block">
            Total Products: 12
          </p>
        </div>
      </div>
    </>
  );
}

export default Products;
