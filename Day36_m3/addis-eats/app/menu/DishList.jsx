import Link from "next/link";
const DISHES = [
  { id: "kitfo", name: "Kitfo", price: "1500 birr" },
  { id: "dorowot", name: "Doro Wot", price: "2500 birr" },
  { id: "tibs", name: "Tibs", price: "1000 birr" },
  { id: "shiro", name: "Shiro", price: "500 birr" },
  { id: "vege", name: "Vegetables", price: "700 birr" },
];
export default function DishList() {
  return (
    <ul>
      {DISHES.map((dish) => (
        <li key={dish.id} style={{ margin: "8px 0" }}>
          <Link href={`/menu/${dish.id}`}>
            <strong>{dish.name}</strong>-{dish.price}
          </Link>
        </li>
      ))}
    </ul>
  );
}
