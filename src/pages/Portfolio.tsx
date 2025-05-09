
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-mantichore-dark text-white">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-mantichore-darker">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of 3D models and assets created for game developers.
            </p>
          </div>
        </section>

        {/* Portfolio Content - Coming soon placeholder */}
        <section className="section-spacing">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Portfolio Page Coming Soon</h2>
            <p className="text-gray-300 mb-4">
              We're currently working on this page. Please check back later!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
