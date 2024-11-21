"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  const additionalMenuItems = [
    "My Orders",
    "Cart Items",
    "Address",
    "Payments and Refunds",
    "Account Settings",
    "Refer & Earn",
    "Customer Support",
  ];

  const menuItems = [
    { title: "Marriage Homes", href: "/marriage-homes" },
    { title: "Hotels", href: "/hotels" },
    { title: "Halwai Catering", href: "/catering" },
    { title: "Decoration and Tent", href: "/decoration" },
    { title: "Wedding Shoots", href: "/shoots" },
    { title: "Browse ALL", href: "/browse" },
  ];

  return (
    <div className="w-full">
      {/* Main Navigation */}
      <div className="bg-violet-600 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="bg-gray-200 px-4 py-2 rounded -ml-10">
            <span className="text-red-500 font-bold text-xl">LOGO</span>
          </div>

          {/* Location Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="bg-white hover:bg-gray-100">
                Location
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New York</DropdownMenuItem>
              <DropdownMenuItem>London</DropdownMenuItem>
              <DropdownMenuItem>Paris</DropdownMenuItem>
              <DropdownMenuItem>Tokyo</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search Bar */}
          <div className="flex-1 relative">
            <Input
              className="w-full pl-10 bg-white"
              placeholder="Search..."
              type="search"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          {/* Cart & Login */}
          <div className="flex gap-4">
            <Button variant="ghost" className="bg-white hover:bg-gray-100">
              <ShoppingCart />
            </Button>
            <Button variant="ghost" className="bg-white hover:bg-gray-100">
              Login/Register
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-black text-white p-2">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {/* Main Menu Items */}
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}

                  {/* Additional Menu Items */}
                  <div className="border-t border-gray-700 mt-4 pt-4">
                    {additionalMenuItems.map((item) => (
                      <a
                        key={item}
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-100 rounded"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <Sheet open={desktopMenuOpen} onOpenChange={setDesktopMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setDesktopMenuOpen(true)}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {/* Additional Menu Items ONLY */}
                  {additionalMenuItems.map((item) => (
                    <a
                      key={item}
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                      onClick={() => setDesktopMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
