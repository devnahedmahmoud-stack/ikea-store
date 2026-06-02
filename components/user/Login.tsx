"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FieldError from "./FieldError";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading03FreeIcons } from "@hugeicons/core-free-icons";
import { Separator } from "../ui/separator";
import { useForm } from "react-hook-form";
import FieldPassword from "./FieldPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/LoginSchema";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type FormData = {
  email: string;
  password: string;
};
const Login = () => {
  const { login } = useAuthUserStore();
  const router = useRouter();
  const {
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    register,
    control,
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

   function onSubmit(data: FormData) {
    clearErrors("root");
    
    console.log(data);
    const result = login(data.email, data.password);

    if (!result.success) {
      setError("root", { message: result.message });
      return;
    }
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      router.push("/profile");
      reset();
      clearErrors();
    }
  }, [isSubmitSuccessful]);
  return (
    <section className="py-20 xl:px-40 lg:px-10 px-6 flex lg:flex-row flex-col xl:gap-20 gap-10">
      <div className="xl:w-[30%] lg:w-[40%]">
        <h2 className="text-2xl font-bold mb-4 ">Log in to your account</h2>
        <p className="text-sm text-black/80 xl:max-w-sm lg:max-w-md max-w-sm tracking-wide">
          Enjoy a more personalised experience without having to enter your
          details every time.
        </p>
      </div>

      <div className="grid flex-1 auto-rows-min gap-6 lg:px-4 px-0">
        <h2 className="text-lg font-bold mb-4 max-w-md lg:flex hidden ">
          Log in or join IKEA today to benefit from a more personalized
          experience
        </h2>
        <form
          className="grid gap-4 max-w-xl"
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
        <div className="flex items-center md:gap-2 gap-0.5">
          <Separator className="data-horizontal:w-1/3"></Separator>
          <p className="md:text-[16px] text-sm text-black/80">New at IKEA?</p>
          <Separator className="data-horizontal:w-1/3"></Separator>
        </div>
        <Link
          href="/create-account"
          className="h-13 max-w-xl font-bold flex items-center justify-center bg-background text-foreground border rounded-full border-black cursor-pointer hover:border-2 hover:bg-transparent"
        >
          Create account
        </Link>
      </div>
    </section>
  );
};

export default Login;
