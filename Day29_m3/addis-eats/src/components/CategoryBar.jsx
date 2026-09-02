function CategoryBar({ category, setCategory }) {
  const categories = ["All", "Main", "Side", "Drink", "Dessert"];

  return (
    <div className="category-bar">
      {categories.map(function (item) {
        return (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={function () {
              setCategory(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryBar;
