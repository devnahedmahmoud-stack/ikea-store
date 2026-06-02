import { LOGIN_USERS } from "@/data/data";
import { User } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useUsersStore } from "./users.store";

type Result = {
  success: boolean;
  message?: string;
};
export type AuthStore = {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => Result;
  logout:()=>void
};

function existUser(email: string, password: string) {
  const usersStore = useUsersStore.getState().users;
  return usersStore.find(
    (user) =>
      user.email === email.trim().toLowerCase() && user.password === password,
  );
}

export const useAuthUserStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      currentUser: null,
      login: (email: string, password: string): Result => {
        const user = existUser(email, password);

        if (!user) {
          return {
            success: false,
            message: "Invalid Email or Password",
          };
        }
        set({ isAuthenticated: true, currentUser: user });
        return {
          success: true,
        };
      },
      logout: () => set({ isAuthenticated: false, currentUser: null }),
    }),
    {
      name: "auth-user-store",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        currentUser: state.currentUser,
      }),
    },
  ),
);
