import { AsideProps } from "@/types/types";
import Link from "next/link";

export default function Aside({ filteredPages, path }: AsideProps) {
  return (
    <aside className="col-span-12 md:col-span-4 xl:col-span-3 flex flex-col gap-2 py-[10px] px-[10px]">
      <p>
        <Link href="/" className="flex flex-row items-center group lg:hover:underline transition-all ease duration-300 !font-light !text-[16px]">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-fw inline-block text-[#2d2f2d] text-[12px] mx-[3px] h-[1.25em] mr-2 transition-transform duration-300 group-hover:translate-x-[-2px] group-hover:text-[#17842f]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path>
          </svg>
          Powrót do strony głównej
        </Link>
      </p>
      <div className="p-3 px-4 py-3 relative rounded border border-[#17842f] bg-white">
        <ul className="flex flex-col space-y-3 px-2 py-2 justify-center">
          {filteredPages.map((a, i) => (
            <li key={i}>
              <Link href={`/${a.slug}`} className={`text-sm ${i === 0 ? "pt-0" : "py-[15px]"} relative transition-all ease-linear duration-300 rounded ${path === `/${a.slug}` ? "text-[#17842f] underline" : "hover:underline hover:text-[#17842f]"}`}>
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
