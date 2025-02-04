import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";

export default function Step3({ formData, updateFormData }) {
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });

  const handleFAQChange = (e) => {
    setNewFAQ((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addFAQ = () => {
    updateFormData({ faqs: [...formData.faqs, newFAQ] });
    setNewFAQ({ question: "", answer: "" });
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">
        Frequently Asked Questions (FAQs)
      </h3>

      <div className="border p-2 rounded-md space-y-2">
        {/* <h4 className="font-medium">Add New FAQ</h4> */}
        <Input
          name="question"
          value={newFAQ.question}
          onChange={handleFAQChange}
          placeholder="Question"
        />
        <Textarea
          name="answer"
          value={newFAQ.answer}
          onChange={handleFAQChange}
          placeholder="Answer"
        />
        <Button type="button" onClick={addFAQ} className="w-full">
          <PlusCircle className="h-4 w-4 mr-2" /> Add FAQ
        </Button>
      </div>
    </div>
  );
}
