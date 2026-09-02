import { useEffect, useRef, useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [order, setOrder] = useState({});

  const searchRef = useRef(null);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchDishes() {
        try {
          setLoading(true);
          setError("");

          const response = await fetch("/dishes.json", {
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error("Failed to load dishes.");
          }

          const data = await response.json();

          if (category === "All") {
            setDishes(data);
          } else {
            const filteredDishes = data.filter(function (dish) {
              return dish.category === category;
            });

            setDishes(filteredDishes);
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setLoading(false);
        }
      }

      fetchDishes();

      return function () {
        controller.abort();
      };
    },
    [category],
  );

  useEffect(
    function () {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    },
    [loading],
  );

  function addDish(dish) {
    setOrder(function (currentOrder) {
      const currentQuantity = currentOrder[dish.id] || 0;

      return {
        ...currentOrder,
        [dish.id]: currentQuantity + 1,
      };
    });
  }

  const searchedDishes = dishes.filter(function (dish) {
    return dish.name.toLowerCase().includes(search.toLowerCase());
  });

  const total = Object.keys(order).reduce(function (sum, id) {
    const dish = dishes.find(function (item) {
      return item.id === Number(id);
    });

    if (!dish) {
      return sum;
    }

    return sum + dish.price * order[id];
  }, 0);

  if (loading) {
    return <h2>Loading dishes...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <section>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={function (event) {
          setSearch(event.target.value);
        }}
      />

      <CategoryBar category={category} setCategory={setCategory} />

      <DishList
        dishes={searchedDishes}
        order={order}
        addDish={addDish}
        category={category}
        search={search}
      />

      <div className="order-summary">
        <h2>Order Total: {total.toLocaleString()} ETB</h2>
      </div>
    </section>
  );
}

export default Menu;
