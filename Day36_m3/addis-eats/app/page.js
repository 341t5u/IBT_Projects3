import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Addis Eats</h1>
      <p>Explore traditional and modern Ethiopian cuisine.</p>
      <Link href="/menu">Explore Menu</Link>
    </div>
  );
}
