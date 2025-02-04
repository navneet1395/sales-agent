"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import Step5 from "@/components/Step5";
import FormDataDisplay from "@/components/FormDataDisplay";
import Step6 from "@/components/Step6";

export default function WebsiteSalesAgentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    representativeName: "",
    websiteName: "",
    websiteDescription: "",
    voiceTone: "",
    agentGoals: [],
    products: [],
    faqs: [],
    promotions: [],
    policies: {
      shippingPolicy: "",
      returnsPolicy: "",
      paymentMethods: "",
      customerSupport: "",
      termsConditions: "",
    },
    allowScraping: false,
    additionalNotes: "",
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const validateStep = () => {
    switch (step) {
      case 1:
        return (
          formData?.representativeName &&
          formData?.websiteName &&
          formData?.websiteDescription &&
          formData?.voiceTone
        );
      case 2:
        return formData?.products.length > 0;
      case 3:
        return formData?.faqs.length > 0;
      case 4:
        return formData?.promotions.length > 0;
      case 5:
        return Object.values(formData?.policies).every(
          (policy) => policy !== ""
        );
      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log(formData);
      // Here you would typically send the form data to your backend
    } else {
      alert("Please fill in all required fields before submitting.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2 formData={formData} updateFormData={updateFormData} />;
      case 3:
        return (
          <div className="space-y-4">
            <Step3 formData={formData} updateFormData={updateFormData} />
            <Step4 formData={formData} updateFormData={updateFormData} />
          </div>
        );
      case 4:
        return <Step5 formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step6 formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="  flex  gap-4 h-full items-stretch">
      <div className="w-[30%]  overflow-y-auto">
        <FormDataDisplay data={formData} updateFormData={updateFormData} />
      </div>
      <div className="w-[70%]  overflow-y-auto">
        <form onSubmit={handleSubmit} className="">
          <Card>
            <CardHeader>
              <CardTitle>Website Sales Agent Form</CardTitle>
              <CardDescription>Step {step} of 5</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[67vh] overflow-y-auto">
              {renderStep()}
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button type="button" onClick={prevStep} variant="outline">
                  Previous
                </Button>
              )}
              {step < 5 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
