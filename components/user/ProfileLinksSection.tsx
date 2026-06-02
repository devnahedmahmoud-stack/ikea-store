import ProfileLinks from "./ProfileLinks";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logout05Icon } from "@hugeicons/core-free-icons";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { useRouter } from "next/navigation";

const ProfileLinksSection = () => {
  const { logout } = useAuthUserStore();
  const router = useRouter();
  function logOutandClose() {
    logout();
    router.push("/profile/login");
  }
  return (
    <div className="lg:w-[45%] w-full ">
      <ProfileLinks fromDialog={false} />
      <button
        className="p-4 my-4 underline flex items-center gap-4 cursor-pointer "
        onClick={logOutandClose}
      >
        <HugeiconsIcon icon={Logout05Icon} />
        Log out
      </button>
    </div>
  );
};

export default ProfileLinksSection;
