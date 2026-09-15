import Footer from "@/components/common/Footer";
import ContactDetialsStrip from "@/components/navbar/ContactDetialsStrip";
import Navbar from "@/components/navbar/Navbar";

export default function WebsiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-[100] w-full">
        <ContactDetialsStrip />
        <Navbar />
      </header>

      <div  aria-hidden="true" />

      <main className="relative">
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
}