
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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

const ApplicationForm = ({ jobTitle, onClose }: { jobTitle: string; onClose: () => void }) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you soon.",
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" value={jobTitle} />
      <div>
        <Input placeholder="Full Name" required />
      </div>
      <div>
        <Input type="email" placeholder="Email Address" required />
      </div>
      <div>
        <Input type="tel" placeholder="Phone Number" required />
      </div>
      <div>
        <Textarea 
          placeholder="Cover Letter"
          className="min-h-[150px]"
          required
        />
      </div>
      <div>
        <Input 
          type="file" 
          accept=".pdf,.doc,.docx"
          required
        />
        <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, DOCX)</p>
      </div>
      <Button type="submit" className="w-full">Submit Application</Button>
    </form>
  );
};

const Careers = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const { toast } = useToast();

  const handleGeneralApplication = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Resume Received",
      description: "Thank you for your interest. We'll keep your resume on file.",
    });
  };

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
                <Dialog open={open && selectedJob === job.title} onOpenChange={(isOpen) => {
                  setOpen(isOpen);
                  if (!isOpen) setSelectedJob("");
                }}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setSelectedJob(job.title)}>Apply Now</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Apply for {job.title}</DialogTitle>
                    </DialogHeader>
                    <ApplicationForm jobTitle={job.title} onClose={() => setOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a position that matches your skills?
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Send us your Resume</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>General Application</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleGeneralApplication} className="space-y-4">
                  <div>
                    <Input placeholder="Full Name" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Tell us about yourself and your interests"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, DOCX)</p>
                  </div>
                  <Button type="submit" className="w-full">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
