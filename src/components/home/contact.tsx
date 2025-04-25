"use client";

import { useState, useEffect } from "react";
import Maps from "./map";
import { Separator } from "../ui/separator";
import cityContacts from "@/lib/contact/cityContact";

export function ContactInfo({ city }: { city: string }) {
  const contact = cityContacts[city];

  return (
    <div className="col-span-12  md:col-span-6 lg:col-span-4 bg-[#f8f8f8] rounded relative h-fit p-3">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl text-black">{contact.name}</h2>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-fw w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path>
            </svg>
            <p className="text-base font-medium text-[#4a4b4a]">{contact.email}</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="svg-inline--fa fa-phone fa-fw w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path>
            </svg>
            <p className="text-base font-medium text-[#4a4b4a]">{contact.tel}</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot fa-fw w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path fill="currentColor" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path>
            </svg>
            <p className="text-base font-medium text-[#4a4b4a]">{contact.address}</p>
          </div>
        </div>
      </div>
      <Separator className="my-[24px] h-2 bg-[#333]/50" />
      <div className="flex flex-col gap-3">
        <p className="text-base flex flex-col font-medium text-[#4a4b4a]">
          Nr konta: <span>{contact.numberaccount}</span>
        </p>
        <p className="text-base flex flex-col font-medium text-[#4a4b4a]">
          NIP: <span>{contact.nip}</span>
        </p>
        <p className="text-base flex flex-col font-medium text-[#4a4b4a]">
          KRS: <span>{contact.krs}</span>
        </p>
        <p className="text-base flex flex-col font-medium text-[#4a4b4a]">
          REGON: <span>{contact.regon}</span>
        </p>
        <p className="text-base flex flex-col font-medium text-[#4a4b4a]">
          URL:{" "}
          <a href={contact.url} rel="noopener noreferrer">
            {contact.url}
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [selectedCity, setSelectedCity] = useState("Częstochowa");
  const [activeCircles, setActiveCircles] = useState([
    { cx: 351.327, cy: 442.747 },
    { cx: 351.327, cy: 442.747 },
  ]);

  const handleCityClick = (city: string) => {
    const cityId = `${city.replace(/ /g, "")}_C`;
    const cityElement = document.getElementById(cityId);

    if (cityElement) {
      const cx = parseFloat(cityElement.getAttribute("cx") || "0");
      const cy = parseFloat(cityElement.getAttribute("cy") || "0");

      setActiveCircles([
        { cx, cy },
        { cx, cy },
      ]);

      setSelectedCity(city);
    }
  };

  useEffect(() => {
    handleCityClick(selectedCity);
  }, [selectedCity]);

  return (
    <section>
      <div className="flex flex-col gap-6">
        <h1 className="flex items-center">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-2 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
          </svg>
          <span className="text-2xl sm:text-[28px] text-black font-bold m-0">Kontakt</span>
        </h1>
        <div className="grid grid-cols-12 gap-[24px] md:gap-[48px]">
          <ContactInfo city={selectedCity} />
          <div className="col-span-12 md:col-span-6 lg:col-span-8 items-center justify-center flex flex-col gap-6">
            <Maps activeCircles={activeCircles} />
            <div className="flex flex-wrap justify-center gap-3 lg:w-3/4">
              {Object.keys(cityContacts).map((city) => (
                <button key={city} type="button" className={`border px-2 py-1 text-[12px] rounded-lg transition-all ease duration-300 ${selectedCity === city ? "border-[#f79c1d] bg-white" : "border-[#17822e] hover:border-[#f79c1d] hover:bg-white"}`} onClick={() => handleCityClick(city)}>
                  {cityContacts[city].name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-green-700 my-[45px]" />
    </section>
  );
}
