'use client';

import ContainerProvider from "@/components/Providers/ContainerProvider";
import Link from "next/link";
import React, { useState } from "react";

interface ContactChannel {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactChannels: ContactChannel[] = [
    {
      id: 1,
      title: "Phone Support",
      description: "Call our customer service team",
      icon: "📞",
      details: [
        "Monday - Friday: 8:00 AM - 8:00 PM",
        "Saturday: 10:00 AM - 6:00 PM",
        "Sunday: 11:00 AM - 5:00 PM",
        "+1-800-IKEA-USA (4532)",
      ],
    },
    {
      id: 2,
      title: "Email Support",
      description: "Send us your inquiry",
      icon: "📧",
      details: [
        "Response time: 24-48 hours",
        "For general inquiries: info@ikea.com",
        "For orders: orders@ikea.com",
        "For complaints: feedback@ikea.com",
      ],
    },
    {
      id: 3,
      title: "Live Chat",
      description: "Chat with our team in real-time",
      icon: "💬",
      details: [
        "Available during business hours",
        "Quick responses to common questions",
        "Instant assistance with orders",
        "Available on website and mobile app",
      ],
    },
    {
      id: 4,
      title: "Store Visit",
      description: "Visit your nearest IKEA store",
      icon: "🏪",
      details: [
        "Meet with customer service in person",
        "Get expert advice from staff",
        "Browse and test products",
        "Find your store: Visit our Store Locator",
      ],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <ContainerProvider>
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
              Contact Us
            </li>
          </ol>
        </nav>

        {/* Hero Header Section */}
        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Have a question or need assistance? We are here to help! Choose your
            preferred way to get in touch with our customer service team.
          </p>
        </header>

        {/* Contact Channels */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactChannels.map((channel) => (
              <div
                key={channel.id}
                className="rounded-lg border border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <ul className="space-y-2">
                  {channel.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please tell us more about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ and Support */}
        <section className="bg-blue-50 rounded-lg border border-blue-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/faq"
              className="flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">❓</span>
              <div>
                <p className="font-semibold text-gray-900">FAQs</p>
                <p className="text-sm text-gray-600">Common questions</p>
              </div>
            </Link>
            <Link
              href="/customer-service"
              className="flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">🛠️</span>
              <div>
                <p className="font-semibold text-gray-900">Services</p>
                <p className="text-sm text-gray-600">Our services</p>
              </div>
            </Link>
            <Link
              href="/stores"
              className="flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-gray-900">Find a Store</p>
                <p className="text-sm text-gray-600">Locations & hours</p>
              </div>
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

export default ContactUsPage;
