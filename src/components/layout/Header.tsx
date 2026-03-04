import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiFillHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between w-full p-4 md:p-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="pe-6 shrink-0">
          <h1 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 text-white">
              MovieBee
            </span>
            <span className="text-xl hidden sm:inline text-slate-600 dark:text-slate-300">
              {" "}— An IMDb Clone
            </span>
          </h1>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center">
          <MenuItem title="HOME" address="/" Icon={AiFillHome} />
          <MenuItem title="WATCHLIST" address="/watchlist" Icon={BsBookmark} />
        </nav>
      </div>
      <DarkModeSwitch />
    </header>
  );
}
