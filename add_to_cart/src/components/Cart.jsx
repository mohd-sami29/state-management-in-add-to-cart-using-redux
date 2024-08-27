import { useSelector } from "react-redux";

function Cart() {
  const carts = useSelector((state) => state);
  return (
    <>
      <div className="mt-12">
        <h1 className="text-red-500 font-bold text-xl underline">Cart Items</h1>
        {carts &&
          carts.map((cart, index) => {
            return (
              <li key={index}>
                {cart.name} - ${cart.price}
              </li>
            );
          })}
        <div className="font-semibold">
          Total Amount : $
          {carts &&
            carts.reduce((total, cart) => {
              console.log("T", total);
              return (total = total + cart.price);
            }, 0)}
        </div>
      </div>
    </>
  );
}
export default Cart;
