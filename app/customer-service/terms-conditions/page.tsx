import ContainerProvider from "@/components/Providers/ContainerProvider";
import CustomerServiceDetails from "@/components/customer-service/CustomerServiceDetails";
import React from "react";

const TermsConditionsPage = () => {
  const detailItems = [
    {
      title: "User Agreement",
      content:
        "By using IKEA's website and services, you agree to comply with these terms and conditions. These terms apply to all visitors, users, and others who access or use our website and services. If you do not agree to be bound by these terms, do not use our website.",
    },
    {
      title: "Use License",
      content:
        "Permission is granted to temporarily download one copy of materials (information or software) from IKEA's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations; or transfer the materials to another person.",
    },
    {
      title: "Product Information and Pricing",
      content:
        "IKEA strives to provide accurate product descriptions, images, and pricing on our website. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. If a product is listed at an incorrect price due to an error, IKEA reserves the right to refuse or cancel any orders placed for that product.",
    },
    {
      title: "Order Acceptance and Cancellation",
      content:
        "IKEA reserves the right to refuse or cancel any order. Orders are subject to verification and authorization. Once you place an order, it is considered an offer to purchase subject to acceptance by IKEA. IKEA reserves the right to cancel any order prior to shipment if payment cannot be verified or for any other lawful reason.",
    },
    {
      title: "Limitation of Liability",
      content:
        "In no event shall IKEA, its suppliers, or their respective officers, directors, employees, or agents be liable for any damages (including, without limitation, direct, indirect, special, incidental, or consequential damages) arising out of or in connection with your use of the website or the materials contained therein.",
    },
    {
      title: "Disclaimer of Warranties",
      content:
        "The materials on IKEA's website are provided on an 'as is' basis. IKEA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "Intellectual Property",
      content:
        "The website and all of its content, including text, graphics, logos, images, audio clips, digital downloads, and data compilations, are the property of IKEA or its content suppliers and are protected by international copyright laws.",
    },
    {
      title: "Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which IKEA operates, and you irrevocably submit to the exclusive jurisdiction of the courts located in that jurisdiction.",
    },
  ];

  const relatedLinks = [
    { title: "Return Policy", href: "/return-policy" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Guarantees & Warranties", href: "/guarantees-warranties" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  return (
    <ContainerProvider>
      <CustomerServiceDetails
        title="Terms and Conditions"
        subtitle="Legal Agreement for IKEA Services"
        description="Please read these terms and conditions carefully before using IKEA's website and services. By accessing and using this website, you accept and agree to be bound by these terms and all applicable laws and regulations."
        details={detailItems}
        relatedLinks={relatedLinks}
      />
    </ContainerProvider>
  );
};

export default TermsConditionsPage;
