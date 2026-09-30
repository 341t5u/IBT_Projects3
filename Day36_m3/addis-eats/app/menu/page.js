import { resolve } from "styled-jsx/css";
import DishList from "./DishList";
export default async function MenuPage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div>
      <h1>Addis Eats Menu</h1>
      <DishList />
    </div>
  );
}
