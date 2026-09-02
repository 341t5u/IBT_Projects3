function Dish({ dish, count, addDish }) {
  return (
    <article className="dish">
      <h2>{dish.name}</h2>

      <p>{dish.price} ETB</p>

      {dish.spicy && <span>🌶️ Spicy</span>}

      <p>Quantity: {count}</p>

      <button
        onClick={function () {
          addDish(dish);
        }}
      >
        Add
      </button>
    </article>
  );
}

export default Dish;
