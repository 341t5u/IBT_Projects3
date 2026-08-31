import Header from "./Header";
import Dish from "./components/Dish";
import Card from "./Card";
import "./App.css";
import Menu from "./components/Menu";

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
  {
    id: 6,
    name: "Buna",
    price: 150,
    category: "Drink",
    spicy: false,
  },
];
function App() {
  <Header />;
  return <Menu dishes={dishes} />;
}

export default App;
