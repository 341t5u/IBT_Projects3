import { useCartStore } from "../store/cartStore";

export default function CartBadge() {
  // Narrow Selector: Select ONLY items
  const items = useCartStore((state) => state.items);

  return <div>Cart Items: {items.length}</div>;
}
