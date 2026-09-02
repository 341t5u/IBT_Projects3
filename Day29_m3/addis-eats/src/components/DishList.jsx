import Dish from "./Dish";

function DishList({ dishes, order, addDish, category, search }) {
  if (dishes.length === 0) {
    if (search.trim() !== "") {
      return <p className="no-dishes">No dishes found for "{search}".</p>;
    }

    if (category !== "All") {
      return (
        <p className="no-dishes">No {category.toLowerCase()} dishes found.</p>
      );
    }

    return <p className="no-dishes">No dishes found.</p>;
  }

  return (
    <div className="menu">
      {dishes.map(function (dish) {
        return (
          <Dish
            key={dish.id}
            dish={dish}
            count={order[dish.id] || 0}
            addDish={addDish}
          />
        );
      })}
    </div>
  );
}

export default DishList;
