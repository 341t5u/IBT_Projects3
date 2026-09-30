import Link from "next/link";
export default function CartPage() {
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Items in your order will appear here!</p>
      <Link href="/checkout">Proceed to Checkout</Link>
    </div>
  );
}
