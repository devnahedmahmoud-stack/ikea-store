"use client";
import { User02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useAuthUserStore } from "@/stores/authuser.stores";
import LoginProfileDialog from "./LoginProfileDialog";
import { useDialogStateStore } from "@/stores/dialogstate.store";
type LoginLinkProps = { closeMenu: () => void };
const LoginLink = ({ closeMenu }: LoginLinkProps) => {
  //const [open, setOpen] = useState(false);
  const { setIsOpen } = useDialogStateStore();
  const { currentUser } = useAuthUserStore();
  function btnClick() {
    closeMenu();
    setIsOpen(true);
  }
  return (
    <>
      {currentUser ? (
        <button
          className="flex gap-2 text-sm items-center py- cursor-pointer pr-3 hover:bg-black/10 rounded-full "
          onClick={() => {
            btnClick();
          }}
        >
          <p className="font rounded-full bg-black text-white xl:w-10 xl:h-10 w-8 h-8 flex items-center justify-center">
            {currentUser.firstName.charAt(0).toUpperCase()}
            {currentUser.lastName.charAt(0).toUpperCase()}
          </p>
          <p className="text-base xl:flex hidden">Hi {currentUser.firstName}</p>
        </button>
      ) : (
        <button
          className="flex gap-2 text-sm items-center py-2 cursor-pointer xl:px-6 hover:bg-black/10 rounded-full "
          onClick={() => btnClick()}
        >
          <div className="flex items-center justify-center gap-1">
            <HugeiconsIcon icon={User02Icon} strokeWidth={2} />
            <span className="xl:flex hidden"> Hi!Log in or sign up</span>
          </div>
        </button>
      )}

      <LoginProfileDialog />
    </>
  );
};

export default LoginLink;
