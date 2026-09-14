import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
  });

  // Ethiopian TeleBirr Phone Validation (Starts with 09 or 07 and has 10 digits)
  const phoneRegex = /^(09|07)\d{8}$/;
  const isValidPhone = phoneRegex.test(formData.phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Prevent submission if phone is invalid
    if (!isValidPhone) {
      alert("Please enter a valid TeleBirr phone number.");
      return;
    }

    alert(
      `Order Placed Successfully! Payment request sent to ${formData.phone}.`,
    );
    clearCart();
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Checkout</h1>

      <form
        onSubmit={handlePlaceOrder}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {/* Address Input */}
        <div className="form-group">
          <label htmlFor="address">Delivery Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g., Bole, Near Atlas"
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        {/* TeleBirr Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">TeleBirr Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="09XXXXXXXX or 07XXXXXXXX"
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />

          {formData.phone.length > 0 && !isValidPhone && (
            <small
              style={{ color: "red", display: "block", marginTop: "0.25rem" }}
            >
              Enter a valid number starting with 09 or 07 (10 digits total)
            </small>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValidPhone}
          style={{
            padding: "0.8rem",
            background: isValidPhone ? "#28a745" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isValidPhone ? "pointer" : "not-allowed",
          }}
        >
          Confirm & Pay with TeleBirr
        </button>
      </form>
    </div>
  );
}
