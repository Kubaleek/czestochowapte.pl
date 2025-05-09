export default function Newsletter() {
  return (
    <div className="flex flex-col p-4 pb-4 bg-white rounded-md items-center">
      <h2 className="text-[24px] font-bold text-[#2d3748] text-center my-1">Dołącz do newslettera</h2>
      <form>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 w-11/12 mx-auto">
            <input type="email" id="email" name="email" placeholder="Email" required className="block w-full p-2 mt-4 mb-2 bg-white border border-[#d1d5db] rounded-md text-[#2d3748] text-sm outline-none" autoComplete="off" />
          </div>
          <div className="col-span-12 w-full flex items-center justify-center mb-6">
            <p className="text-[#787575] pl-2 text-sm w-11/12">
              Administratorem danych subskrybentów jest Polskie Towarzystwo Ekonomiczne (zk@pte.pl). Więcej informacji o przetwarzaniu danych:
              <u>
                <a href="https://pte.pl/uploads/ZK_PTE_PB_Z08f_Klauzula_informacyjna_Newsletter_944b504976.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#178223]">
                  LINK
                </a>
              </u>
            </p>
          </div>
          <div className="col-span-12 w-full flex items-center justify-center">
            <button type="submit" className="inline-block outline-none appearance-none px-3 py-2 bg-[#0f8009] shadow-lg text-white text-sm font-medium rounded transition-all duration-150 ease-in-out mr-2" aria-label="zapisz się newslettera">
              Zapisz się
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
