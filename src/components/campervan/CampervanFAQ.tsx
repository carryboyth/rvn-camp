
import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CampervanFAQ = () => {
  const faqs = [
    {
      question: "What driving license do I need?",
      answer: "You need a valid driver's license (Class B or higher) held for at least 2 years. International visitors need either an International Driving Permit (IDP) or a license with English translation."
    },
    {
      question: "What's the minimum age requirement?",
      answer: "The primary driver must be at least 25 years old. Drivers aged 21-24 may be accepted with an additional young driver fee and subject to availability."
    },
    {
      question: "Are pets allowed?",
      answer: "Yes! We're pet-friendly. Please inform us in advance and note that a cleaning fee may apply. Pets must be secured during travel and are not allowed on furniture."
    },
    {
      question: "Can I travel to other states/countries?",
      answer: "Domestic travel within the country is generally allowed. Cross-border travel requires prior approval and may involve additional insurance. Please check with us before booking."
    },
    {
      question: "What happens if I have mechanical issues?",
      answer: "All rentals include 24/7 roadside assistance. Contact our emergency line immediately. We'll arrange repairs or a replacement vehicle if needed, with minimal impact to your trip."
    },
    {
      question: "Is fuel included?",
      answer: "Fuel is not included in the rental price. You'll receive the vehicle with a full tank and should return it with a full tank to avoid refueling charges."
    },
    {
      question: "What items are provided?",
      answer: "Standard equipment includes bedding, cookware, dishes, basic tools, first aid kit, and camping chairs. Detailed inventory is provided at pickup. Personal items and food are not included."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Free cancellation up to 48 hours before pickup. Cancellations within 48 hours forfeit 50% of the rental fee. No-shows forfeit the full amount. Weather-related cancellations are handled case-by-case."
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-green-900">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-green-100">
            <AccordionTrigger className="text-left text-green-800 hover:text-green-600">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-green-700 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100">
        <h3 className="font-medium text-green-800 mb-2">Still have questions?</h3>
        <p className="text-green-700 text-sm mb-3">
          Our customer support team is here to help you plan the perfect adventure.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
            Chat with us
          </button>
          <button className="px-4 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors text-sm">
            Call us
          </button>
        </div>
      </div>
    </div>
  );
};
