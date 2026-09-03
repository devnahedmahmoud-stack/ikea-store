import ContainerProvider from "@/components/Providers/ContainerProvider";
import CustomerServiceDetails from "@/components/customer-service/CustomerServiceDetails";
import React from "react";

const AboutShoppingPage = () => {
  const detailItems = [
    {
      title: "Online Shopping at IKEA",
      content:
        "Shop conveniently from home on our website or mobile app. Browse our complete catalog with detailed product information, customer reviews, and images. Add items to your cart and checkout securely. We offer various delivery options to fit your needs.",
    },
    {
      title: "In-Store Shopping Experience",
      content:
        "Visit our IKEA stores for the complete shopping experience. Browse furniture displays, get measurements and samples, receive expert advice from our staff, and explore kitchen planning services. We also offer in-store ordering for items not currently in stock.",
    },
    {
      title: "Payment Options",
      content: (
        <div>
          <p className="mb-4">IKEA accepts multiple payment methods:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Credit cards (Visa, Mastercard, American Express)</li>
            <li>Debit cards</li>
            <li>Bank transfers and wire payments</li>
            <li>Digital wallets (PayPal, Apple Pay, Google Pay)</li>
            <li>IKEA gift cards</li>
            <li>Financing options for larger purchases</li>
          </ul>
          <p className="mt-4">
            All payments are secured with encryption technology to protect your
            financial information.
          </p>
        </div>
      ),
    },
    {
      title: "Delivery and Pickup Options",
      content:
        "Choose the delivery option that works best for you. Standard delivery takes 7-14 business days to your home. Expedited delivery is available for urgent orders. Alternatively, pick up your order at your nearest IKEA store. Free in-store pickup is available for most items.",
    },
    {
      title: "Shopping with IKEA Family",
      content:
        "Join IKEA Family for exclusive benefits including special member prices, personalized offers, birthday gifts, and early access to sales. It's free to join and you'll start earning points on purchases immediately.",
    },
    {
      title: "Tips for Smart Shopping",
      content: (
        <div>
          <p className="mb-4">Make the most of your IKEA shopping:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Create a wishlist to save items for later</li>
            <li>
              Use our room planner tool to visualize furniture in your space
            </li>
            <li>
              Check weekly offers and promotions for savings opportunities
            </li>
            <li>Read customer reviews to make informed decisions</li>
            <li>Use filters to narrow down products by price, size, or style</li>
            <li>Compare products side-by-side before purchasing</li>
          </ul>
        </div>
      ),
    },
  ];

  const relatedLinks = [
    { title: "About Services", href: "/customer-service/about-services" },
    { title: "Return Policy", href: "/customer-service/return-policy" },
    { title: "IKEA Family", href: "/ikea-family" },
    { title: "Find a Store", href: "/stores" },
  ];

  return (
    <ContainerProvider>
      <CustomerServiceDetails
        title="About Shopping"
        subtitle="Shop with Confidence"
        description="IKEA makes shopping easy and convenient. Whether you prefer online shopping or visiting a store, we provide everything you need for a great shopping experience."
        details={detailItems}
        relatedLinks={relatedLinks}
      />
    </ContainerProvider>
  );
};

export default AboutShoppingPage;
