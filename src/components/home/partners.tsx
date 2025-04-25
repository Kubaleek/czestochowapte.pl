"use client";

import { GET_PARTNERS } from "@/graphql/query";
import { PartnersSectionsResponse } from "@/types/partners";
import { useQuery } from "@apollo/client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "../ui/marquee";

export default function Partners() {
  const { data } = useQuery<PartnersSectionsResponse>(GET_PARTNERS, {
    pollInterval: 5000,
  });

  const partners = data?.partners || [];


  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-3">
        <h2 className="flex items-center">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-2 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
          </svg>
          <span className="text-2xl sm:text-[28px] text-neutral-800 font-bold m-0">Partnerzy</span>
        </h2>
        <div className="relative flex w-full h-full flex-col items-center justify-center overflow-hidden ">
          <Marquee pauseOnHover className="[--duration:50s] flex items-center justify-center ">
          {partners.map((a, i) => (
            <a key={i} href={a.url}             className={cn(
              "relative  w-[138px] h-[98px] my-[15px] flex justify-center items-center mr-12 cursor-pointer overflow-hidden",
            )}>
              <Image src={`${process.env.NEXT_PUBLIC_APP_CMS}${a.image.url}`} alt={a.image.name} width={582} height={582}/>
            </a>
          ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
        {/* <div className="grid grid-cols-2 sm:grid-cols-5  lg:grid-cols-9 gap-12 my-[15px] items-center justify-center w-full">
          <a href={"https://www.deltologic.com/"} className="flex items-center justify-center">
            <Image src={"/partners1.webp"} alt={"deltalogic"} width={282} height={80} />
          </a>
          <a href={"https://empiriaiwiedza.pl/"} className="flex items-center justify-center">
            <Image src={"/partners2.webp"} alt={"empiriaiwiedza"} width={282} height={80} />
          </a>
          <a href={"https://www.gpw.pl/"} className="flex items-center justify-center">
            <Image src={"/partners3.webp"} alt={"gpw"} width={282} height={80} />
          </a>
          <a href={"https://pie.net.pl/"} className="flex items-center justify-center">
            <Image
              src={"/partners4.png"}
              alt={"polski instytut ekonomiczny"}
              width={282}
              height={80}
            />
          </a>
          <a href={"https://www.wib.org.pl/"} className="flex items-center justify-center">
            <Image
              src={"/partners5.webp"}
              alt={"Warszawski Instytut Bankowości"}
              width={282}
              height={80}
            />
          </a>
          <a href={"https://www.kas.de/pl/web/polen"} className="flex items-center justify-center">
            <Image
              src={"/partners6.webp"}
              alt="Fundacja Konrada Adenauera w Polsce"
              width={282}
              height={80}
            />
          </a>
          <a href={"https://inepan.pl/"} className="flex items-center justify-center">
            <Image
              src={"/partners7.webp"}
              alt="INE PAN"
              width={282}
              height={80}
            />
          </a>
          <a href={"https://nbp.pl/"} className="flex items-center justify-center">
            <Image
              src={"/partners8.webp"}
              alt="Narodowy Bank Polski"
              width={282}
              height={80}
            />
          </a>
          <a href={"https://www.gov.pl/"} className="flex items-center justify-center">
            <Image
              src={"/partners9.webp"}
                alt="Ministerstwo Edukacji i Nauki"
              width={282}
              height={80}
            />
          </a>
        </div> */}
      </div>
    </section>
  );
}
