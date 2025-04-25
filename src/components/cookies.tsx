"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"

export default function CookiesAccept() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = Cookies.get("CookieAccepted") === "true"
    setShow(!accepted)
  }, [])

  const acceptCookies = () => {
    Cookies.set("CookieAccepted", "true", { expires: 365 })
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="z-[40] fixed bottom-[16px] left-[16px] gap-[16px] right-[16px] flex-col sm:flex-row flex sm:items-center justify-between border border-green-700 rounded-2xl p-4 bg-white">
      <p className="text-xs max-w-5xl">
        Ta strona korzysta z plików cookies w celu świadczenia najwyższej jakości usług. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich wykorzystywanie.
        Administratorem danych osobowych użytkownika Serwisu pte.pl jest Polskie Towarzystwo Ekonomiczne z siedzibą przy ul. Nowy Świat 49, 00-042 Warszawa.
      </p>
      <button
        onClick={acceptCookies}
        className="block bg-green-700 text-white text-base cursor-pointer rounded-md px-[16px] p-2"
      >
        Zgadzam się
      </button>
    </div>
  )
}
