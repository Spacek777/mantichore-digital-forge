
const clients = [
  {
    name: "Game Studio 1",
    logo: "https://via.placeholder.com/150x50?text=Client+1",
  },
  {
    name: "Game Studio 2",
    logo: "https://via.placeholder.com/150x50?text=Client+2",
  },
  {
    name: "Game Studio 3",
    logo: "https://via.placeholder.com/150x50?text=Client+3",
  },
  {
    name: "Game Studio 4",
    logo: "https://via.placeholder.com/150x50?text=Client+4",
  },
  {
    name: "Game Studio 5",
    logo: "https://via.placeholder.com/150x50?text=Client+5",
  },
];

const Clients = () => {
  return (
    <section className="py-16 bg-mantichore-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted By</h2>
          <div className="w-16 h-1 bg-mantichore-accent mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 md:h-12 w-auto" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
