import Item from "./components/Item";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <div className="text-center">
        <div className="text-red-500 font-bold text-xl underline">
          List of Products
        </div>
        <Item name="Macbook" price={1000} />
        <Item name="Laptop" price={500} />
        <Item name="Mobile" price={300} />
        <Cart />
      </div>
    </>
  );
}

export default App;
