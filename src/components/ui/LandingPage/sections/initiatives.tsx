import { Separator } from "@/components/shadcn/separator";
import Image from "next/image";

export default function InitiativesSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="square"
            className="inline-block text-[#17822e] text-[12px] text-sm mr-2 h-3 align-middle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"
            ></path>
          </svg>
          <span className="text-2xl sm:text-[28px] text-black font-bold m-0">Inicjatywy</span>
        </h1>
        <div className="relative bg-white p-[20px] rounded-[10px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto gap-6 items-center w-full">
            <a href="https://owe.pte.pl/">
              <Image
                src={"/olimpiada_wiedzy_ekonomicznej.webp"}
                className="max-w-full h-auto"
                alt="olimpiada_wiedzy_ekonomicznej"
                width={282}
                height={80}
              />
            </a>
            <a href="https://ekonomista.pte.pl/">
              <Image
                src={"/ekonomista.webp"}
                alt="ekonomista"
                className="max-w-full h-auto"
                width={282}
                height={80}
              />
            </a>
            <a href="https://pte.pl/czasopisma/biuletyn">
              <Image
                src={"/biuletyn.webp"}
                alt="biuletyn"
                className="max-w-full h-auto"
                width={282}
                height={80}
              />
            </a>
            <a href="/kongres-mlodych-ekonomistow">
              <Image
                src={"/kongres ekonomistów polskich.webp"}
                alt="kongres ekonomistów polskich"
                className="max-w-full h-auto"
                width={282}
                height={80}
              />
            </a>
            <a href="https://ksiazkiekonomiczne.pte.pl/">
              <Image
                src={"/ksiazki.webp"}
                alt="ksiazki"
                className="max-w-full h-auto"
                width={282}
                height={80}
              />
            </a>
          </div>
        </div>
      </div>
      <Separator className="bg-green-700 my-[45px]" />
    </section>
  );
}
