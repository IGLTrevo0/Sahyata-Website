import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import ImpactStats from "@/components/ImpactStats";
import Journey from "@/components/Journey";
import Events from "@/components/Events";
import ImpactStories from "@/components/ImpactStories";
import Gallery from "@/components/Gallery";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ImpactStats />
      <Journey />
      <Events />
      <ImpactStories />
      <Gallery />
      <GetInvolved />
      <Contact />
      <Footer />
    </main>
  );
}
