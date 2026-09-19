import { create } from "zustand";

export const useCartStore = create(function (set) {
  return {
    cart: [],

    addItem: function (item) {
      set(function (state) {
        const existingItem = state.cart.find(function (cartItem) {
          return cartItem.id === item.id;
        });

        if (existingItem) {
          return {
            cart: state.cart.map(function (cartItem) {
              if (cartItem.id === item.id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                };
              }

              return cartItem;
            }),
          };
        }

        return {
          cart: [
            ...state.cart,
            {
              ...item,
              quantity: 1,
            },
          ],
        };
      });
    },

    increaseQuantity: function (id) {
      set(function (state) {
        return {
          cart: state.cart.map(function (item) {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          }),
        };
      });
    },

    decreaseQuantity: function (id) {
      set(function (state) {
        return {
          cart: state.cart
            .map(function (item) {
              if (item.id === id) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }

              return item;
            })
            .filter(function (item) {
              return item.quantity > 0;
            }),
        };
      });
    },

    removeFromCart: function (id) {
      set(function (state) {
        return {
          cart: state.cart.filter(function (item) {
            return item.id !== id;
          }),
        };
      });
    },

    clearCart: function () {
      set({
        cart: [],
      });
    },
  };
});
