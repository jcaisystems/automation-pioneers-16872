// src/components/AutomationAudit.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, X } from "lucide-react";

interface AutomationAuditProps {
  onClose: () => void;
}

export const AutomationAudit = ({ onClose }: AutomationAuditProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    challenge: "",
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    console.log("Form submitted:", formData);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Step 1: Basic Information
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
            </div>
            <Button onClick={handleNext} className="mt-6 w-full">
              Next <ArrowRight className="ml-2" />
            </Button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Step 2: A Little About Your Business
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, industry: value })
                  }
                  value={formData.industry}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="agency">Agency</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="challenge">
                  What's your biggest operational challenge?
                </Label>
                <Input
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) =>
                    setFormData({ ...formData, challenge: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button onClick={handlePrev} variant="outline">
                Previous
              </Button>
              <Button onClick={handleSubmit}>
                Generate My Free Report <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl p-8 relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X />
        </Button>
        {renderStep()}
      </Card>
    </div>
  );
};
