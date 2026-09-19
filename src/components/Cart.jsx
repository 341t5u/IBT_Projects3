import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const cart = useCartStore(function (state) {
    return state.cart;
  });

  const increaseQuantity = useCartStore(function (state) {
    return state.increaseQuantity;
  });

  const decreaseQuantity = useCartStore(function (state) {
    return state.decreaseQuantity;
  });

  const removeFromCart = useCartStore(function (state) {
    return state.removeFromCart;
  });

  const total = cart.reduce(function (sum, item) {
    return sum + Number(item.price) * Number(item.quantity);
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.map(function (item) {
        return (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-info">
              <span className="cart-item-name">{item.name}</span>

              <span>
                {item.price} ETB × {item.quantity}
              </span>
            </div>

            <div className="cart-quantity">
              <button
                onClick={function () {
                  decreaseQuantity(item.id);
                }}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={function () {
                  increaseQuantity(item.id);
                }}
              >
                +
              </button>
            </div>

            <button
              className="remove-button"
              onClick={function () {
                removeFromCart(item.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}

      <div className="cart-total">
        <span>Total</span>

        <span>{total} ETB</span>
      </div>
      <button
        className="pay-button"
        onClick={function () {
          navigate("/checkout");
        }}
      >
        Pay {total} ETB
      </button>
    </div>
  );
}

export default Cart;
