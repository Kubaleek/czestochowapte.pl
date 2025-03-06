import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function SlugLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            <main className="container overflow-hidden mx-auto max-w-7xl p-4 xl:px-0 pt-6 ">
                {children}
            </main>
            <Footer />
        </>
    );
}