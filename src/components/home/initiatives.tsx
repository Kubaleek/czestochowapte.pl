"use client"

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_INITIATIVES } from "@/graphql/query";
import { InitiativeSectionsResponse } from "@/types/initiative";

export default function Initiatives() {

  const {data} = useQuery<InitiativeSectionsResponse>(GET_INITIATIVES, {
    pollInterval: 5000,
  })

  const initiative = data?.inicjatywySekcjas || [];

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-2 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
          </svg>
          <span className="text-2xl sm:text-[28px] text-neutral-800 font-bold m-0">Inicjatywy</span>
        </h1>
      </div>
      <div className="relative bg-white  rounded-[10px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mx-auto items-center w-full">
          {initiative.map((a, i) => (
            <Link key={i} href={a.url}>
              <Image src={`${process.env.NEXT_PUBLIC_APP_CMS}${a.image.url}`} className="max-w-full h-auto" alt={a.image.name} width={282} height={80} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
