import { ProductCard } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FavoriteItemQty = {
  productID: number;
  Qty: number;
};
export type UserFavorites = {
  userId: string;
  favoriteItems: ProductCard[];
  FavoriteItemsQty: FavoriteItemQty[];
};
type Result = {
  message: string;
};
type UsersFavoritesStore = {
  usersFavorites: UserFavorites[];
  addToFavorite: (user: string, favItem: ProductCard) => Result;
  removeFromFavorite: (user: string, favItem: ProductCard) => Result;
  existFavorite: (user: string, favItem: ProductCard) => boolean;
  getUserFavorites: (user: string) => UserFavorites | undefined;
  updateItemQty: (userId: string, id: number, qty: number) => void;
};
export const useUserFavorites = create<UsersFavoritesStore>()(
  persist(
    (set, get) => ({
      usersFavorites: [],
      addToFavorite: (user, favItem: ProductCard): Result => {
        set((state) => {
          const existUser = state.usersFavorites.find((u) => u.userId === user);

          if (existUser) {
            return {
              usersFavorites: state.usersFavorites.map((uv) =>
                uv.userId === user
                  ? {
                      ...uv,
                      favoriteItems: [...uv.favoriteItems, favItem],
                      FavoriteItemsQty: [
                        ...uv.FavoriteItemsQty,
                        { productID: favItem.id, Qty: 1 },
                      ],
                    }
                  : uv,
              ),
            };
          }

          return {
            usersFavorites: [
              ...state.usersFavorites,
              {
                userId: user,
                favoriteItems: [favItem],
                FavoriteItemsQty: [{ productID: favItem.id, Qty: 1 }],
              },
            ],
          };
        });

        return {
          message: `${favItem.title} was added to your favourites`,
        };
      },
      removeFromFavorite: (user, favItem): Result => {
        set((state) => {
          return {
            usersFavorites: state.usersFavorites.map((u: UserFavorites) =>
              u.userId === user
                ? {
                    ...u,
                    favoriteItems: [
                      ...u.favoriteItems.filter((fi) => fi.id !== favItem.id),
                    ],
                    FavoriteItemsQty: [
                      ...u.FavoriteItemsQty.filter(
                        (i) => i.productID != favItem.id,
                      ),
                    ],
                  }
                : u,
            ),
          };
        });
        return {
          message: `${favItem.title} was removed from your favourites`,
        };
      },
      existFavorite: (user, favItem): boolean => {
        const state = get();

        return !!state.usersFavorites
          .find((uf: UserFavorites) => uf.userId === user)
          ?.favoriteItems.find((item: ProductCard) => item.id === favItem.id);
      },
      getUserFavorites: (user): UserFavorites | undefined => {
        const state = get();

        return state.usersFavorites.find(
          (uf: UserFavorites) => uf.userId === user,
        );
      },
      updateItemQty: (userId, id: number, qty: number) => {
        set((state) => ({
          usersFavorites: state.usersFavorites.map((uv: UserFavorites) =>
            uv.userId == userId
              ? {
                  ...uv,
                  favoriteItems:
                    qty === 0
                      ? uv.favoriteItems.filter((item) => item.id !== id)
                      : uv.favoriteItems,
                  FavoriteItemsQty:
                    qty === 0
                      ? uv.FavoriteItemsQty.filter(
                          (item) => item.productID !== id,
                        )
                      : uv.FavoriteItemsQty.map((fiq) =>
                          fiq.productID === id ? { ...fiq, Qty: qty } : fiq,
                        ),
                }
              : uv,
          ),
        }));
      },
    }),
    { name: "users-favorites-store" },
  ),
);
