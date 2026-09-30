import { notFound } from "next/navigation";
import Link from "next/link";
const DISH_DATA = {
  kitfo: {
    name: "Kitfo",
    description:
      "Chopped meat with mitmita(traditional spicy) and traditional butter",
    price: "1500 birr",
  },
  dorowot: {
    name: "Doro Wot",
    description: "Chicken dish with berbere(traditional spicy)",
    price: "2500 birr",
  },
  tibs: {
    name: "Tibs",
    description: "Grilled meat with traditional sauce",
    price: "1000 birr",
  },
  shiro: { name: "Shiro", description: "Traditional dish", price: "500 birr" },
  vege: {
    name: "Vegetable",
    description: "Different kind of Vegetable",
    price: "700 birr",
  },
};
export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = DISH_DATA[id];

  if (!dish) {
    notFound();
  }
  return (
    <div>
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      <p>
        <strong>Price:</strong>
        {dish.price}
      </p>
      <Link href="/menu">Back to Menu</Link>
    </div>
  );
}
