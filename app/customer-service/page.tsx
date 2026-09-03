import ContainerProvider from "@/components/Providers/ContainerProvider";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  href: string;
  icon?: string;
}

const CustomerServicePage = () => {
  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      title: "About Services",
      description:
        "Learn about our comprehensive range of services including delivery, assembly, installation, and more.",
      href: "/customer-service/about-services",
    },
    {
      id: 2,
      title: "About Shopping",
      description:
        "Get information about our shopping options, payment methods, and online purchase process.",
      href: "/customer-service/about-shopping",
    },
    {
      id: 3,
      title: "Guarantees & Warranties",
      description:
        "Explore our comprehensive warranty and guarantee options to protect your IKEA purchases.",
      href: "/customer-service/guarantees-warranties",
    },
    {
      id: 4,
      title: "Return Policy",
      description:
        "Understand our easy return and exchange policy for all IKEA products.",
      href: "/customer-service/return-policy",
    },
    {
      id: 5,
      title: "Terms and Conditions",
      description:
        "Review our terms and conditions for online shopping and services.",
      href: "/customer-service/terms-conditions",
    },
    {
      id: 6,
      title: "Spare Parts",
      description:
        "Find replacement parts and accessories for your IKEA furniture.",
      href: "/customer-service/spare-parts",
    },
    {
      id: 7,
      title: "Brochures",
      description: "Download and explore our latest IKEA brochures and catalogs.",
      href: "/customer-service/brochures",
    },
    {
      id: 8,
      title: "FAQ",
      description:
        "Find answers to frequently asked questions about IKEA products and services.",
      href: "/customer-service/faq",
    },
  ];

  const contactOptions = [
    {
      id: 1,
      title: "Contact Us",
      description: "Get in touch with our customer support team.",
      href: "/customer-service/contact-us",
    },
    {
      id: 2,
      title: "Find a Store",
      description: "Locate your nearest IKEA store and contact information.",
      href: "/stores",
    },
  ];

  return (
    <ContainerProvider>
      {/* Header Section */}
      <section className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Customer Service
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          We are here to help! Browse our customer service options to find
          answers to your questions and get support for your IKEA purchases.
        </p>
      </section>

      {/* Main Services Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Learn more
                <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 rounded-lg border border-gray-200 p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option) => (
            <Link
              key={option.id}
              href={option.href}
              className="group flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{option.description}</p>
              </div>
              <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { title: "Delivery & Assembly", href: "/customer-service/about-services" },
            { title: "Product Warranties", href: "/customer-service/guarantees-warranties" },
            { title: "Return & Exchange", href: "/customer-service/return-policy" },
            { title: "Shopping Help", href: "/customer-service/about-shopping" },
            { title: "View Brochures", href: "/customer-service/brochures" },
          ].map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                href={link.href}
                className="text-blue-600 hover:underline font-medium text-sm"
              >
                {link.title}
              </Link>
              {index < 4 && (
                <Separator orientation="vertical" className="h-5" />
              )}
            </div>
          ))}
        </div>
      </section>
    </ContainerProvider>
  );
};

export default CustomerServicePage;
