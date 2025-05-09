
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import About from "@/components/home/About";
import Clients from "@/components/home/Clients";
import Testimonials from "@/components/home/Testimonials";
import ContactCta from "@/components/home/ContactCta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-mantichore-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Clients />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
