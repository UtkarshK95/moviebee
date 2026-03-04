"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { useWatchlist } from "@/context/WatchlistContext";
import type { ComponentType } from "react";

interface NavItem {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  IconActive: ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/",          label: "Home",     Icon: AiOutlineHome,    IconActive: AiFillHome       },
  { href: "/genre/action", label: "Browse",  Icon: MdOutlineExplore, IconActive: MdExplore        },
  { href: "/watchlist", label: "Watchlist", Icon: BsBookmark,       IconActive: BsBookmarkFill   },
];

export default function MobileNav() {
  const pathname = usePathname();
  const { watchlist } = useWatchlist();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      aria-label="Mobile navigation"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex"
    >
      {NAV_ITEMS.map(({ href, label, Icon, IconActive }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        const DisplayIcon = isActive ? IconActive : Icon;

        return (
          <Link
            key={href}
            href={href}
            className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs transition-colors duration-150 ${
              isActive
                ? "text-amber-500"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <div className="relative">
              <DisplayIcon className="text-xl" aria-hidden="true" />
              {label === "Watchlist" && mounted && watchlist.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold leading-none">
                  {watchlist.length > 9 ? "9+" : watchlist.length}
                </span>
              )}
            </div>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
