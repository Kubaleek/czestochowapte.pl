import Footer from "@/components/ui/footer";
import Header from "@/components/ui/LandingPage/header";
import Navbar from "@/components/ui/navbar";

export default function LayoutLanding({children} : {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            <Navbar />
            <main className="container overflow-hidden mx-auto max-w-7xl p-4 xl:px-0 pt-6 ">
                {children}
            </main>
            <Footer />
        </div>
    );
}