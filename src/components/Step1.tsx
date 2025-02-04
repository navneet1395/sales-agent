import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Step1({ formData, updateFormData }) {
  const handleInputChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="representativeName">Representative Name</Label>
        <Input
          id="representativeName"
          name="representativeName"
          value={formData.representativeName || ""}
          onChange={handleInputChange}
          placeholder="Full name of the person filling out this form"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="websiteName">Website Name</Label>
        <Input
          id="websiteName"
          name="websiteName"
          value={formData.websiteName || ""}
          onChange={handleInputChange}
          placeholder="Enter the name of your website"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="websiteDescription">Description of Website</Label>
        <Textarea
          id="websiteDescription"
          name="websiteDescription"
          value={formData.websiteDescription || ""}
          onChange={handleInputChange}
          placeholder="Briefly describe the purpose and focus of your website"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Preferred Voice & Tone</Label>
        <RadioGroup
          value={formData.voiceTone || ""}
          onValueChange={(value) =>
            updateFormData({ ...formData, voiceTone: value })
          }
          required
        >
          {["formal", "casual", "friendly", "professional", "humorous"].map(
            (tone) => (
              <div key={tone} className="flex items-center space-x-2">
                <RadioGroupItem value={tone} id={tone} />
                <Label htmlFor={tone} className="capitalize">
                  {tone}
                </Label>
              </div>
            )
          )}
        </RadioGroup>
      </div>
    </div>
  );
}
