import Image from "next/image";

export default function News() {
  return (
    <section className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
      <h2 className="flex items-center">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-2 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
        </svg>
        <span className="text-2xl sm:text-[28px] text-neutral-800 font-bold m-0">Aktualności</span>
      </h2>
      <div className="flex flex-col gap-8">
        <div className="bg-[#f8f8f8] rounded relative overflow-hidden bg-opacity-50 ">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-4  items-center justify-center ">
              <Image src="/news1.webp" alt="Obrazek Aktualności" width={1000} height={1000} className="object-cover rounded-lg h-auto sm:h-full w-full sm:w-auto flex items-center justify-center" />
            </div>
            <div className="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-8 w-full flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <h2 className="font-semibold text-base">
                    <a href="https://pte.pl/aktualnosci/posty/spotkanie-rady-programowej-xi-kongresu-ekonomistow-polskich">Spotkanie Rady Programowej XI Kongresu Ekonomistów Polskich</a>
                  </h2>
                  <p className="text-xs">piątek, 28 lutego 2025</p>
                </div>
                <p className="text-xs leading-relaxed">28 lutego 2025 r. w siedzibie Biura Zarządu Krajowego Polskiego Towarzystwa Ekonomicznego miało miejsce, w trybie hybrydowym, kolejne spotkanie Rady Programowej XI Kongresu Ekonomistów Polskich, który odbędzie się - pod hasłem EKONOMIA I GOSPODARKA W CZASACH NIEPEWNOŚCI - w dniach 4-5 grudnia br. w Poznaniu.</p>
              </div>
              <a href="https://pte.pl/aktualnosci/posty/spotkanie-rady-programowej-xi-kongresu-ekonomistow-polskich" className="p-3 underline focus:text-green-700 text-[#2d2f2d] text-sm block w-fit">
                Czytaj dalej
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f8f8] rounded relative overflow-hidden bg-opacity-50 ">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-4  items-center justify-center ">
              <Image src="/news2.webp" alt="Obrazek Aktualności" width={1000} height={1000} className="object-cover rounded-lg h-auto sm:h-full w-full sm:w-auto flex items-center justify-center" />
            </div>
            <div className="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-8 w-full flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <h2 className="font-semibold text-base">
                    <a href="https://pte.pl/aktualnosci/posty/nowa-publikacja-zlote-kajdany">Nowa publikacja pt. Złote kajdany. Standard złota i Wielki Kryzys 1919 – 1939</a>
                  </h2>
                  <p className="text-xs">środa, 26 lutego 2025</p>
                </div>
                <p className="text-xs leading-relaxed">
                  Nakładem Polskiego Towarzystwa Ekonomicznego ukazała się monografia autorstwa Barry’ego Eichengreena pt. „Złote kajdany. Standard złota i Wielki Kryzys 1919–1939”. Książka B. Eichengreena jest ważna i godna uwagi, gdyż prezentuje konsensus badaczy w istotnym obszarze, w którym przedtem przez kilkadziesiąt lat dominowały ostre kontrowersje. Prezentowany w książce konsensus przyniósł fundamentalną zmianę w rozumieniu źródeł Wielkiego Kryzysu i zakwestionowanie wielu poglądów
                  szeroko przedtem podzielanych przez ekonomistów. Tezy tej ogłoszonej przed 30 laty książki jak dotąd wytrzymały próbę czasu i nie są generalnie w środowiskach fachowych kwestionowane. Jednakże w polskim obiegu intelektualnym książka prawie nie funkcjonuje i wykształcone osoby niejednokrotnie powtarzają tezy, które B. Eichengreen określił słowami „Nic nie jest bardziej sprzeczne z empirycznym świadectwem”.
                </p>
              </div>
              <a href="https://pte.pl/aktualnosci/posty/nowa-publikacja-zlote-kajdany" className="p-3 underline focus:text-green-700 text-[#2d2f2d] text-sm block w-fit">
                Czytaj dalej
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="https://pte.pl/aktualnosci/posty" className="block w-fit my-[7px] text-lg font-medium underline">
        Więcej Postów...
      </a>
    </section>
  );
}
