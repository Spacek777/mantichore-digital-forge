
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCta = () => {
  return (
    <section className="py-24 bg-mantichore-darker relative overflow-hidden">
      {/* Background gradient pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-mantichore-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Game to Life?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss your project requirements and how our team of experienced 3D artists can help you create stunning game assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-mantichore-accent hover:bg-mantichore-accent-hover text-white px-8 py-6 text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
