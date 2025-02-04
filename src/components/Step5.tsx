import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Step5({ formData, updateFormData }) {
  const handlePolicyChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      policies: { ...formData.policies, [name]: value },
    });
  };

  return (
    <div className=" ">
      {Object.entries(formData.policies).map(([key, value]) => (
        <div key={key} className="space-y-2">
          <Label htmlFor={key} className="capitalize font-bold">
            {key.replace(/([A-Z])/g, " $1").trim()}
          </Label>
          <Textarea
            id={key}
            name={key}
            value={value}
            onChange={handlePolicyChange}
            placeholder={`Enter ${key}`}
            required
          />
        </div>
      ))}
    </div>
  );
}
