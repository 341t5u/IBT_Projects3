// import { useState, useContext, createContext } from "react";
// const cartContext = createContext(null);
// export function CartProvider({ children }) {
//   const [item, setItem] = useState([]);

//   function addItem(dish) {
//     setItem((currentItems) => [...currentItems, dish]);
//   }
//   function removeItem(id) {
//     setItem((currentItems) => currentItems.filter((item) => item.id !== id));
//   }
//   function clearCart() {
//     setItem([]);
//   }
//   return (
//     <cartContext.Provider
//       value={{
//         items,
//         addItem,
//         removeItem,
//         clearCart,
//       }}
//     >
//       {children}
//     </cartContext.Provider>
//   );
// }
// export function useCart() {
//   const context = useContext(cartContext);
//   if (context === null) {
//     throw new Error("useCart must be used inside a CartProvider");
//   }
//   return context;
// }
