import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function PagesLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Navbar />
            <main className="max-w-7xl mx-auto h-full justify-center items-center p-4 xl:px-0 pt-6 ">
                {children}
            </main>
            <Footer />
        </div>
    );
}