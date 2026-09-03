import ContainerProvider from "@/components/Providers/ContainerProvider";
import CustomerServiceDetails from "@/components/customer-service/CustomerServiceDetails";
import React from "react";

const AboutServicesPage = () => {
  const detailItems = [
    {
      title: "Delivery Services",
      content:
        "IKEA offers convenient delivery options for large furniture items and home goods. We provide flexible delivery scheduling, and our professional delivery team ensures your items arrive safely and in perfect condition. Standard delivery includes placement in your home.",
    },
    {
      title: "Assembly Services",
      content:
        "Worried about assembling furniture? Our expert assembly team can handle the work for you. We offer assembly services for single items or complete room setups. Professional assembly ensures proper construction and stability of your furniture.",
    },
    {
      title: "Kitchen Installation",
      content:
        "Planning a kitchen renovation? Our kitchen installation experts will help you install your new IKEA kitchen system. From cabinet assembly to appliance installation, we provide comprehensive solutions tailored to your space.",
    },
    {
      title: "Installation Services",
      content:
        "Beyond assembly, we offer specialized installation services for shelving systems, wardrobes, and other built-in solutions. Our trained professionals ensure everything is installed correctly and securely.",
    },
    {
      title: "Interior Design Consultation",
      content:
        "Not sure how to design your space? Book a consultation with our interior design experts. They can help you plan room layouts, select furniture, and create a cohesive design that matches your style and needs.",
    },
    {
      title: "Project Management",
      content:
        "For large renovation or new home projects, we offer project management services. Our team coordinates all aspects of your project from planning to completion, ensuring everything runs smoothly.",
    },
  ];

  const relatedLinks = [
    { title: "Guarantees & Warranties", href: "/customer-service/guarantees-warranties" },
    { title: "Terms and Conditions", href: "/customer-service/terms-conditions" },
    { title: "Return Policy", href: "/customer-service/return-policy" },
    { title: "Contact Us", href: "/customer-service/contact-us" },
  ];

  return (
    <ContainerProvider>
      <CustomerServiceDetails
        title="About Services"
        subtitle="Comprehensive Solutions for Your Home"
        description="IKEA offers a wide range of services to make your home furnishing experience easier and more convenient. From delivery and assembly to design consultation and project management, we're here to help at every step."
        details={detailItems}
        relatedLinks={relatedLinks}
      />
    </ContainerProvider>
  );
};

export default AboutServicesPage;
