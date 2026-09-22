import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function DishCard({ dish }) {
  const { name, price, category, description } = dish;
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); //allowed to decrement in one
  const handleAdd = () => {
    addToCart(dish, quantity);
    setQuantity(1);
  };

  return (
    <div className="dish-card">
      <div className="dish-body">
        <span className="dish-category">{category}</span>
        <Link to={`/menu/${dish.id}`} style={{ textDecoration: "none" }}>
          <h3 className="dish-name">{name}</h3>
        </Link>
        <p className="dish-description">{description}</p>
        <div className="quantity-control">
          <button onClick={decrement} className="qty-btn" type="button">
            -
          </button>
          <span className="qty-count">{quantity}</span>
          <button onClick={increment} className="qty-btn" type="button">
            +
          </button>
        </div>
        <div className="dish-footer">
          <span className="dish-price">{price * quantity}ETB</span>
          <button className="add-btn" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
