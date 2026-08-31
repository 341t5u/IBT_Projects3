import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import Header from "../Header";
import DeliveryForm from "./DeliveryForm";

function Menu({ dishes }) {
  const [selectedCategory, setSelectedCategory] = useState("Main");

  const [orderTotal, setOrderTotal] = useState(0);

  const categories = ["All", "Main", "Side", "Drink", "Dessert"];

  const handleAdd = (price) => {
    setOrderTotal((previousTotal) => previousTotal + price);
  };

  return (
    <main>
      <h1>Our Menu</h1>
      <Header />
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <p>Category: {selectedCategory}</p>
      <DishList
        dishes={dishes}
        selectedCategory={selectedCategory}
        onAdd={handleAdd}
      />
      <section className="order-total">
        <h2>Order Total: {orderTotal.toLocaleString()} ETB</h2>
      </section>
      <DeliveryForm />
    </main>
  );
}

export default Menu;
