
import Footer from "@/components/footer";
import Header from "@/components/header";
import Contact from "@/components/home/contact";
import Initiatives from "@/components/home/initiatives";
import News from "@/components/home/news";
import Partners from "@/components/home/partners";
import Social from "@/components/home/social";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container overflow-hidden mx-auto max-w-7xl p-6 xl:px-0 pt-6 ">
        <Initiatives />
        <Separator className="bg-green-700 my-[45px]" /> 
        <div className="grid grid-cols-12 gap-[24px] md:gap-[48px]">
          <News />
          <Social />
        </div>
        <Separator className="bg-green-700 my-[45px]" /> 
        <Partners />
        <Separator className="bg-green-700 my-[45px]" /> 
        <Contact />
      </main>
      <Footer />
    </>
  );
}
