// import { useEffect, useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const [dishes, setDishes] = useState([]);
//   const [category, setCategory] = useState(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");

//   const searchRef = useRef(null);

//   useEffect(() => {
//     const controller = new AbortController();
//     async function fetchDishes() {
//       try {
//         setLoading(true);
//         setError("");
//         /*To fetch the data from the dishes.json file, we use the fetch API.
// We also pass in the signal from the AbortController to allow us to cancel the request if needed.
// If the response is not ok, we throw an error. We then parse the response as JSON and filter the dishes based on the selected category.
// If the category is "All", we set all dishes, otherwise we filter them by category.
// Finally, we handle any errors that may occur during the fetch process and set the loading state to false when done.*/
//         const res = await fetch("/dishes.json", {
//           signal: controller.signal,
//         }); /*This line code is used to when the user want to change the category quickly before loading the category
//         the system must cancel the pervious selection and get the new one  */
//         if (!res.ok) {
//           throw new Error("Failed to fetch dishes");
//         }
//         const data = await res.json();
//         if (category === "All") {
//           setDishes(data);
//         } else {
//           const filteredDishes = data.filter(
//             (dish) => dish.category === category,
//           );
//           setDishes(filteredDishes);
//         }
//       } catch (error) {
//         if (error.name !== "AbortError") {
//           setError(error.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchDishes();

//     return function () {
//       controller.abort();
//     };
//   }, [category]);

//   useEffect(
//     function () {
//       if (searchRef.current) {
//         searchRef.current.focus();
//       }
//     },
//     [loading],
//   );

//   const searchedDishes = dishes.filter(function (dish) {
//     return dish.name.toLowerCase().includes(search.toLocaleLowerCase());
//   }); /* This means React temporarily shows:

// Loading dishes...

// while the request is happening.*/
//   if (loading) {
//     return <h2>Loading dishes...</h2>;
//   }
//   /* This is important because fetch() does not automatically throw an error for HTTP errors such as 404 or 500.*/
//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }
//   return (
//     <div>
//       <h1>🍴 Addis Eats</h1>
//       <input
//         ref={searchRef}
//         type="text"
//         placeholder="Search dishes..."
//         value={search}
//         onChange={function (event) {
//           setSearch(event.target.value);
//         }}
//       />
//       <div>
//         <button
//           onClick={function () {
//             setCategory("All");
//           }}
//         >
//           All
//         </button>
//         <button
//           onClick={function () {
//             setCategory("Main");
//           }}
//         >
//           Main
//         </button>
//         <button
//           onClick={function () {
//             setCategory("Side");
//           }}
//         >
//           Side
//         </button>
//         <button
//           onClick={function () {
//             setCategory("Drink");
//           }}
//         >
//           Drink
//         </button>
//       </div>
//       <div>
//         {searchedDishes.map(function (dish) {
//           return (
//             <article key={dish.id}>
//               <h2>{dish.name}</h2>
//               <p>{dish.price} ETB</p>
//               {dish.spicy && <span> Spicy🌶️</span>}
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// export default App;
import Menu from "./components/Menu";
import DeliveryForm from "./components/DeliveryForm";
import "./App.css";

function App() {
  return (
    <div>
      <h2>Our Menu</h2>
      <header>
        <h2>Addis Eats</h2>
        <p>Main Ethiopian Dishes</p>
      </header>

      <Menu />

      <DeliveryForm />
    </div>
  );
}

export default App;
