import Link from "next/link";
export const metadata = {
  title: "Addis Eats",
  description: "Authentic Ethiopian Flavors",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: "20px" }}>
        <header
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <nav style={{ display: "flex", gap: "15px" }}>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
