import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export default function FormDataDisplay({ data, updateFormData }) {
  const deleteItem = (index, key) => {
    const updatedList = data[key].filter((_, i) => i !== index);
    updateFormData({ [key]: updatedList });
  };

  return (
    <Card className="h-full overflow-auto  bg-white shadow-lg rounded-lg">
      <CardHeader className="border-b pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">
          Agent Data
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Representative Name */}
        {data?.representativeName && (
          <DataSection
            title="Representative Name"
            content={data.representativeName}
          />
        )}

        {/* Website Name */}
        {data?.websiteName && (
          <DataSection title="Website Name" content={data.websiteName} />
        )}

        {/* Website Description */}
        {data?.websiteDescription && (
          <DataSection
            title="Website Description"
            content={data.websiteDescription}
          />
        )}

        {/* Voice & Tone */}
        {data?.voiceTone && (
          <DataSection title="Voice & Tone" content={data.voiceTone} />
        )}

        {/* Goals */}
        {data?.agentGoals?.length > 0 && (
          <DataList
            title="Goals"
            items={data.agentGoals}
            onDelete={(index) => deleteItem(index, "agentGoals")}
          />
        )}

        {/* Products */}
        {data?.products?.length > 0 && (
          <DataAccordion
            title="Products"
            items={data.products}
            onDelete={(index) => deleteItem(index, "products")}
            renderContent={(product) => (
              <>
                {product.description && <p>{product.description}</p>}
                {product.pricing && (
                  <p>
                    <strong>Pricing:</strong> {product.pricing}
                  </p>
                )}
                {product.specifications && (
                  <p>
                    <strong>Specifications:</strong> {product.specifications}
                  </p>
                )}
                {product.availability && (
                  <p>
                    <strong>Availability:</strong> {product.availability}
                  </p>
                )}
                {product.usp && (
                  <p>
                    <strong>USP:</strong> {product.usp}
                  </p>
                )}
                {product.offers && (
                  <p>
                    <strong>Offers:</strong> {product.offers}
                  </p>
                )}
              </>
            )}
          />
        )}

        {/* FAQs */}
        {data?.faqs?.length > 0 && (
          <DataAccordion
            title="FAQs"
            items={data.faqs}
            onDelete={(index) => deleteItem(index, "faqs")}
            renderContent={(faq) => (
              <>
                <h3 className="font-medium text-gray-900">Q: {faq.question}</h3>
                <p className="text-gray-700">A: {faq.answer}</p>
              </>
            )}
          />
        )}

        {/* Promotions */}
        {data?.promotions?.length > 0 && (
          <DataAccordion
            title="Promotions"
            items={data.promotions}
            onDelete={(index) => deleteItem(index, "promotions")}
            renderContent={(promo) => (
              <>
                <p>
                  <strong>Code:</strong> {promo.code}
                </p>
                <p>
                  <strong>Description:</strong> {promo.description}
                </p>
                <p>
                  <strong>Expiry Date:</strong> {promo.expiryDate}
                </p>
              </>
            )}
          />
        )}

        {/* Policies */}
        {data?.policies && Object.values(data.policies).some(Boolean) && (
          <DataAccordion
            title="Policies"
            items={Object.entries(data.policies)}
            onDelete={null} // No delete button for policies
            renderContent={([value]) => <p>{value}</p>}
            formatTitle={([key]) =>
              key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())
            }
          />
        )}

        {/* Allow Scraping */}
        {data?.allowScraping && (
          <DataSection title="Allow Scraping" content="Yes" />
        )}

        {/* Additional Notes */}
        {data?.additionalNotes && (
          <DataSection
            title="Additional Notes"
            content={data.additionalNotes}
          />
        )}
      </CardContent>
    </Card>
  );
}

// ---- COMPONENTS ----

// Reusable Section Component
const DataSection = ({ title, content }) => (
  <div className="mb-4">
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

// Reusable List with Delete Button
const DataList = ({ title, items, onDelete }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
        >
          <span className="text-gray-700">
            {index + 1}. {item}
          </span>
          <Button variant="ghost" size="sm" onClick={() => onDelete(index)}>
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

// Reusable Accordion Component
const DataAccordion = ({
  title,
  items,
  onDelete,
  renderContent,
  formatTitle,
}) => (
  <div className="mb-6">
    <Accordion type="single" collapsible>
      <AccordionItem value={title.toLowerCase()}>
        <AccordionTrigger>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">
                  {formatTitle
                    ? formatTitle(item)
                    : item.name || `Item ${index + 1}`}
                </h3>
                {onDelete && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(index)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                )}
              </div>
              <div className="text-gray-700 mt-2">{renderContent(item)}</div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
