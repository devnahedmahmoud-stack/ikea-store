import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductCard } from "@/types/types";


export interface CartItem {
  product: ProductCard;
  quantity: number;
}

type Result = {
  message: string;
};
interface MultiUserCartStore {
  // Map of userId -> CartItem[]
  userCarts: Record<string, CartItem[]>;
  currentUserId: string;

  // User management
  setCurrentUserId: (userId: string | null) => void;
  getCartItems: () => CartItem[];

  // Cart actions
  addToCart: (product: ProductCard, quantity?: number) => Result;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (product: ProductCard) => Result;
  clearCart: () => void;
  
  // Optional: Merge guest cart into user cart upon login
  mergeGuestCartToUser: (userId: string) => void;
}

const GUEST_KEY = "guest";

export const useShoppingCartStore = create<MultiUserCartStore>()(  
  persist(
    (set, get) => ({
      userCarts: {
        [GUEST_KEY]: [],
      },
      currentUserId: GUEST_KEY,

      setCurrentUserId: (userId) =>
        set({ currentUserId: userId || GUEST_KEY }),

      // Helper to retrieve active user's cart items
      getCartItems: () => {
        const { userCarts, currentUserId } = get();
        return userCarts[currentUserId] || [];
      },

      addToCart: (product, quantity = 1) =>{
        set((state) => {
          const userId = state.currentUserId;
          const currentItems = state.userCarts[userId] || [];

          const existingItemIndex = currentItems.findIndex(
            (item) => item.product.id === product.id
          );

          let updatedItems: CartItem[];

          if (existingItemIndex > -1) {
            updatedItems = [...currentItems];
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: updatedItems[existingItemIndex].quantity + quantity,
            };
          } else {
            updatedItems = [...currentItems, { product, quantity }];
          }

          return {
            userCarts: {
              ...state.userCarts,
              [userId]: updatedItems,
            },
          };
        });
         return {
          message: `${product.title} was added to your bag`,
        };
      }
        ,

      incrementQuantity: (id) =>
        set((state) => {
          const userId = state.currentUserId;
          const currentItems = state.userCarts[userId] || [];

          return {
            userCarts: {
              ...state.userCarts,
              [userId]: currentItems.map((item) =>
                item.product.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            },
          };
        }),

        decrementQuantity: (id) =>
  set((state) => {
    const userId = state.currentUserId;
    const currentItems = state.userCarts[userId] || [];

    const updatedItems = currentItems
      .map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    return {
      userCarts: {
        ...state.userCarts,
        [userId]: updatedItems,
      },
    };
  }),

  updateQuantity: (id, quantity) =>
  set((state) => {
    const userId = state.currentUserId;
    const currentItems = state.userCarts[userId] || [];

    const updatedItems = currentItems
      .map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      )
      .filter((item) => item.quantity > 0);

    return {
      userCarts: {
        ...state.userCarts,
        [userId]: updatedItems,
      },
    };
  }),

      removeItem: (product):Result =>{
        set((state) => {
          const userId = state.currentUserId;
          const currentItems = state.userCarts[userId] || [];

          return {
            userCarts: {
              ...state.userCarts,
              [userId]: currentItems.filter((item) => item.product.id !== product.id),
            },
          };
        });
        return {
          message:`${product.title} was removed from your favourites`,
        }
      }
      ,

      clearCart: () =>
        set((state) => ({
          userCarts: {
            ...state.userCarts,
            [state.currentUserId]: [],
          },
        })),

      // Helper to combine items when a guest logs in
      mergeGuestCartToUser: (userId) =>
        set((state) => {
          const guestItems = state.userCarts[GUEST_KEY] || [];
          const userItems = state.userCarts[userId] || [];

          const mergedItems = [...userItems];

          guestItems.forEach((guestItem) => {
            const index = mergedItems.findIndex(
              (item) => item.product.id === guestItem.product.id
            );
            if (index > -1) {
              mergedItems[index].quantity += guestItem.quantity;
            } else {
              mergedItems.push(guestItem);
            }
          });

          return {
            currentUserId: userId,
            userCarts: {
              ...state.userCarts,
              [userId]: mergedItems,
              [GUEST_KEY]: [], // Clear guest cart after merge
            },
          };
        }),
    }),
    {
      name: "shopping-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);