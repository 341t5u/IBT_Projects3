import PropTypes from "prop-types";
import Dish from "./Dish";

function DishList({ dishes, selectedCategory, onAdd }) {
  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  if (filteredDishes.length === 0) {
    return (
      <p className="empty-message">No dishes available in this category.</p>
    );
  }

  return (
    <section className="dish-list">
      {filteredDishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          category={dish.category}
          spicy={dish.spicy}
          onAdd={onAdd}
        />
      ))}
    </section>
  );
}

DishList.propTypes = {
  dishes: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default DishList;
