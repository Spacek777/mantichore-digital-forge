
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-mantichore-dark to-mantichore-darker">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Mantichore Studio</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Founded by a team of passionate game developers and 3D artists, Mantichore Studio specializes in creating high-quality 3D models and assets for the gaming industry.
            </p>
            
            <p className="text-gray-300 mb-6">
              With over a decade of combined experience, our team has worked with studios of all sizes, from indie developers to major publishers. We understand the unique challenges of game development and are committed to delivering assets that not only look great but also perform well.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-mantichore-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-mantichore-accent mb-1">10+</div>
                <div className="text-sm text-gray-400">Years of Experience</div>
              </div>
              <div className="bg-mantichore-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-mantichore-accent mb-1">100+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="bg-mantichore-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-mantichore-accent mb-1">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-mantichore-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-mantichore-accent mb-1">5000+</div>
                <div className="text-sm text-gray-400">3D Models Created</div>
              </div>
            </div>
            
            <Button asChild className="bg-mantichore-accent hover:bg-mantichore-accent-hover text-white px-8">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-lg overflow-hidden border-4 border-mantichore-darker shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551022372-0bdac482b9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video bg-mantichore-darker p-4 rounded-lg border border-gray-800 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Studio workspace" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
