"use client";

import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_ALL_NAVS } from "@/graphql/query";
import { convertToLocalhost } from "@/lib/convertLocal";
import PTE_LOGO_FOOTER from "./LandingPage/icon/pte-footer";

export default function Footer() {
  const { loading, error, data } = useQuery<MenuQueryResponse>(GET_ALL_NAVS);

  const menuItems = data?.menu?.menuItems?.edges || [];
  const mainMenuItems = menuItems.filter((item) => item.node.parentId === null);

  return (
    <footer className="container max-w-7xl mx-auto gap-6 justify-center items-center p-4 xl:px-0 pt-0">
      <div className="sm:flex hidden flex-col gap-12">
        {loading ? (
          <div className="grid sm:grid-cols-5 gap-6 lg:grid-cols-5">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
                <ul className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <li key={i} className="h-3 w-20 bg-gray-200 rounded" />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : error ? null : (
          <div className={`grid sm:grid-cols-5 gap-6 lg:grid-cols-5`}>
            {mainMenuItems.map((item) => (
              <div key={item.node.label}>
                <h3 className="text-xl font-medium mb-2">{item.node.label}</h3>
                {item.node.childItems.edges.length > 0 ? (
                  <ul>
                    {item.node.childItems.edges.map((subItem) => (
                      <li key={subItem.node.label}>
                        <Link
                          href={convertToLocalhost(subItem.node.url)}
                          className={`text-xs text-[#2d2f2d] hover:underline transition-all ease-in duration-300`}
                        >
                          {subItem.node.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Link
                    href={convertToLocalhost(item.node.url)}
                    className={`text-xs text-[#2d2f2d] hover:underline transition-all ease-in duration-300`}
                  >
                    {item.node.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end items-center text-end ml-auto">
          <p className="text-end text-sm">
            © Polskie Towarzystwo Ekonomiczne - Wszelkie prawa zastrzeżone |{" "}
            <Link
              href={"https://pte.pl/aktualnosci/polityka-prywatnosci"}
              className="text-[#17822e] font-medium"
              aria-label="politykaPrywatności"
            >
              Polityka prywatności
            </Link>
          </p>
        </div>
      </div>
      <div className="flex sm:hidden flex flex-col gap-6">
        <PTE_LOGO_FOOTER />
        <p className="text-end text-sm">
          © Polskie Towarzystwo Ekonomiczne - Wszelkie prawa zastrzeżone |{" "}
          <Link
            href={"https://pte.pl/aktualnosci/polityka-prywatnosci"}
            className="text-[#17822e] font-medium"
            aria-label="politykaPrywatności"
          >
            Polityka prywatności
          </Link>
        </p>
      </div>
    </footer>
  );
}
