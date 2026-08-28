import Header from "./Header";
import Dish from "./Dish";
import "./App.css";

const dishes = [
  {
    id: 1,
    name: "Tibs",
    price: 1200,
  },
  {
    id: 2,
    name: "Doro Wot",
    price: 2000,
  },
  {
    id: 3,
    name: "Ageligil",
    price: 1300,
  },
  {
    id: 4,
    name: "Kitfo",
    price: 2500,
  },
];

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Our Menu</h2>

        <section className="menu">
          {dishes.map(function (dish) {
            return <Dish key={dish.id} name={dish.name} price={dish.price} />;
          })}
        </section>
      </main>
    </>
  );
}
export default App;
