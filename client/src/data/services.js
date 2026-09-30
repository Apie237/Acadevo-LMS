import { Globe, AppWindow, School, ShoppingCart, Palette, Lightbulb } from "lucide-react";

export const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive, professional websites that present your organisation clearly on every device.",
    points: ["Responsive, mobile-first design", "Fast, SEO-friendly pages", "Easy to maintain"],
  },
  {
    id: "web-apps",
    icon: AppWindow,
    title: "Web Applications",
    description: "Custom applications designed around the way your business actually works.",
    points: ["Tailored workflows", "User accounts & dashboards", "APIs & integrations"],
  },
  {
    id: "school-management",
    icon: School,
    title: "School Management Systems",
    description: "Digital solutions that help schools and educational institutions manage learning and administration.",
    points: ["Student & course management", "Online learning tools", "Admin dashboards"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Online stores and digital commerce experiences that make it easy for customers to buy.",
    points: ["Product catalogues", "Checkout & payments", "Order management"],
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive and user-friendly interfaces that people enjoy using.",
    points: ["User flows & wireframes", "Interface design", "Prototypes"],
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Technology guidance and project support to help you make the right decisions.",
    points: ["Technology planning", "Project scoping", "Ongoing support"],
  },
];
