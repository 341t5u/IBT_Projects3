import { useParams, Link } from "react-router-dom";
import { DISHES } from "../data/dishes";
import { useCart } from "../context/CartContext";

export default function DishDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const dish = DISHES.find((d) => d.id === id);

  if (!dish) {
    return (
      <div>
        <h2>Dish Not Found!</h2>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px" }}>
      <Link to="/menu">← Back to Menu</Link>
      <h1 style={{ marginTop: "1rem" }}>{dish.name}</h1>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#8b0000" }}>
        {dish.price} ETB
      </p>
      <p>{dish.description}</p>

      <button
        onClick={() => addToCart(dish)}
        style={{
          padding: "0.8rem 1.5rem",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}
