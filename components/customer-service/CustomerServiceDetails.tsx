import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

interface DetailItem {
  title: string;
  content: string | React.ReactNode;
}

interface CustomerServiceDetailsProps {
  title: string;
  subtitle?: string;
  description?: string;
  details?: DetailItem[];
  relatedLinks?: Array<{
    title: string;
    href: string;
  }>;
}

export default function CustomerServiceDetails({
  title,
  subtitle,
  description,
  details = [],
  relatedLinks = [],
}: CustomerServiceDetailsProps) {
  return (
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
            {title}
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
        )}
        {description && (
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </header>

      {/* Details Section */}
      {details.length > 0 && (
        <section className="mb-12">
          <div className="space-y-8">
            {details.map((detail, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {detail.title}
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {typeof detail.content === "string" ? (
                    <p>{detail.content}</p>
                  ) : (
                    detail.content
                  )}
                </div>
                {index < details.length - 1 && (
                  <Separator className="mt-8" />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Links */}
      {relatedLinks.length > 0 && (
        <section className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Related Information
          </h3>
          <div className="space-y-3">
            {relatedLinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.href}
                  className="text-blue-600 hover:underline font-medium inline-flex items-center gap-2 group"
                >
                  {link.title}
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

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
  );
}
