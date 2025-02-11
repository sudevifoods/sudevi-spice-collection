
import { Button } from "@/components/ui/button";

const careers = [
  {
    id: 1,
    title: "Production Manager",
    department: "Manufacturing",
    location: "Balasore, Odisha",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Quality Control Specialist",
    department: "Quality Assurance",
    location: "Balasore, Odisha",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Sales Representative",
    department: "Sales",
    location: "Multiple Locations",
    type: "Full-time"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of our mission to preserve and share the authentic taste of Odisha
          </p>
        </div>

        {/* Career Opportunities */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {careers.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Location:</span> {job.location}
                </p>
                <Button>Apply Now</Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a position that matches your skills?
            </p>
            <Button variant="outline">
              Send us your Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
