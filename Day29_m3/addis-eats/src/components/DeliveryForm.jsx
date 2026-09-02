import { useState } from "react";

function DeliveryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Valid TeleBirr number: 09 + 8 digits
  const isValidPhone = /^09\d{8}$/.test(formData.phone);

  const isFormValid =
    formData.name.trim() !== "" && isValidPhone && formData.area.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Order submitted successfully!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nArea: ${formData.area}`,
    );
  };

  return (
    <section className="delivery-section">
      <h2>TeleBirr Delivery</h2>

      <form className="delivery-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">TeleBirr Phone Number</label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="09XXXXXXXX"
          />

          {formData.phone.length > 0 && !isValidPhone && (
            <small className="error">Enter a valid number: 09XXXXXXXX</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="area">Area</label>

          <input
            id="area"
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter your area"
          />
        </div>

        <button type="submit" disabled={!isFormValid}>
          Confirm Delivery
        </button>
      </form>
    </section>
  );
}

export default DeliveryForm;
