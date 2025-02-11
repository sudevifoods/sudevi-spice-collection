
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface PartnershipFormProps {
  type: string;
  onClose: () => void;
}

const PartnershipForm = ({ type, onClose }: PartnershipFormProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: `Thank you for your interest in becoming a ${type}. We'll contact you soon.`,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" value={type} />
      <div>
        <Input placeholder="Full Name / Business Name" required />
      </div>
      <div>
        <Input type="email" placeholder="Email Address" required />
      </div>
      <div>
        <Input type="tel" placeholder="Phone Number" required />
      </div>
      <div>
        <Input placeholder="City, State" required />
      </div>
      <div>
        <Textarea 
          placeholder="Tell us about your business experience"
          className="min-h-[150px]"
          required
        />
      </div>
      <Button type="submit" className="w-full">Submit Application</Button>
    </form>
  );
};

const Partner = () => {
  const [open, setOpen] = useState(false);
  const [partnerType, setPartnerType] = useState("");

  const handlePartnerClick = (type: string) => {
    setPartnerType(type);
    setOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in bringing authentic Odia flavors to tables across India
          </p>
        </div>

        {/* Partnership Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Distributor</h3>
            <p className="text-gray-600 mb-6">
              Become a distributor and help us reach more customers in your region
            </p>
            <Dialog open={open && partnerType === "Distributor"} onOpenChange={(isOpen) => {
              setOpen(isOpen);
              if (!isOpen) setPartnerType("");
            }}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => handlePartnerClick("Distributor")}>
                  Apply as Distributor
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Distributor Application</DialogTitle>
                </DialogHeader>
                <PartnershipForm type="Distributor" onClose={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Retailer</h3>
            <p className="text-gray-600 mb-6">
              Stock our products in your store and offer authentic Odia flavors
            </p>
            <Dialog open={open && partnerType === "Retailer"} onOpenChange={(isOpen) => {
              setOpen(isOpen);
              if (!isOpen) setPartnerType("");
            }}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => handlePartnerClick("Retailer")}>
                  Register as Retailer
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Retailer Application</DialogTitle>
                </DialogHeader>
                <PartnershipForm type="Retailer" onClose={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Franchise</h3>
            <p className="text-gray-600 mb-6">
              Open a Sudevi exclusive store in your area
            </p>
            <Dialog open={open && partnerType === "Franchise"} onOpenChange={(isOpen) => {
              setOpen(isOpen);
              if (!isOpen) setPartnerType("");
            }}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => handlePartnerClick("Franchise")}>
                  Franchise Enquiry
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Franchise Application</DialogTitle>
                </DialogHeader>
                <PartnershipForm type="Franchise" onClose={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quality Products</h3>
              <p className="text-gray-600">
                Partner with a brand known for authentic and high-quality products
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Marketing Support</h3>
              <p className="text-gray-600">
                Get comprehensive marketing and promotional support
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Training Programs</h3>
              <p className="text-gray-600">
                Access to detailed product knowledge and sales training
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Growing Market</h3>
              <p className="text-gray-600">
                Be part of the growing authentic food products market
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
