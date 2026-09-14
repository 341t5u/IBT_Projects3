import { Outlet, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Layout() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ fontFamily: "sans-serif", color: "#333" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          background: "#8b0000",
          color: "#fff",
        }}
      >
        <h2>Addis Eats 🍲</h2>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </NavLink>
          <NavLink to="/menu" style={{ color: "#fff", textDecoration: "none" }}>
            Menu
          </NavLink>
          <NavLink to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
            Cart ({totalItems})
          </NavLink>
        </nav>
      </header>

      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <Outlet />
      </main>

      <footer
        style={{ textAlign: "center", padding: "1rem", background: "#eee" }}
      >
        <p>© {new Date().getFullYear()} Addis Eats. All rights reserved.</p>
      </footer>
    </div>
  );
}
