
const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sudevi</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preserving tradition, delivering quality since generations
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in Balasore, Odisha, Sudevi Foods has been crafting authentic pickles and spices for generations. Our commitment to quality and tradition has made us a trusted name in Indian households.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We take pride in sourcing the finest ingredients and following time-tested recipes to create products that bring the authentic taste of Odisha to your table.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/ff687e93-a99c-438b-a47f-0614bfee860e.png"
                alt="Sudevi Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Quality</h3>
            <p className="text-gray-600">
              We never compromise on the quality of our ingredients and processes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Tradition</h3>
            <p className="text-gray-600">
              Our recipes are passed down through generations, preserving authentic tastes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-600">
              We combine traditional methods with modern food processing techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
