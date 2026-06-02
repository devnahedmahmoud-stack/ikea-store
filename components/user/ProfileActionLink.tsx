import { useDialogStateStore } from "@/stores/dialogstate.store";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { ReactNode } from "react";

type ProfileActionLinkProps = {
  href: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  fromDialog?: boolean;
};
const ProfileActionLink = ({
  href,
  title,
  subtitle,
  icon,
}: ProfileActionLinkProps) => {
  const { setIsOpen } = useDialogStateStore();
  return (
    <Link
      href={href}
      className="hover:underline md:px-5 px-1 py-4 flex items-center justify-between"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <span className="flex gap-4 items-center">
        {icon}
        <span>
          <p className="font-bold text-base tracking-tight">{title}</p>
          <p className="text-black/80 tracking-wide">{subtitle}</p>
        </span>
      </span>
      <HugeiconsIcon icon={ArrowRight01Icon} />
    </Link>
  );
};

export default ProfileActionLink;
