import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

function App() {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🛒 Simple Redux Cart</h1>
      <h2>Items in Cart: {count}</h2>
      <button onClick={() => dispatch(addItem())}>Add Item</button>
      <button onClick={() => dispatch(removeItem())} style={{ marginLeft: "10px" }}>
        Remove Item
      </button>
    </div>
  );
}

export default App;
