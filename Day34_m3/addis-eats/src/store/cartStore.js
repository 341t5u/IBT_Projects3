import { create } from "zustand";
export const useCartStore = create((set, get) => ({
  cartItems: [],
  isCartOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addToCart: (dish, quantity = 1) => {
    set((state) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === dish.id,
      );
      if (existingIndex > -1) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingIndex].quantity += quantity;
        return { cartItems: updatedItems, isCartOpen: true };
      }
      return {
        cartItems: [...state.cartItems, { ...dish, quantity }],
      };
    });
  },
  updateQuantity: (id, amount) => {
    set((state) => ({
      cartItems: state.cartItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    }));
  },
  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => set({ cartItems: [] }),
  getTotalCount: () => {
    return get().cartItems.reduce((acc, item) => acc + item.quantity, 0);
  },
  getTotalPrice: () => {
    return get().cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  },
}));
