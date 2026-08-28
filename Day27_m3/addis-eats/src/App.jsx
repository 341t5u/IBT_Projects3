import Header from "./Header";
import Dish from "./Dish";
import Card from "./Card";
import "./App.css";

const dishes = [
  {
    id: 1,
    name: "Tibs",
    price: 1200,
    category: "Main",
    spicy: false,
  },
  {
    id: 2,
    name: "Doro Wot",
    price: 2000,
    category: "Main",
    spicy: true,
  },
  {
    id: 3,
    name: "Ageligil",
    price: 1300,
    category: "Main",
    spicy: true,
  },
  {
    id: 4,
    name: "Kitfo",
    price: 2500,
    category: "Main",
    spicy: true,
  },
  {
    id: 5,
    name: "Shiro",
    price: 540,
    category: "Side",
    spicy: false,
  },
];

function App() {
  const selectedCategory = "Main";

  const filteredDishes = dishes.filter(function (dish) {
    return dish.category === selectedCategory;
  });

  return (
    <>
      <Header />

      <main>
        <h2>Our Menu</h2>

        <p>Category: {selectedCategory}</p>

        <section className="menu">
          {filteredDishes.length === 0 ? (
            <p>No dishes found in this category.</p>
          ) : (
            filteredDishes.map(function (dish) {
              return (
                <Card key={dish.id}>
                  <Dish
                    name={dish.name}
                    price={dish.price}
                    spicy={dish.spicy}
                  />
                </Card>
              );
            })
          )}
        </section>
      </main>
    </>
  );
}
export default App;
