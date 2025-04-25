"use client";

import Link from "next/link";
import PTE_LOGO_FOOTER from "./pte-footer";
import { useQuery } from "@apollo/client";
import { GET_PAGES } from "@/graphql/query";
import { PagesResponse } from "@/types/pages";
import { usePathname } from "next/navigation";
import FooterLoading from "./loading/footer-loading";

export default function Footer() {
  const { data } = useQuery<PagesResponse>(GET_PAGES, {
    pollInterval: 5000,
  });


  const pages = data?.pages || [];

  const path = usePathname();
  
  if(!data){
    <FooterLoading path={path} />
  }

  // Grupowanie stron po nazwie kategorii
  const groupedByCategory: Record<string, typeof pages> = {};
  const standalonePages: typeof pages = [];

  pages.forEach((page) => {
    if (page.category?.name) {
      const categoryName = page.category.name;
      if (!groupedByCategory[categoryName]) {
        groupedByCategory[categoryName] = [];
      }
      groupedByCategory[categoryName].push(page);
    } else {
      standalonePages.push(page);
    }
  });
  return (
    <footer className={` gap-6 justify-center items-center p-6  ${path != '/' ? 'xl:px-12' : 'xl:px-0 container max-w-7xl mx-auto'} pt-0`}>
      <div className="md:flex hidden flex-col gap-12">
        <div className={`grid md:grid-cols-5 gap-6`}>
          {Object.entries(groupedByCategory).map(([category, pages]) => (
            <div key={category}>
              <h2 className="text-xl font-medium mb-2">{category}</h2>
              <ul className="space-y-1">
                {pages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`} className="text-xs text-[#2d2f2d] hover:underline transition-all ease-in duration-300">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {standalonePages.length > 0 && (
            <div>
              <h4 className="text-xl font-medium mb-2">Inne</h4>
              <ul className="space-y-1">
                {standalonePages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`} className="text-xs text-[#2d2f2d] hover:underline transition-all ease-in duration-300">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-end items-center text-end ml-auto">
          <p className="text-end text-sm">
            © Polskie Towarzystwo Ekonomiczne - Wszelkie prawa zastrzeżone |{" "}
            <Link href={"https://pte.pl/aktualnosci/polityka-prywatnosci"} className="text-[#17822e] font-medium" aria-label="politykaPrywatności">
              Polityka prywatności
            </Link>
          </p>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-6">
        <PTE_LOGO_FOOTER />
        <p className="text-end text-sm">
          © Polskie Towarzystwo Ekonomiczne - Wszelkie prawa zastrzeżone |{" "}
          <Link href={"https://pte.pl/aktualnosci/polityka-prywatnosci"} className="text-[#17822e] font-medium" aria-label="politykaPrywatności">
            Polityka prywatności
          </Link>
        </p>
      </div>
    </footer>
  );
}
