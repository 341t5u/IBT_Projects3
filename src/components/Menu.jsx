import { dishes } from "../data/dishes";
import { useCartStore } from "../store/cartStore";
import "../App.css";

export default function Menu() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-list">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <h3>{dish.name}</h3>

            <p className="dish-price">{dish.price} ETB</p>

            <button className="add-cart-btn" onClick={() => addItem(dish)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
