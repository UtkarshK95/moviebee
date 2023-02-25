import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <Link href="/">
        <h2 className="text-2xl">
          <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
            MovieBee
          </span>
          <span className="text-xl hidden sm:inline"> - An IMDb Clone</span>
        </h2>
      </Link>
      <div className="flex items-center space-x-5">
        <div className="flex">
          <MenuItem title="HOME" address="/" Icon={AiFillHome} />
          <MenuItem
            title="ABOUT"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </div>
      </div>
      <div className="flex space-x-2 flex-end">
        <DarkModeSwitch />
      </div>
    </div>
  );
}
