import { useCartStore } from "../store/cartStore";

export default function Cart() {
  // Narrow selectors: Subscribing only to what this component needs
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clear = useCartStore((state) => state.clear);

  // Derived calculation directly in the render
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              <span>
                {item.name} - {item.price} ETB
              </span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: {total} ETB</h3>
            <button onClick={clear}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}
