// components/Sidebar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  sampleCategories: string[];
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  toggleSidebar,
  sampleCategories,
}) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAuthenticated = false;
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
      router.push("/list-product");
    } else {
      router.push("/signup");
    }
  };

  return (
    <div
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform fixed md:relative w-64 bg-white shadow-lg p-6 space-y-6 h-full md:h-auto flex-shrink-0`}
    >
      <div className="flex items-center justify-between mb-4">
        <img
          src="/api/placeholder/100/40"
          alt="Logo"
          className="h-10 object-contain"
        />
        {/* Close Button for Mobile */}
        <button className="md:hidden text-gray-800" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <Link href="#" onClick={handleClick}>
        <button className="text-md md:text-xl font-semibold bg-purple-400 p-2 rounded-lg text-gray-800 mb-4">
          List my Product
        </button>
      </Link>
      <div className="space-y-4">
        <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
          My Orders
        </div>
        <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
          Categories
        </div>
      </div>
      <div className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Categories
      </div>
      <div className="space-y-2">
        {sampleCategories.map((category) => (
          <div
            key={category}
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
