'use client';

import ContainerProvider from "@/components/Providers/ContainerProvider";
import Link from "next/link";
import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const FAQPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "How long does delivery take?",
      answer:
        "Delivery times vary depending on your location and the item. Standard delivery typically takes 7-14 business days. You can select your preferred delivery date during checkout. Expedited delivery options are available for an additional fee.",
    },
    {
      id: "faq-2",
      question: "Can I return an item that's already been assembled?",
      answer:
        "Yes, you can return assembled items within 30 days. However, assembled items may have a restocking fee applied. For details on your specific item, check our return policy or contact our customer service team.",
    },
    {
      id: "faq-3",
      question: "Do you offer assembly services?",
      answer:
        "Yes! IKEA offers professional assembly services for most furniture items. You can arrange assembly during checkout or by contacting our stores directly. Prices vary based on item complexity and location.",
    },
    {
      id: "faq-4",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, bank transfers, and digital payment methods like PayPal and Apple Pay. We also offer financing options for purchases over a certain amount.",
    },
    {
      id: "faq-5",
      question: "How do I track my online order?",
      answer:
        "Once your order ships, you'll receive an email with a tracking number. You can use this number to track your delivery on our website or the carrier's website. You can also view your order status in your IKEA account.",
    },
    {
      id: "faq-6",
      question: "Are items measured in metric or imperial units?",
      answer:
        "IKEA products are measured in both metric (cm) and imperial (inches) units on our product pages and in-store. Check the product information to confirm dimensions in your preferred measurement system.",
    },
    {
      id: "faq-7",
      question: "What is IKEA's warranty on furniture?",
      answer:
        "IKEA provides a 2-year manufacturer's warranty on most furniture items, covering defects in materials and workmanship. Extended warranties and service plans are available for additional protection. See our Guarantees & Warranties page for full details.",
    },
    {
      id: "faq-8",
      question: "Can I modify or customize IKEA products?",
      answer:
        "IKEA offers some customization options for certain products, such as kitchen systems and wardrobes. For assistance with customization, visit your nearest IKEA store or contact our interior design team. DIY modifications may void the warranty.",
    },
    {
      id: "faq-9",
      question: "What's your sustainability commitment?",
      answer:
        "IKEA is committed to sustainability. We source materials responsibly, reduce waste, and design products for longevity and recyclability. Check our sustainability page for more information on our environmental initiatives and commitments.",
    },
    {
      id: "faq-10",
      question: "Do you offer gift cards?",
      answer:
        "Yes! IKEA gift cards are available in physical and digital formats. You can purchase them in any amount at IKEA stores, on our website, or through our online store. They never expire and can be used for any purchase.",
    },
    {
      id: "faq-11",
      question: "How can I contact customer service?",
      answer:
        "You can reach IKEA customer service by phone, email, or by visiting your nearest store. Contact information is available on our Contact Us page. We're here to help with any questions or concerns about your purchases.",
    },
    {
      id: "faq-12",
      question: "Do you have a price match guarantee?",
      answer:
        "IKEA offers competitive pricing on all products. While we don't have a formal price match policy, we regularly review our prices to ensure value. For questions about specific pricing, contact our stores or customer service team.",
    },
  ];

  return (
    <ContainerProvider>
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex space-x-2">
            <li className="flex items-center">
              <Link href="/customer-service" className="hover:underline">
                Customer Service
              </Link>
              <span className="mx-2">&rsaquo;</span>
            </li>
            <li className="text-gray-900 font-medium" aria-current="page">
              FAQ
            </li>
          </ol>
        </nav>

        {/* Hero Header Section */}
        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            Find answers to common questions about IKEA products, services, and
            policies. Can&apos;t find what you&apos;re looking for? Contact our customer
            service team.
          </p>
        </header>

        {/* FAQ Accordion */}
        <section className="mb-12">
          <div className="space-y-4 border border-gray-200 rounded-lg overflow-hidden">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`text-gray-600 transition-transform duration-300 ${
                      expandedId === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedId === faq.id && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Information Section */}
        <section className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Need More Help?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/customer-service/contact-us"
              className="group flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  Contact Us
                </h4>
                <p className="text-sm text-gray-600">Get in touch with our team</p>
              </div>
              <span className="text-blue-600 ml-auto">→</span>
            </Link>
            <Link
              href="/stores"
              className="group flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  Find a Store
                </h4>
                <p className="text-sm text-gray-600">Visit your nearest store</p>
              </div>
              <span className="text-blue-600 ml-auto">→</span>
            </Link>
            <Link
              href="/customer-service/brochures"
              className="group flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  Brochures
                </h4>
                <p className="text-sm text-gray-600">Download our catalogs</p>
              </div>
              <span className="text-blue-600 ml-auto">→</span>
            </Link>
            <Link
              href="/customer-service"
              className="group flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  Customer Service
                </h4>
                <p className="text-sm text-gray-600">Back to main page</p>
              </div>
              <span className="text-blue-600 ml-auto">→</span>
            </Link>
          </div>
        </section>

        {/* Back to Customer Service */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/customer-service"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Customer Service
          </Link>
        </div>
      </main>
    </ContainerProvider>
  );
};

export default FAQPage;
