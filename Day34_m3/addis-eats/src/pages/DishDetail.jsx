import { useParams, Link } from "react-router-dom";
import { DISHES } from "../data/dishes";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function DishDetail() {
  const { id } = useParams();
  const dish = DISHES.find((d) => d.id === id);
  useDocumentTitle(dish ? `Addis Eats-${dish.name}` : `Dish Not Found`);
  if (!dish) {
    return (
      <div className="detail-container">
        <h2>Dish Not Found</h2>
        <p>The dish you are looking for does not exist.</p>
        <Link to="/menu" className="book-link">
          ←Back to Menu
        </Link>
      </div>
    );
  }
  return (
    <div className="detail-container">
      <Link to="/menu" className="book-link">
        ←Back to Menu
      </Link>
      <div className="detail-info">
        <span className="detail-category">{dish.category}</span>
        <h1 className="detail-title">{dish.name}</h1>
        <p className="detail-description">{dish.description}</p>
        <span className="detail-price">{dish.price}ETB</span>
        <button
          className="add-cart-btn"
          onClick={() => alert(`Added ${dish.name} to cart!`)}
        >
          Add to order
        </button>
      </div>
    </div>
  );
}
