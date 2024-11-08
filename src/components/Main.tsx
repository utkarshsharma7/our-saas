// components/MainContent.tsx
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Define Product interface with a rating property
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number; // New property for star rating
}

interface MainContentProps {
  sampleProducts: Product[];
}

// Helper function to render stars based on the rating
const renderStars = (rating: number) => {
  const fullStar = "★";
  const emptyStar = "☆";
  return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
};

const MainContent: React.FC<MainContentProps> = ({ sampleProducts }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50">
      {/* Search Bar */}
      <div className="flex items-center justify-between mb-6">
        <Input
          placeholder="Search"
          className="w-full md:w-1/3 border-gray-300 focus:ring-blue-500"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <Card
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-2 text-gray-600">
              <p>{product.description}</p>
              {/* Star Rating */}
              <div className="text-yellow-500 text-lg mt-2">
                {renderStars(product.rating)}
              </div>
            </CardContent>
            <CardFooter className="p-4 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
