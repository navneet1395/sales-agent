import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function Step2({ formData, updateFormData }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    pricing: "",
    specifications: "",
    availability: "",
    usp: "",
    offers: "",
  })

  const handleProductChange = (e) => {
    setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addProduct = () => {
    updateFormData({ products: [...formData.products, newProduct] })
    setNewProduct({
      name: "",
      description: "",
      pricing: "",
      specifications: "",
      availability: "",
      usp: "",
      offers: "",
    })
  }


  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold ">Product Catalog : Add Products</h3>
      <div className=" p-2 rounded-md space-y-2">
        {/* <h4 className="font-medium">Add New Product</h4> */}
        <Input
          name="name"
          value={newProduct.name}
          onChange={handleProductChange}
          placeholder="Product Name"
        />
        <Textarea
          name="description"
          value={newProduct.description}
          onChange={handleProductChange}
          placeholder="Description"
        />
        <Input
          name="pricing"
          value={newProduct.pricing}
          onChange={handleProductChange}
          placeholder="Pricing"
        />
        <Input
          name="specifications"
          value={newProduct.specifications}
          onChange={handleProductChange}
          placeholder="Specifications"
        />
        <Input
          name="availability"
          value={newProduct.availability}
          onChange={handleProductChange}
          placeholder="Availability"
        />
        <Input
          name="usp"
          value={newProduct.usp}
          onChange={handleProductChange}
          placeholder="Unique Selling Points"
        />
        <Input
          name="offers"
          value={newProduct.offers}
          onChange={handleProductChange}
          placeholder="Offers/Promotions"
        />
        <Button type="button" onClick={addProduct} className="w-full">
          <PlusCircle className="h-4 w-4 mr-2" /> Add Product
        </Button>
      </div>
    </div>
  );
}

