import ContainerProvider from "@/components/Providers/ContainerProvider";
import Link from "next/link";
import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  href: string;
}

const AllServicesPage = () => {
  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      title: "Delivery & Assembly",
      description:
        "Professional delivery and assembly services to get your furniture set up perfectly. We handle the heavy lifting and make sure everything is installed correctly.",
      href: "/customer-service/about-services",
    },
    {
      id: 2,
      title: "Returns & Warranty",
      description:
        "Easy return process and comprehensive warranty coverage to protect your purchases. We stand behind the quality of our products with flexible return options.",
      href: "/customer-service/return-policy",
    },
    {
      id: 3,
      title: "Customer Support",
      description:
        "24/7 customer support available via phone, email, chat, and in-store. Our dedicated team is ready to help with any questions or concerns.",
      href: "/customer-service/contact-us",
    },
  ];

  return (
    <ContainerProvider>
      {/* Header Section */}
      <section className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          All Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Explore our comprehensive range of services designed to enhance your IKEA experience
          and ensure complete customer satisfaction.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-200 h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-6 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">
                  {service.id === 1 && "📦"}
                  {service.id === 2 && "✅"}
                  {service.id === 3 && "🎧"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed grow">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Learn more
                <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-linear-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need Something Specific?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore all our customer service options for complete support with your IKEA purchases.
        </p>
        <Link
          href="/customer-service"
          className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Visit Customer Service Center
        </Link>
      </section>

      {/* Back Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back to Home
        </Link>
      </div>
    </ContainerProvider>
  );
};

export default AllServicesPage;
