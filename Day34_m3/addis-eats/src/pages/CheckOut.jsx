import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./Checkout.css";

export default function Checkout() {
  useDocumentTitle("Addis Eats - Checkout");
  const navigate = useNavigate();

  const { cartItems, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    paymentMethod: "telebirr",
    deliveryNotes: "",
  });

  // FIXED: Declare errors state here
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^(09|07|\+251)[0-9]{8}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid Ethiopian phone number.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      clearCart();
    }
  };

  if (isSubmitted) {
    return (
      <div className="checkout-success-container">
        <div className="success-card">
          <div className="success-icon">🎉</div>
          <h2>Order Placed Successfully!</h2>
          <p>
            Thank you, <strong>{formData.fullName}</strong>!
          </p>
          <p>
            Your order will be delivered to <strong>{formData.address}</strong>.
          </p>
          <button className="home-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="empty-checkout-container">
        <h2>Your Cart is Empty</h2>
        <p>You need to add items to your cart before proceeding to checkout.</p>
        <Link to="/menu" className="explore-btn">
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-heading">Checkout & Delivery Details</h1>

      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Yourname + yourFathername"
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && (
              <span className="error-text">{errors.fullName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0911223344"
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Delivery Address / Sub-City *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="e.g. Bole, Addis Ababa"
              className={errors.address ? "input-error" : ""}
            />
            {errors.address && (
              <span className="error-text">{errors.address}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="telebirr">Telebirr</option>
              <option value="cbe_birr">CBE Birr</option>
              <option value="cash_on_delivery">Cash on Delivery</option>
            </select>
          </div>

          <button type="submit" className="place-order-btn">
            Confirm & Place Order ({totalPrice} ETB)
          </button>
        </form>

        <div className="order-summary-card">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <strong>{item.price * item.quantity} ETB</strong>
              </div>
            ))}
          </div>
          <hr className="divider" />
          <div className="summary-row total-row">
            <strong>Total:</strong>
            <strong>{totalPrice} ETB</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
