import ContainerProvider from "@/components/Providers/ContainerProvider";
import CustomerServiceDetails from "@/components/customer-service/CustomerServiceDetails";
import React from "react";

const SparePartsPage = () => {
  const detailItems = [
    {
      title: "Finding Spare Parts",
      content:
        "IKEA offers a wide range of spare parts and replacement components for our furniture. These include hinges, handles, shelves, legs, cushions, and more. You can search for parts using the original article number from your product manual or packaging.",
    },
    {
      title: "Ordering Spare Parts Online",
      content:
        "Visit our spare parts section on the website and search by product type or article number. Add items to your cart and complete checkout. We offer convenient online ordering with delivery options to your home or pickup at your nearest store.",
    },
    {
      title: "In-Store Spare Parts",
      content:
        "Visit the spare parts counter at any IKEA store. Our staff can help you locate the exact parts you need. For common items like handles and hinges, they're usually in stock. For other parts, we can special order them.",
    },
    {
      title: "Common Replacement Parts",
      content: (
        <div>
          <p className="mb-4">Popular spare parts customers order include:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Cabinet and drawer handles</li>
            <li>Door hinges and soft-close dampers</li>
            <li>Shelves and shelf pins</li>
            <li>Furniture legs and feet</li>
            <li>Cushions and seat covers</li>
            <li>Hardware kits and bolts</li>
            <li>Glass tops and table inserts</li>
            <li>Mattress covers and protectors</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Product Documentation",
      content:
        "Your product manual contains the article number and recommended spare parts. You can also find documentation by entering your product's name on our website. The manual will show exactly which parts are available for your item.",
    },
    {
      title: "Warranty and Spare Parts",
      content:
        "Spare parts purchased under warranty terms may be covered by your product's warranty. Contact our customer service team with your purchase receipt to determine coverage. Intentional damage or wear and tear repairs are typically not covered.",
    },
  ];

  const relatedLinks = [
    { title: "Guarantees & Warranties", href: "/customer-service/guarantees-warranties" },
    { title: "Return Policy", href: "/customer-service/return-policy" },
    { title: "About Services", href: "/customer-service/about-services" },
    { title: "Contact Us", href: "/customer-service/contact-us" },
  ];

  return (
    <ContainerProvider>
      <CustomerServiceDetails
        title="Spare Parts"
        subtitle="Keep Your Furniture in Perfect Condition"
        description="IKEA provides replacement parts for our furniture, so you can repair, replace, or upgrade components whenever needed. Find the exact parts you need with our convenient spare parts service."
        details={detailItems}
        relatedLinks={relatedLinks}
      />
    </ContainerProvider>
  );
};

export default SparePartsPage;
