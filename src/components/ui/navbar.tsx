"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_ALL_NAVS } from "@/graphql/query";
import { useState } from "react";
import { convertToLocalhost } from "@/lib/convertLocal";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/shadcn/drawer";
export default function Navbar() {
  const { loading, error, data } = useQuery<MenuQueryResponse>(GET_ALL_NAVS);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const handleMouseEnter = (category: string) => setOpenCategory(category);
  const handleMouseLeave = () => setOpenCategory(null);
  const [expanded, setExpanded] = useState(false);
  const menuItems = data?.menu?.menuItems?.edges || [];

  const toggleMenu = () => setExpanded((prev) => !prev);
  const mainMenuItems = menuItems.filter((item) => item.node.parentId === null);

  const path = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpanded(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="hidden text-[#fafafa] text-base px-6 lg:flex mx-auto bg-[#17822e] backdrop-blur-lg w-full shadow-sm py-3">
        <div className="container max-w-[1280px] mx-auto flex justify-between items-center">
          {path != "/" ? (
            <Link href="/" className="flex items-center">
              <svg
                version="1.1"
                viewBox="139.31 0 92.39 92.39"
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                height="36px"
                style={{ zIndex: 1 }}
              >
                <path
                  id="mark"
                  d="m 159.2838,1.6227 h 52.0768 l 18.7535,19.3304 V 71.7312 L 211.3606,90.7731 H 158.9953 L 140.9632,72.1641 V 20.5202 Z M 158.3279,0 h 53.9728 l 19.4362,20.034 V 72.6608 L 212.3007,92.3959 H 158.0289 L 139.3404,73.1094 V 19.5853 Z m 2.0744,3.5217 h 49.8582 l 17.9545,18.5068 v 48.615 L 210.2605,88.874 H 160.1261 L 142.8621,71.0578 V 21.6141 Z m 1.7896,3.0385 h 46.3086 l 16.6761,17.1892 V 68.903 L 208.5003,85.8356 H 161.9354 L 145.9007,69.2879 V 23.3645 Z m 0.2995,49.062 0.0345,12.9317 c 2e-4,0.0236 -1e-4,0.0865 0.0374,0.0796 0.315,-0.0575 3.4404,1.9553 1.811,2.3231 h -11.9375 c -0.9584,-0.7835 2.5356,-2.4873 2.7094,-2.4829 l 0.002,-40.4845 c 0,-0.0168 -0.002,-0.0349 -0.0104,-0.0401 -0.404,-0.2688 -1.4161,-0.4681 -1.6291,-1.61 l 9.967,-0.0118 c 1.402,-0.0346 3.1725,0.0512 3.8756,0.2212 3.0516,0.7383 5.0129,2.1187 6.6311,3.949 1.5889,1.797 3.2308,4.3501 3.9136,7.6819 0.4922,2.4021 0.5229,3.3976 0.1612,5.2122 -0.8424,4.2238 -3.1261,7.3829 -4.9724,8.7956 -2.857,2.1859 -6.141,3.3049 -10.6087,3.4445 l -1e-4,-0.01 z m -0.0652,-24.5174 0.0529,19.8688 0.1044,0.0443 2e-4,0.006 c 4.3544,0.9166 8.3632,-5.121 8.2183,-9.3688 -0.1486,-4.355 -2.1995,-7.8568 -5.4019,-10.4275 -0.223,-0.1789 -1.6305,-0.457 -2.9739,-0.1224 z m 26.5053,-11.7084 0.005,57.115 c 0,0.4721 2.129,1.142 2.193,3.1987 l -12.9306,-0.0405 c -0.3296,-1.0531 1.0156,-2.3631 2.5857,-3.3743 L 180.7455,19.2421 166.129,19.2013 c -0.0969,-3e-4 -0.777,1.3298 -1.3128,1.4094 -0.4237,0.063 -0.6138,-0.1676 -0.6189,-0.4976 l -0.0239,-5.7621 43.3495,0.0565 c 0.0394,1.3109 0.1194,3.3878 0.0716,5.7629 -0.0135,0.6728 -0.3962,1.0735 -1.1829,0.1991 -0.3001,-0.3336 -0.4866,-1.0649 -1.3268,-1.0604 z m 14.5127,31.1838 -0.003,15.754 12.0468,0.0347 c 0.0754,0.0232 1.7213,-2.2891 2.7159,-1.5574 l -0.0128,5.8747 -26.2648,0.0649 c -0.4451,-2.3202 4.2196,-3.7435 4.3053,-5.0043 0.3424,-5.0242 0.1499,-10.1781 0.1499,-15.2242 l -2.0722,0.008 c -0.0355,1e-4 -2.4485,2.3378 -2.4439,1.3901 l 0.0369,-7.6299 c 0.005,-0.9925 2.2889,1.2566 2.3633,1.2566 l 2.1159,-0.004 0.035,-17.3445 c 0,-0.007 -2.2423,-0.7622 -1.7699,-1.7098 l 23.7696,0.034 0.0233,5.7627 c -0.2869,1.1974 -2.4419,-1.0172 -2.5692,-1.3005 l -12.4337,-0.003 0.0457,14.5531 12.1754,-0.0187 c 0.0928,-1e-4 1.8934,-2.5245 2.6821,-1.3565 v 8.5351 c -0.7099,1.2527 -2.3852,-2.1358 -2.6373,-2.1355 z"
                  style={{ fill: "rgb(255, 255, 255)", fillRule: "evenodd" }}
                />
              </svg>
              <div className="pl-2">
                <p className="m-0 LogoFontText text-xs font-bold text-white">Oddział w</p>
                <p className="m-0 LogoFontText text-xs font-bold text-white">Częstochowie</p>
              </div>
            </Link>
          ) : null}
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 text-gray-200 animate-spin fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : error ? null : (
            <ul className="flex gap-[16px]">
              {mainMenuItems.map((item) => (
                <li
                  onMouseEnter={() => handleMouseEnter(item.node.label)}
                  onMouseLeave={handleMouseLeave}
                  key={`${item.node.label}#`}
                  className="relative"
                >
                  {item.node.childItems.edges.length > 0 ? (
                    <div className="group relative px-[6px]">
                      <button className="relative items-center group">
                        {item.node.label}
                        <span className="absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      </button>
                      <AnimatePresence>
                        {openCategory === item.node.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2, ease: "linear" }}
                            onMouseEnter={() => handleMouseEnter(item.node.label)}
                            onMouseLeave={handleMouseLeave}
                            className="absolute top-auto -left-3 overflow-hidden z-10 hidden w-64 space-y-3 bg-white py-2 shadow-md border group-hover:block shadow-lg rounded-md p-4"
                          >
                            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                            {item.node.childItems.edges.map((subItem) => {
                              const subItemPath = new URL(convertToLocalhost(subItem.node.url))
                                .pathname;
                              const isActive = path === subItemPath;

                              return (
                                <Link
                                  key={`${subItem.node.label}#`}
                                  href={`${subItemPath}`}
                                  className={`block text-black hover:underline  ${
                                    isActive ? "text-green-700" : ""
                                  }`}
                                >
                                  {subItem.node.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={convertToLocalhost(item.node.url)} className="px-[6px] group">
                      {item.node.label}
                      <span className="absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
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
      </div>
      <div className="sticky top-0 lg:hidden shadow w-full p-4 bg-[#f9f2eb] border-b-2 border-[#333]/25">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center">
              <Image
                src={"/Logo_PTE_pionowe_Czestochowa.png"}
                alt="PTECzestochowaLogo"
                width={90}
                height={90}
              />
            </Link>
          </div>
          <button aria-label="open" onClick={toggleMenu}>
            <Menu className="text-green-700" />
          </button>
        </div>
        <Drawer open={expanded} onOpenChange={toggleMenu}>
          <DrawerContent className="flex lg:hidden overflow-hidden  mt-0 !bg-[rgb(249, 242, 235)]">
            <DrawerHeader className="p-0 mt-0">
              <div className="flex items-center gap-4">
                <DrawerTitle className="text-xs invisible hidden text-[#17822e] font-medium text-left"></DrawerTitle>
                <DrawerDescription aria-description={undefined} />
              </div>
              <DrawerClose asChild className="flex items-end justify-end p-4 py-2">
                <button aria-label="close" className="text-green-700 p-2">
                  <X />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <div className="space-y-6 py-5 text-center overflow-auto">
              {mainMenuItems.map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <h2 className="text-xl font-bold">{item.node.label}</h2>
                  {item.node.childItems.edges.length > 0 ? (
                    <ul className="space-y-3">
                      {item.node.childItems.edges.map((subItem, i) => (
                        <li key={i} className="block">
                          <Link href={convertToLocalhost(subItem.node.url)} className="">
                            {subItem.node.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Link href={convertToLocalhost(item.node.url)}>{item.node.label}</Link>
                  )}
                </div>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
