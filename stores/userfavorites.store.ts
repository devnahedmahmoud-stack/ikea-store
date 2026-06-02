
import { ProductCard } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserFavorites = {
  userId: string;
  favoriteItems: ProductCard[];
};
type Result = {
  message: string;
};
type UsersFavoritesStore = {
  usersFavorites: UserFavorites[];
  addToFavorite: (user: string, favItem: ProductCard) => Result;
  removeFromFavorite: (user: string, favItem: ProductCard) => Result;
  existFavorite: (user: string, favItem: ProductCard) => boolean;
  getUserFavorites:(user:string)=>UserFavorites | undefined
};
export const useUserFavorites = create<UsersFavoritesStore>()(
  persist(
    (set, get) => ({
      usersFavorites: [],
      addToFavorite: (user, favItem): Result => {
        set((state) => {
          const existUser = state.usersFavorites.find((u) => u.userId === user);

          if (existUser) {
            return {
              usersFavorites: state.usersFavorites.map((uv) =>
                uv.userId === user
                  ? {
                      ...uv,
                      favoriteItems: [...uv.favoriteItems, favItem],
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
      getUserFavorites:(user):UserFavorites | undefined=>{
        const state=get()
        
        return state.usersFavorites
          .find((uf: UserFavorites) => uf.userId === user)
      }
    }),
    { name: "users-favorites-store" },
  ),
);
