import { useState } from "react";
import PropTypes from "prop-types";

function Dish({ name, price, spicy, onAdd }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((previousCount) => previousCount + 1);

    // Send the price to Menu
    onAdd(price);
  };

  return (
    <article className="dish">
      <h2>{name}</h2>
      <h3>{price.toLocaleString()}ETB</h3>
      <div>
        <button onClick={handleAdd}>Add</button>

        {count > 0 && <span> Added: {count}</span>}
      </div>

      {spicy && <p>🌶️Spicy</p>}
    </article>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  onAdd: PropTypes.func.isRequired,
};

Dish.defaultProps = {
  spicy: false,
};

export default Dish;
