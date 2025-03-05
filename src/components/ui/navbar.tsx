"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_ALL_NAVS } from "@/graphql/query";
import { convertToLocalhost } from "@/lib/convertLocal";

export default function Navbar() {
  const { loading, error, data } = useQuery<MenuQueryResponse>(GET_ALL_NAVS);

  const menuItems = data?.menu?.menuItems?.edges || [];

  const mainMenuItems = menuItems.filter((item) => item.node.parentId === null);

  return (
    <div>
      <nav className="hidden text-[#fafafa] text-base px-6 lg:flex mx-auto bg-[#17822e] sticky top-0 w-full z-50 shadow-sm py-3">
        <div className="container max-w-[1280px] mx-auto flex justify-between items-center">
          {loading ? null : error ? null : (
            <ul className="flex gap-[16px]">
              {mainMenuItems.map((item) => (
                <li key={item.node.label} className="flex items-center relative">
                  {item.node.childItems.edges.length > 0 ? (
                    <div className="group relative px-[6px]">
                      <button className="inline-flex items-center group">
                        {item.node.label}
                        <span
                        className={`absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100`}
                      />
                      </button>
                      <div className="absolute left-0 z-10 hidden w-56 space-y-3 bg-white py-2 shadow-md border group-hover:block shadow-lg rounded-md p-4">
                        {item.node.childItems.edges.map((subItem) => (
                          <Link
                            key={subItem.node.label}
                            href={`${convertToLocalhost(subItem.node.url)}`}
                            className="hover:underline block text-black"
                          >
                            {subItem.node.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={convertToLocalhost(item.node.url)} className="px-[6px] group">
                      {item.node.label}
                      <span
                        className={`absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100`}
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
          <div className="flex gap-[168px] justify-between">
            <div className="relative border-2 px-1 py-4 border-[#fff] items-center flex justify-center rounded-md aspect-square">
              <Search className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <Link
              href="https://panel.pte.pl/adm_program/overview.php?id="
              className="text-white hover:underline flex items-center border-2 border-[#fff] rounded-md px-3 py-1"
              aria-label="Go to Panel PTE"
            >
              Panel PTE
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
