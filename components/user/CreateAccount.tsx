"use client";
import ContainerProvider from "@/components/Providers/ContainerProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FieldError from "@/components/user/FieldError";
import FieldPassword from "@/components/user/FieldPassword";
import { CreateAccountSchema } from "@/schemas/CreateAccountSchema";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { useUsersStore } from "@/stores/users.store";
import { User } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircleIcon,
  Loading03FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type SubmittedData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  privacy: boolean;
};

const CreateAccount = () => {
  const { users, addUser } = useUsersStore();
  const { login, currentUser, isAuthenticated } = useAuthUserStore();
  const [newAddedUser, setNewAddedUser] = useState<null | User>(null);
  const [existUser,setExistUser]=useState<boolean>(false)
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    control,
    reset,
    clearErrors,
    setError,
  } = useForm<SubmittedData>({
    resolver: zodResolver(CreateAccountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      privacy: false,
    },
    mode: "all",
  });

  async function onSubmit(data: SubmittedData) {
    const existAccount:boolean = users.some(
      (user) => user.email === data.email.trim().toLowerCase(),
    );
    if (existAccount) {
      setError("email", { message: "An account matching this email already exist."        
      });
      setExistUser(existAccount)
      return;
    }
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const newUser: User = {
      id: crypto.randomUUID(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email.trim().toLowerCase(),
      password: data.password,
    };
    addUser(newUser);
    setNewAddedUser(newUser);
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      const result = login(
        newAddedUser?.email || "",
        newAddedUser?.password || "",
      );
      router.push("/profile");
    }
  }, [newAddedUser,isSubmitSuccessful]);
  return (
    <ContainerProvider>
      <section className="lg:flex xl:gap-15 lg:gap-10">
        <div className="xl:w-1/3 lg:w-1/2 w-full xl:px-10 lg:px-2 space-y-4">
          <h1 className="text-3xl font-bold tracking-wide">
            Create an IKEA account
          </h1>
          <p className="text-black/75 text-sm tracking-wide">
            Already have an account?
            <Link href="/profile/login" className="underline font-medium">
              {" "}
              Log in here
            </Link>
          </p>
        </div>
        <div className="xl:w-2/3 lg:w-1/2 w-full xl:px-10 lg:px-2">
          <h3 className="text-lg font-bold tracking-wide max-w-xl lg:flex hidden">
            From your profile, you will find all information connected to your
            account. And it’s free to join!
          </h3>
          <div className="grid flex-1 auto-rows-min  mt-10 w-full ">
            <form className="grid" onSubmit={handleSubmit(onSubmit)} noValidate>
              {errors.root && (
                <FieldError
                  id="login-error"
                  error={errors.root.message || ""}
                  className="border p-2 text-base shadow-lg"
                />
              )}
              <Label htmlFor="firstName">
                <span className="text-red-500 font-bold text-xl text-center">
                  *
                </span>
                <span className="text-black/70">First name</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                className="lg:max-w-xl w-full mb-2"
                {...register("firstName")}
              />
              {errors.firstName && (
                <FieldError
                  id="firstName-error"
                  error={errors.firstName.message || ""}
                  className="flex items-center"
                  icon={
                    <HugeiconsIcon
                      icon={AlertCircleIcon}
                      className=" text-white fill-destructive"
                    />
                  }
                />
              )}

              <Label htmlFor="lastName" className="mt-4">
                <span className="text-red-500 font-bold text-xl text-center">
                  *
                </span>
                <span className="text-black/70">Last name</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                className="lg:max-w-xl w-full  mb-2"
                {...register("lastName")}
              />
              {errors.lastName && (
                <FieldError
                  id="lastName-error"
                  error={errors.lastName.message || ""}
                  className="flex items-center"
                  icon={
                    <HugeiconsIcon
                      icon={AlertCircleIcon}
                      className=" text-white fill-destructive"
                    />
                  }
                />
              )}

              <Label htmlFor="email" className="mt-4">
                <span className="text-red-500 font-bold text-xl text-center">
                  *
                </span>
                <span className="text-black/70">Email address</span>
              </Label>
              <Input
                id="email"
                type="email"
                inputMode="email"
                className="lg:max-w-xl w-full mb-2"
                {...register("email")}
              />
              {errors.email && (
                <FieldError
                  id="email-error"
                  error={errors.email.message || ""}
                  className="flex items-center"
                  icon={
                    <HugeiconsIcon
                      icon={AlertCircleIcon}
                      className=" text-white fill-destructive"
                    />
                  }
                  existAccount={existUser}
                />
              )}

              <Label htmlFor="password" className="mt-4">
                <span className="text-red-500 font-bold text-xl text-center">
                  *
                </span>
                <span className="text-black/70">Password</span>
              </Label>
              <FieldPassword
                control={control}
                name="password"
                className="lg:max-w-xl w-full mb-2"
              />
              {errors.password && (
                <FieldError
                  id="password-error"
                  error={errors.password.message || ""}
                  className="flex items-center"
                  icon={
                    <HugeiconsIcon
                      icon={AlertCircleIcon}
                      className=" text-white fill-destructive"
                    />
                  }
                />
              )}

              <div className="lg:max-w-xl w-full flex items-center mt-8 mb-2 relative group">
                <Input
                  id="privacy"
                  type="checkbox"
                  className="h-5 w-5 hover:cursor-pointer"
                  {...register("privacy")}
                />

                {/* {!isChecked && (
                  <span>
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="size-5 text-gray-400  absolute left-0 top-0.5 opacity-0 group-hover:opacity-100 duration-300"
                    />
                  </span>
                )}  */}
                <Label
                  htmlFor="privacy"
                  className="text-base text-black/70 pl-3 flex gap-0 flex-wrap  hover:cursor-pointer"
                >
                  I have read and understood the
                  <Link
                    href="/privacy-policy"
                    className="underline text-sm pl-1 hover:text-black/80"
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              {errors.privacy && (
                <FieldError
                  id="privacy-error"
                  error={errors.privacy.message || ""}
                  className="flex items-center"
                  icon={
                    <HugeiconsIcon
                      icon={AlertCircleIcon}
                      className=" text-white fill-destructive"
                    />
                  }
                />
              )}

              <Button
                type="submit"
                //disabled={!isDirty || !isValid || isSubmitting}
                className="h-13 lg:max-w-xl w-full text-white font-semibold cursor-pointer my-5"
              >
                {isSubmitting ? (
                  <HugeiconsIcon
                    icon={Loading03FreeIcons}
                    className="animate-spin size-6"
                    strokeWidth={3}
                  />
                ) : (
                  "Create account"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </ContainerProvider>
  );
};

export default CreateAccount;
