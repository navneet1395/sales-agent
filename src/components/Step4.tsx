import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle, Trash2 } from "lucide-react"

export default function Step4({ formData, updateFormData }) {
  const [newPromotion, setNewPromotion] = useState({
    code: "",
    description: "",
    expiryDate: "",
  })

  const handlePromotionChange = (e) => {
    setNewPromotion((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addPromotion = () => {
    if (newPromotion.code && newPromotion.description && newPromotion.expiryDate) {
      updateFormData({ promotions: [...formData.promotions, newPromotion] })
      setNewPromotion({ code: "", description: "", expiryDate: "" })
    } else {
      alert("Please fill in all promotion fields")
    }
  }

 

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Special Offers or Promotions</h3>

      <div className="border p-2 rounded-md space-y-2">
        {/* <h4 className="font-medium">Add New Promotion</h4> */}
        <Input
          name="code"
          value={newPromotion.code}
          onChange={handlePromotionChange}
          placeholder="Promotion Code"
          required
        />
        <Textarea
          name="description"
          value={newPromotion.description}
          onChange={handlePromotionChange}
          placeholder="Description"
          required
        />
        <Input
          name="expiryDate"
          type="date"
          value={newPromotion.expiryDate}
          onChange={handlePromotionChange}
          required
        />
        <Button type="button" onClick={addPromotion} className="w-full">
          <PlusCircle className="h-4 w-4 mr-2" /> Add Promotion
        </Button>
      </div>
    </div>
  );
}

