
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-mantichore-dark text-white">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-mantichore-darker">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & News</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Latest updates, tutorials and insights from our studio.
            </p>
          </div>
        </section>

        {/* Blog Content - Coming soon placeholder */}
        <section className="section-spacing">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Blog Page Coming Soon</h2>
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

export default Blog;
