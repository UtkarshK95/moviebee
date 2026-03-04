import Link from "next/link";
import type { ComponentType } from "react";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: ComponentType<{ className?: string }>;
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-500 transition-colors duration-150">
        <Icon className="text-2xl sm:hidden mx-4" aria-hidden="true" />
        <p className="hidden sm:inline my-2 text-sm font-medium">{title}</p>
      </Link>
    </div>
  );
}
