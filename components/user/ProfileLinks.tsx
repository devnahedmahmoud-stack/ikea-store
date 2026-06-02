import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete02Icon,
  Edit04Icon,
  Home07FreeIcons,
  LockFreeIcons,
  Note01Icon,
  User02Icon,
} from "@hugeicons/core-free-icons";
import ProfileActionLink from "./ProfileActionLink";
import { Separator } from "../ui/separator";

type props={
  fromDialog:boolean,
  open?:boolean,
  onOpenChange?: (open: boolean) => void;
}
const ProfileLinks = ({fromDialog}:props) => {
  return (
    <div >
      {fromDialog ?<ProfileActionLink
        title="Account home"
        subtitle="Profile overview"
        href="/profile"
        icon={<HugeiconsIcon icon={Home07FreeIcons} />}
      />:<p className="font-bold text-base mb-4">Your profile</p>}
      
      <Separator className="data-horizontal"></Separator>
      <ProfileActionLink
        title="Profile details"
        subtitle="View and edit your profile details"
        href="/profile/profile-details"
        icon={<HugeiconsIcon icon={User02Icon} />}
      />
      <Separator className="data-horizontal"></Separator>
      <ProfileActionLink
        title="Addresses"
        subtitle="Manage your saved addresses"
        href="/profile/addresses"
        icon={<HugeiconsIcon icon={Note01Icon} />}
      />
      <Separator className="data-horizontal"></Separator>
      <ProfileActionLink
        title="Planner designs"
        subtitle="View and edit your saved designs"
        href="/profile/planners"
        icon={<HugeiconsIcon icon={Edit04Icon} />}
      />
      <Separator className="data-horizontal"></Separator>
      <ProfileActionLink
        title="Change password"
        subtitle="Requires current password"
        href="/profile/change-password"
        icon={<HugeiconsIcon icon={LockFreeIcons} />}
      />
      <Separator className="data-horizontal"></Separator>
      <ProfileActionLink
        title="Delete account"
        subtitle="Leave when ever you want"
        href="/profile/delete-account"
        icon={<HugeiconsIcon icon={Delete02Icon} />}
      />

      <Separator className="data-horizontal"></Separator>
    </div>
  );
};

export default ProfileLinks;
