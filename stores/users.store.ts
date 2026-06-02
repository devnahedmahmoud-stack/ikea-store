import { LOGIN_USERS } from "@/data/data";
import { User } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UsersStore = {
  users: User[];
  addUser: (user: User) => void;
};
export const useUsersStore = create<UsersStore>()(
  persist(
    (set) => ({
      users: LOGIN_USERS,
      addUser: (user) =>
        set((state) => ({ users: [...state.users, user] })),
    }),
    { name: "users-store" },
  ),
);
