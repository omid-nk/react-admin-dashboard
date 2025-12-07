import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import Product from "../modules/Product/Product";
import { useState } from "react";

function Products() {
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      img: "images/img-avatar-default.png",
      name: "Product 1",
      qty: 10,
      price: 19.99,
    },
    {
      id: 2,
      img: "images/img-avatar-default.png",
      name: "Product 2",
      qty: 5,
      price: 29.99,
    },
    {
      id: 3,
      img: "images/img-avatar-default.png",
      name: "Product 3",
      qty: 15,
      price: 9.99,
    },
  ]);
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
            Total Products: {productsData.length}
          </p>
        </div>
      </div>
      <section>
        {productsData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </>
  );
}

export default Products;
