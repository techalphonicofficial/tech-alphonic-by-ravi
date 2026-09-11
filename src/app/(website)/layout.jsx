import ContactDetialsStrip from "@/components/navbar/ContactDetialsStrip";
import Navbar from "@/components/navbar/Navbar";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] w-full">
        <ContactDetialsStrip />
        <Navbar />
      </header>

      <div className="h-[116px] w-full" aria-hidden="true" />

      <main>{children}</main>
    </>
  );
}