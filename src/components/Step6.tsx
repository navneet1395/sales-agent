import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function Step6({ formData, updateFormData }) {
  const handleSwitchChange = (checked) => {
    updateFormData({ allowScraping: checked });
  };

  const handleAdditionalNotesChange = (e) => {
    updateFormData({ additionalNotes: e.target.value });
  };
  const [newGoal, setNewGoal] = useState("");

  const handleGoalChange = (e) => {
    setNewGoal(e.target.value);
  };

  const addGoal = () => {
    if (newGoal.trim() !== "") {
      updateFormData({
        agentGoals: [...(formData.agentGoals || []), newGoal],
      });
      setNewGoal("");
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Add Goals</h4>
      <Input
        name="goal"
        value={newGoal}
        onChange={handleGoalChange}
        placeholder="Enter goal"
      />
      <Button type="button" onClick={addGoal} className="w-full">
        <PlusCircle className="h-4 w-4 mr-2" /> Add Goal
      </Button>

      <div className="flex items-center space-x-2">
        <Switch
          id="allowScraping"
          checked={formData.allowScraping}
          onCheckedChange={handleSwitchChange}
        />
        <Label htmlFor="allowScraping">
          Allow scraping of website&apos;s publicly available data
        </Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalNotes">Additional Notes</Label>
        <Textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleAdditionalNotesChange}
          placeholder="Add any extra details that may help in creating the best sales agent chat experience"
        />
      </div>
    </div>
  );
}
