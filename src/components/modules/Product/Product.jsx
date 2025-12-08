function Product(props) {
  return (
    <div className="my-2 flex items-center gap-4 rounded px-4 py-2 shadow transition-all hover:shadow-lg md:gap-8">
      <div className="rounded">
        <img
          className="max-h-32 max-w-32 rounded object-contain"
          src={props.image}
          alt=""
        />
      </div>
      <div className="w-full">
        <p className="cursor-default text-sm">Id: {props.id}</p>
        <h2 className="cursor-default font-bold">{props.title}</h2>
        <p className="cursor-default text-sm">
          category:{" "}
          <span className="text-sm text-blue-400">{props.category}</span>
        </p>
        <p className="cursor-default text-sm">QTY: {props.rating.count}</p>
        <p className="cursor-default text-lg font-bold text-blue-600">
          {`$${props.price}`}
        </p>
        <div className="flex justify-end">
          <button className="cursor-pointer rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600">
            Edit Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
