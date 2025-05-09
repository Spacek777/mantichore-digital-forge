
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample portfolio items - in a real implementation these would come from a database or CMS
const portfolioItems = [
  {
    id: 1,
    title: "Fantasy Character",
    category: "Characters",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Sci-Fi Environment",
    category: "Environments",
    image: "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Medieval Weapons",
    category: "Assets",
    image: "https://images.unsplash.com/photo-1550747545-c896b5f89ff7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Urban Setting",
    category: "Environments",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Futuristic Vehicle",
    category: "Assets",
    image: "https://images.unsplash.com/photo-1547393930-0e156455b31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Animated Hero",
    category: "Characters",
    image: "https://images.unsplash.com/photo-1533233336900-d3d3e1e70234?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const categories = ["All", "Characters", "Environments", "Assets"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="section-spacing bg-mantichore-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-mantichore-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest work and see how we bring gaming worlds to life.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-mantichore-accent hover:bg-mantichore-accent-hover text-white"
                  : "text-gray-300 border-gray-600 hover:bg-mantichore-dark/50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg bg-mantichore-darker border border-gray-800 hover:border-mantichore-accent transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-mantichore-accent mb-3">{item.category}</p>
                <Button asChild variant="outline" size="sm" className="w-full border-white/30 text-white backdrop-blur-sm hover:bg-white/20">
                  <Link to={`/portfolio/${item.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-mantichore-accent hover:bg-mantichore-accent-hover text-white px-8">
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
