import { useRef, useState } from "react";
import { useCartStore } from "../store/cartStore";

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "TeleBirr phone number is required.";
  } else if (!/^09\d{8}$/.test(form.phone)) {
    errors.phone = "Enter a valid Ethiopian phone number.";
  }

  if (!form.area.trim()) {
    errors.area = "Delivery area is required.";
  }

  return errors;
}

function CheckForm() {
  /*
    Get the current cart from Zustand
  */
  const cart = useCartStore(function (state) {
    return state.cart;
  });

  /*
    Calculate the total from the current cart
  */
  const total = cart.reduce(function (sum, item) {
    return sum + Number(item.price) * Number(item.quantity);
  }, 0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    notes: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    area: false,
    notes: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const areaRef = useRef(null);

  /*
    Validation happens on every render
  */
  const errors = validate(form);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm(function (previousForm) {
      return {
        ...previousForm,
        [name]: value,
      };
    });

    setSubmitError("");
  }

  function handleBlur(event) {
    const name = event.target.name;

    setTouched(function (previousTouched) {
      return {
        ...previousTouched,
        [name]: true,
      };
    });
  }

  function focusFirstError(currentErrors) {
    if (currentErrors.name) {
      nameRef.current.focus();
      return;
    }

    if (currentErrors.phone) {
      phoneRef.current.focus();
      return;
    }

    if (currentErrors.area) {
      areaRef.current.focus();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    /*
      Mark all fields as touched
    */
    setTouched({
      name: true,
      phone: true,
      area: true,
      notes: true,
    });

    /*
      Validate the current form
    */
    const currentErrors = validate(form);

    if (Object.keys(currentErrors).length > 0) {
      focusFirstError(currentErrors);
      return;
    }

    /*
      Don't allow checkout with an empty cart
    */
    if (cart.length === 0) {
      setSubmitError("Your cart is empty.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      /*
        Temporary fake payment request
      */
      await new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 1500);
      });

      alert(
        "Order submitted successfully!\n\n" +
          "Name: " +
          form.name +
          "\n" +
          "Phone: " +
          form.phone +
          "\n" +
          "Area: " +
          form.area +
          "\n" +
          "Total: " +
          total +
          " ETB",
      );
    } catch (error) {
      setSubmitError("Order could not be submitted. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Client Information</h1>

        <p className="checkout-description">
          Enter your information to complete your order.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* NAME */}

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              ref={nameRef}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={touched.name && errors.name ? "true" : "false"}
              aria-describedby={
                touched.name && errors.name ? "name-error" : undefined
              }
              className={touched.name && errors.name ? "input-error" : ""}
            />

            {touched.name && errors.name && (
              <p id="name-error" className="form-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* PHONE */}

          <div className="form-group">
            <label htmlFor="phone">TeleBirr Phone Number</label>

            <input
              ref={phoneRef}
              id="phone"
              name="phone"
              type="tel"
              placeholder="09XXXXXXXX"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={touched.phone && errors.phone ? "true" : "false"}
              aria-describedby={
                touched.phone && errors.phone ? "phone-error" : undefined
              }
              className={touched.phone && errors.phone ? "input-error" : ""}
            />

            {touched.phone && errors.phone && (
              <p id="phone-error" className="form-error" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          {/* AREA */}

          <div className="form-group">
            <label htmlFor="area">Delivery Area</label>

            <input
              ref={areaRef}
              id="area"
              name="area"
              type="text"
              placeholder="e.g. Gerji"
              value={form.area}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={touched.area && errors.area ? "true" : "false"}
              aria-describedby={
                touched.area && errors.area ? "area-error" : undefined
              }
              className={touched.area && errors.area ? "input-error" : ""}
            />

            {touched.area && errors.area && (
              <p id="area-error" className="form-error" role="alert">
                {errors.area}
              </p>
            )}
          </div>

          {/* NOTES */}

          <div className="form-group">
            <label htmlFor="notes">Notes (optional)</label>

            <textarea
              id="notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Any delivery instructions?"
            />
          </div>

          {/* ORDER TOTAL */}

          <div className="checkout-total">
            <span>Total</span>

            <strong>{total} ETB</strong>
          </div>

          {/* ERROR */}

          {submitError && (
            <p className="submit-error" role="alert">
              {submitError}
            </p>
          )}

          {/* PAY BUTTON */}

          <button type="submit" className="submit-button" disabled={submitting}>
            {submitting ? "Submitting..." : `Pay ${total} ETB`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckForm;
