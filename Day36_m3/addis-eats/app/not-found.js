import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>404 - Dish or Page Not Found</h2>
      <p>We couldn't found the page or dish you were looking for.</p>
      <Link href="/menu">Return to Menu</Link>
    </div>
  );
}
