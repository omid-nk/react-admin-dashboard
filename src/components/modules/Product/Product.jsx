function Product(props) {
  return (
    <div className="my-2 flex items-center gap-4 rounded p-2 shadow">
      <div className="h-28 w-28 rounded">
        <img className="h-full w-full rounded" src={props.img} alt="" />
      </div>
      <div>
        <p className="cursor-default text-sm">Id: {props.id}</p>
        <h2 className="cursor-default text-lg font-semibold">{props.name}</h2>
        <p className="cursor-default text-sm">QTY: {props.qty}</p>
        <p className="cursor-default text-lg font-bold text-blue-600">
          {`$${props.price}`}
        </p>
      </div>
    </div>
  );
}

export default Product;
