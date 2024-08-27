import { useDispatch } from "react-redux";

function Item({ name, price }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="font-semibold text-lg">{name}</div>
      <div className="p-2">${price}</div>
      <button
        onClick={() => dispatch({ type: "add to cart", name, price })}
        className="border border-gray-400 bg-gray-200 hover:bg-blue-300 rounded-sm p-1 font-semibold"
      >
        Add To Cart
      </button>
    </>
  );
}
export default Item;
