import Link from "next/link";
import PTE_LOGO_FOOTER from "../pte-footer";
import { Skeleton } from "../ui/skeleton";


export default function FooterLoading({path}: {path: string}){
    return (
        <footer className={` gap-6 justify-center items-center p-6  ${path != '/' ? 'xl:px-12' : 'xl:px-0 container max-w-7xl mx-auto'} pt-0`}>
        <div className="md:flex hidden flex-col gap-12">
          <div className={`grid md:grid-cols-5  gap-6`}>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="">
                    <Skeleton className="bg-gray-300 h-[20px] w-[80px] mb-2"/>
                    <div className="space-y-1">
                        <Skeleton className="h-4 bg-gray-200 w-full" />
                        <Skeleton className="h-4 bg-gray-200 w-full" />
                        <Skeleton className="h-4 bg-gray-200 w-full" />
                        <Skeleton className="h-4 bg-gray-200 w-full" />
                        <Skeleton className="h-4 bg-gray-200 w-full" />
                    </div>
                </div>
            ))}
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
    )
}