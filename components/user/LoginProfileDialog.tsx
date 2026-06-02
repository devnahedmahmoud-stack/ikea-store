"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import FieldError from "./FieldError";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Separator } from "../ui/separator";
import FieldPassword from "./FieldPassword";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Loading03FreeIcons,
  
  Logout05Icon,
  
} from "@hugeicons/core-free-icons";
import { useEffect } from "react";
import { toast } from "sonner";
import ProfileActionLink from "./ProfileActionLink";
import ProfileLinks from "./ProfileLinks";
import { useDialogStateStore } from "@/stores/dialogstate.store";
import { usePathname, useRouter } from "next/navigation";

type LoginProfileDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
type FormData = {
  email: string;
  password: string;
};

function LoginProfileDialog() {
  const { login, currentUser, isAuthenticated, logout } = useAuthUserStore();
  const { isOpen, setIsOpen } = useDialogStateStore();
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    control,
    reset,
    clearErrors,
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    if (!isOpen) {
      reset();
      clearErrors();
    }
    if (isSubmitSuccessful && isOpen) {
      setIsOpen(false);
      toast.success(
        `${currentUser?.firstName} ${currentUser?.lastName} Login successful!`,
      );
      //router.push("/profile");
    }
  }, [isOpen, isSubmitSuccessful]);

  async function onSubmit(data: FormData) {
    clearErrors("root");
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const result = login(data.email, data.password);

    if (!result.success) {
      setError("root", { message: result.message });
      return;
    }

    reset();
  }
  function logOutandClose() {
    logout();
    setIsOpen(false);

    if (pathname.includes("/profile")) router.push("/profile/login");
  }
  if (isAuthenticated) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="px-2">
          <SheetHeader>
            <SheetTitle className="mt-6 text-3xl font-bold">
              Hi {currentUser?.firstName}
            </SheetTitle>
          </SheetHeader>
          <div className="md:px-5 px-3">
            <ProfileLinks fromDialog={true} />
            <SheetFooter className="p-2">
              <button
                className="p-4 my-4 underline flex items-center gap-4 cursor-pointer "
                onClick={logOutandClose}
              >
                <HugeiconsIcon icon={Logout05Icon} />
                Log out
              </button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="my-6">Log in to your account</SheetTitle>
          <SheetDescription className="text-sm text-black/80">
            Enjoy a more personalised experience without having to enter your
            details every time.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <form
            className="grid gap-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {errors.root && (
              <FieldError
                id="login-error"
                error={errors.root.message || ""}
                className="border p-2 text-base shadow-lg"
              />
            )}
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              inputMode="email"
              {...register("email")}
            />
            {errors.email && (
              <FieldError id="email-error" error={errors.email.message || ""} />
            )}
            <Label htmlFor="password">Password</Label>
            <FieldPassword control={control} name="password" />
            {errors.password && (
              <FieldError
                id="password-error"
                error={errors.password.message || ""}
              />
            )}
            <Link
              href="/reset-password"
              className="text-sm tracking-wide underline text-black/85"
            >
              Forget your password?
            </Link>
            <Button
              type="submit"
              className="h-13 text-white font-semibold cursor-pointer my-5"
            >
              {isSubmitting ? (
                <HugeiconsIcon
                  icon={Loading03FreeIcons}
                  className="animate-spin size-6"
                  strokeWidth={3}
                />
              ) : (
                "Log in"
              )}
            </Button>
          </form>
          <div className="flex items-center gap-2">
            <Separator className="data-horizontal:w-1/3"></Separator>
            <p className="text-[16px] text-black/80">New at IKEA?</p>
            <Separator className="data-horizontal:w-1/3"></Separator>
          </div>

          <SheetFooter className="p-2">
            <Link
              href="/create-account"
              className="h-13  font-bold flex items-center justify-center bg-background text-foreground border rounded-full border-black cursor-pointer hover:border-2 hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              Create account
            </Link>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default LoginProfileDialog;
