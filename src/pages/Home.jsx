import ServiceTicker from "@/components/common/ServiceTicker";
import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ServiceTicker/>
      <AboutUs/>
    </main>
  );
}