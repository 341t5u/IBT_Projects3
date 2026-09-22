import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import "../App.css";
export default function Header() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  //const getTotalCount = useCartStore((state) => state.getTotalCount);
  const cartItems = useCartStore((state) => state.cartItems);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="header-container">
      <h1>Addis Eats Restaurant🍲</h1>

      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "nav-item")}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active-link" : "nav-item")}
        >
          Menu
        </NavLink>
      </nav>
      <div className="header-badge">
        <section className="badge1">
          <h3>Fast Delivery</h3>
          <p>Fast delivery service with in a minute and packed well material</p>
        </section>
        <section className="badge2">
          <h3>Traditional Vibe</h3>
          <p>Ethiopian Traditional vibe place makes you feel home</p>
        </section>
        <section className="badge3">
          <h3>Yummy Foods</h3>
          <p>
            Really sweet and yummy food prepared by professional chiefs and with
            clean
          </p>
        </section>
        <button className="cart-btn" onClick={toggleCart}>
          Cart 🛒 ({totalCount})
        </button>
      </div>
    </header>
  );
}
