
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The team at Mantichore Studio delivered exceptional 3D assets that perfectly matched our art direction. Their attention to detail and quick turnaround time made them a pleasure to work with.",
    author: "Sarah Johnson",
    role: "Art Director",
    company: "Indie Game Studios",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "We've worked with Mantichore on multiple projects, and they consistently deliver high-quality models that perform well in-game. Their technical expertise has been invaluable to our development process.",
    author: "Michael Chen",
    role: "Technical Director",
    company: "Pixel Games",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The character models Mantichore created for our RPG exceeded our expectations. They understood our vision perfectly and added creative touches that enhanced the final product.",
    author: "Alex Rodriguez",
    role: "Creative Lead",
    company: "Fantasy Interactive",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="section-spacing bg-mantichore-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-mantichore-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-mantichore-darker border-gray-800 hover:border-mantichore-accent transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="relative mb-8">
                  <div className="absolute -top-12 left-0 text-5xl text-mantichore-accent opacity-30">
                    "
                  </div>
                  <p className="text-gray-300 relative z-10 italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
