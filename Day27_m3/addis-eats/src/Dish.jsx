import PropTypes from "prop-types";

function Dish({ name, price, spicy, currency = "ETB" }) {
  return (
    <article className="dish">
      <h2>{name}</h2>
      <p>
        {price}
        {currency}
      </p>
      {spicy === true && <span className="spicy-badge">Spicy</span>}
      {/*conditional rendering, if the spicy prop is true, it will render a spicy badge, otherwise it will not render anything.The ternary operator picks one of two values based on a condition.*/}
    </article>
  );
}
Dish.PropTypes = {
  name: PropTypes.string.isRequired, //validation for the name prop, it should be a string and is required.
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool, //validation for the spicy prop, it should be a boolean value not required it is optional.
  currency: PropTypes.string,
};
export default Dish;
