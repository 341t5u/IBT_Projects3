import { useSearchParams, Link } from "react-router-dom";
import { DISHES } from "../data/dishes";

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  // Filter list based on URL query parameter
  const filteredDishes = currentCategory
    ? DISHES.filter((d) => d.category === currentCategory)
    : DISHES;

  const handleFilter = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1>Menu</h1>

      {/* Category Filter Controls */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        <button onClick={() => handleFilter(null)}>All</button>
        <button onClick={() => handleFilter("traditional")}>Traditional</button>
        <button onClick={() => handleFilter("tibs")}>Tibs</button>
        <button onClick={() => handleFilter("vegetarian")}>Vegetarian</button>
      </div>

      {/* Dish List */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>{dish.name}</h3>
            <p>{dish.price} ETB</p>
            <Link
              to={`/menu/${dish.id}`}
              style={{ color: "#d9534f", fontWeight: "bold" }}
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
