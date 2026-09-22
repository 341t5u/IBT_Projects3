import { useState, useMemo, useRef } from "react";
import DishCard from "./DishCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Link } from "react-router-dom";

export default function MenuList({ dishes }) {
  // Load initial search term from localStorage if available, or default to ''
  const [searchTerm, setSearchTerm] = useLocalStorage("addis_eats_search", "");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const searchInputRef = useRef(null);
  //Create a ref for the search input
  //Effect 1: Auto-focus the search input when the component mounts
  // useEffect(() => {
  //   if (searchInputRef.current) {
  //     searchInputRef.current.focus();
  //   }
  // }, []); // Empty dependency array = runs ONCE on initial render
  // //Effect 2: Sync searchTerm with localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("addis_eats_search", searchTerm);
  // }, [searchTerm]); // Dependency array = runs whenever searchTerm changes
  // //Effect 3: Dynamically update browser tab title
  // useEffect(() => {
  //   if (searchTerm) {
  //     document.title = `Addis Eats-Searching"${searchTerm}"`;
  //   } else {
  //     document.title = `Addis Eats-Restaurant & Fast Delivery`;
  //   }
  // }, [searchTerm]);
  // Filter dishes dynamically
  const pageTitle = searchTerm
    ? `Addis Eats-Searching"${searchTerm}"`
    : `Addis Eats-Restaurant & Fast Delivery`;
  useDocumentTitle(pageTitle);
  // const searchInputRef = useRef(null);

  // const filteredDishes = DISHES.filter((dish) => {
  //   const matchSearch = dish.name
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   const matchCategory =
  //     selectedCategory === "All" || dish.category === selectedCategory;
  //   return matchSearch && matchCategory;
  // });
  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesSearch = dish.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || dish.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [dishes, searchTerm, selectedCategory]);

  return (
    <section className="menu-container">
      <h2 className="menu-heading">Explore Our Menu</h2>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#f97316", fontWeight: "bold" }}
      >
        ← Back to Home
      </Link>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search food by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="category-tabs">
          {["All", "Traditional", "Vegetarian", "International"].map(
            (category) => (
              <button
                key={category}
                className={`tab-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ),
          )}
        </div>
      </div>
      <div className="menu-grid">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => <DishCard key={dish.id} dish={dish} />)
        ) : (
          <p className="no-result">No Dishes found matching your search</p>
        )}
      </div>
    </section>
  );
}
