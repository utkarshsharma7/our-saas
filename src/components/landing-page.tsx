// pages/LandingPage.tsx
"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import MainContent from "@/components/Main";

const LandingPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sampleProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      description:
        "High-quality noise-canceling wireless headphones with Bluetooth 5.0.",
      image: "/api/placeholder/400/320",
      rating: 5,
    },
    {
      id: 2,
      title: "Smartwatch Series 7",
      description:
        "A powerful smartwatch with a sleek design and health tracking features.",
      image: "/api/placeholder/400/320",
      rating: 4,
    },
    {
      id: 3,
      title: "4K Ultra HD TV",
      description:
        "A 65-inch smart TV with stunning 4K resolution and HDR support.",
      image: "/api/placeholder/400/320",
      rating: 5,
    },
    {
      id: 4,
      title: "Gaming Mouse",
      description:
        "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
      image: "/api/placeholder/400/320",
      rating: 4,
    },
    {
      id: 5,
      title: "Electric Kettle",
      description:
        "1.7-liter electric kettle with temperature control and auto shut-off.",
      image: "/api/placeholder/400/320",
      rating: 3,
    },
    {
      id: 6,
      title: "Yoga Mat",
      description:
        "Eco-friendly yoga mat with non-slip surface, perfect for your workouts.",
      image: "/api/placeholder/400/320",
      rating: 4,
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with deep bass and a 12-hour battery life.",
      image: "/api/placeholder/400/320",
      rating: 5,
    },
    {
      id: 8,
      title: "Instant Pot",
      description:
        "A 6-quart multi-functional pressure cooker for quick and easy meals.",
      image: "/api/placeholder/400/320",
      rating: 5,
    },
    {
      id: 9,
      title: "Air Purifier",
      description:
        "Compact air purifier with HEPA filter to remove allergens and pollutants.",
      image: "/api/placeholder/400/320",
      rating: 4,
    },
    {
      id: 10,
      title: "Running Shoes",
      description:
        "Lightweight running shoes with cushioned soles for maximum comfort.",
      image: "/api/placeholder/400/320",
      rating: 4,
    },
  ];

  const sampleCategories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home Decor",
    "Sports",
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        sampleCategories={sampleCategories}
      />

      {/* Main Content */}
      <MainContent sampleProducts={sampleProducts} />
    </div>
  );
};

export default LandingPage;
