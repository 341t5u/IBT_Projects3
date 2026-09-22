import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import "./CartDrawer.css";
export default function CartDrawer() {
  const navigate = useNavigate();
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCartStore();
  if (!isCartOpen) return null;
  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };
  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Order 🛒</h2>
          <button className="close-drawer-btn" onClick={closeCart}>
            X
          </button>
        </div>
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is currently empty.</p>
              <p className="empty-sub">Add delicious dishes from our menu!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">{item.price} ETB</p>

                  <div className="cart-item-actions">
                    <div className="cart-qty-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Total Amount:</span>
              <strong>{getTotalPrice()} ETB</strong>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
