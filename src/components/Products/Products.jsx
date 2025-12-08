import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import Product from "../modules/Product/Product";
import { useEffect, useState } from "react";

function Products() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProductsData(data);
      } catch (error) {
        alert("Failed to fetch products data.");
        return;
      }
    };
    fetchProducts();
  }, []);

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
