import ContainerProvider from "@/components/Providers/ContainerProvider";
import CustomerServiceDetails from "@/components/customer-service/CustomerServiceDetails";
import React from "react";

const GuaranteesWarrantiesPage = () => {
  const detailItems = [
    {
      title: "Manufacturer's Warranty",
      content:
        "All IKEA products come with a manufacturer's warranty covering defects in materials and workmanship. The standard warranty period is 2 years from the date of purchase for most furniture items. This warranty covers structural failures and manufacturing defects but excludes normal wear and tear.",
    },
    {
      title: "Extended Warranty Options",
      content:
        "We offer extended warranty packages that provide additional protection beyond the standard 2-year coverage. Extended warranties can cover accidental damage, spills, and wear. Visit our stores or website to learn about available extended warranty plans for your specific products.",
    },
    {
      title: "Coverage Details",
      content: (
        <div>
          <p className="mb-4">Our standard warranty covers:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Structural defects and failures</li>
            <li>Manufacturing defects in materials</li>
            <li>Joint and connection failures</li>
            <li>Hardware defects</li>
            <li>Finish defects (scratches, dents within first 30 days)</li>
          </ul>
          <p className="mt-4">
            The warranty does NOT cover: normal wear and tear, user damage,
            improper assembly, modifications, or commercial use.
          </p>
        </div>
      ),
    },
    {
      title: "Warranty Claim Process",
      content:
        "To file a warranty claim, contact our customer service team with your purchase receipt and proof of the defect. You can reach us via phone, email, or visit your nearest IKEA store. We'll evaluate your claim and offer repair, replacement, or refund options based on the terms of your warranty.",
    },
    {
      title: "Product Guarantee",
      content:
        "IKEA stands behind the quality of its products. If you're not satisfied with your purchase within 365 days, you can return it for a full refund, exchange, or store credit. This applies to most items, with some exceptions for assembled or clearance items.",
    },
    {
      title: "Extended Service Plans",
      content:
        "For qualifying products like appliances and electronics, we offer extended service plans that include repair and replacement coverage. These plans provide peace of mind and protection against unexpected repair costs.",
    },
  ];

  const relatedLinks = [
    { title: "Return Policy", href: "/customer-service/return-policy" },
    { title: "Spare Parts", href: "/customer-service/spare-parts" },
    { title: "Terms and Conditions", href: "/customer-service/terms-conditions" },
    { title: "Contact Us", href: "/customer-service/contact-us" },
  ];

  return (
    <ContainerProvider>
      <CustomerServiceDetails
        title="Guarantees & Warranties"
        subtitle="Protection for Your Purchases"
        description="IKEA is committed to quality and customer satisfaction. We offer comprehensive warranties and guarantees on all our products to ensure you have peace of mind with your purchase."
        details={detailItems}
        relatedLinks={relatedLinks}
      />
    </ContainerProvider>
  );
};

export default GuaranteesWarrantiesPage;
