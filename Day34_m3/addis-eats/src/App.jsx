import { useState } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
//import DishDetail from "./pages/DishDetail";
import CartDrawer from "./components/CartDrawer";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { DISHES } from "./data/dishes";

const DishDetail = lazy(() => import("./pages/DishDetail"));
const Checkout = lazy(() => import("./pages/CheckOut"));

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1e293b" }}>
        Authentic Ethiopian Cuisine Delivered Fast
      </h1>
      <p style={{ color: "#64748b", fontSize: "1.2rem", marginBottom: "2rem" }}>
        Freshly prepared Doro Wot, Tibs and Others to your doorstep.
      </p>
      <Link
        to="/menu"
        style={{
          background: "#f97316",
          color: "#fff",
          padding: "0.8rem 1.8rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Explore Full VIew
      </Link>
    </div>
  );
}
// function Checkout() {
//   return (
//     <div style={{ padding: "3rem", textAlign: "center" }}>
//       <h2>Checkout Page</h2>
//       <p>Form Processing Will be Added in Stage</p>
//     </div>
//   );
// }

function pageSpinner() {
  return (
    <div
      style={{
        padding: "4rem",
        textAlign: "center",
        color: "#f97316",
        fontWeight: "bold",
      }}
    >
      Loading Addis Eats...
    </div>
  );
}

export default function App() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const toggleCart = () => setIsCartOpen((prev) => !prev);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuList dishes={DISHES} />} />
            <Route path="menu/:id" element={<DishDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
// <div className="app-container">
//   <Header onOpenCart={toggleCart} />
//   <MenuList DISHES={DISHES} />
//   {isCartOpen && (
//     <div className="cart-model">
//       <div className="cart-content">
//         <h2>Your Shopping Cart🛒</h2>
//         <p>Cart items will appear here in Stage 6 (Zustand)!</p>
//         <button className="close-btn" onClick={toggleCart}>
//           Close Cart
//         </button>
//       </div>
//     </div>
//   )}
// </div>
