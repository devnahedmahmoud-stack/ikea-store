import ContainerProvider from "@/components/Providers/ContainerProvider";
import CustomerServiceDetails from "@/components/customer-service/CustomerServiceDetails";
import React from "react";

const ReturnPolicyPage = () => {
  const detailItems = [
    {
      title: "30-Day Return Window",
      content:
        "You can return most IKEA products within 30 days of purchase for a full refund or exchange. The item must be in its original packaging and in resalable condition. Return items to any IKEA store or arrange pickup through our online return process.",
    },
    {
      title: "365-Day Purchase Guarantee",
      content:
        "IKEA stands behind the quality of its products with a 365-day satisfaction guarantee. If you're not completely satisfied with your purchase within one year, you can return it for a full refund, exchange, or store credit - no questions asked.",
    },
    {
      title: "Refund Process",
      content: (
        <div>
          <p className="mb-4">Refunds are processed as follows:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>In-store returns: Immediate refund to original payment method</li>
            <li>Online returns: Refund processed within 7-10 business days</li>
            <li>
              Shipped items: Refund includes original shipping cost if returned
              unopened
            </li>
            <li>Partial returns: Refunds reflect applicable restocking fees</li>
          </ul>
          <p className="mt-4">
            To initiate a return, provide your order number and receipt for
            faster processing.
          </p>
        </div>
      ),
    },
    {
      title: "Exceptions to Return Policy",
      content:
        "Some items have specific return conditions: assembled items may have limited return options, clearance items may only be exchanged, items with visible damage from use cannot be returned, and personalized or custom items are non-returnable. Kitchen appliances with installation require a fee adjustment. Contact us for details on specific products.",
    },
    {
      title: "Exchanges",
      content:
        "If you'd like to exchange a product for a different size, color, or model, bring your receipt and original packaging to any IKEA store. Online exchanges can be processed through our website. We typically provide exchanges within 30 days of purchase at no additional charge.",
    },
    {
      title: "Defective Products",
      content:
        "If you receive a defective or damaged product, contact us immediately with photos of the damage. We'll arrange a replacement or refund at no cost to you. Shipping fees for replacement of defective items are covered by IKEA.",
    },
  ];

  const relatedLinks = [
    { title: "Guarantees & Warranties", href: "/customer-service/guarantees-warranties" },
    { title: "About Services", href: "/customer-service/about-services" },
    { title: "Terms and Conditions", href: "/customer-service/terms-conditions" },
    { title: "Contact Us", href: "/customer-service/contact-us" },
  ];

  return (
    <ContainerProvider>
      <CustomerServiceDetails
        title="Return Policy"
        subtitle="Easy Returns and Exchanges"
        description="IKEA makes returns and exchanges simple. Whether you need to exchange an item or return it for a refund, we've got you covered with our customer-friendly return policy."
        details={detailItems}
        relatedLinks={relatedLinks}
      />
    </ContainerProvider>
  );
};

export default ReturnPolicyPage;
