import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <Link to="/menu">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <h3>
                {item.name} (x{item.quantity})
              </h3>
              <p>{item.price * item.quantity} ETB</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Total: {subtotal} ETB</h3>

      <Link
        to="/checkout"
        style={{
          display: "inline-block",
          padding: "0.8rem 1.5rem",
          background: "#d9534f",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
