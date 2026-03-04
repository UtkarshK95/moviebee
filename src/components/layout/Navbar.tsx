import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-between dark:bg-gray-600 bg-amber-500 lg:text-lg p-4">
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        }
      >
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
