"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Sign-up data:", formData);
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign-up logic here
    console.log("Sign-up with Google");
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded-lg border border-gray-200">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Sign Up
      </h1>

      <div className="space-y-4">
        <div>
          <Label className="block text-gray-600 mb-1">Name</Label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter your name"
            className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label className="block text-gray-600 mb-1">Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email"
            className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label className="block text-gray-600 mb-1">Number</Label>
          <Input
            type="tel"
            value={formData.number}
            onChange={(e) => handleChange("number", e.target.value)}
            placeholder="Enter your phone number"
            className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label className="block text-gray-600 mb-1">Password</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Enter your password"
            className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label className="block text-gray-600 mb-1">Confirm Password</Label>
          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            placeholder="Confirm your password"
            className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <Button
        onClick={handleSignUp}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
      >
        Sign Up
      </Button>

      <p className="mt-4 text-center text-sm text-gray-600">
        If you are already registered,{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log in
        </Link>
      </p>

      <Button
        onClick={handleGoogleSignUp}
        className="w-full mt-4 bg-red-600 hover:bg-red-800 text-white py-2 rounded-md flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-5 h-5 mr-2"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.9 0 7.3 1.4 9.8 3.8l7.4-7.4C35.7 1.7 30.3 0 24 0 14.7 0 6.4 5.1 2.4 12.6l8 6.2C13 11.1 18 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M24 48c5.6 0 10.9-1.8 15-5.4l-7.2-6.1C28.7 39.9 26.5 40.5 24 40.5c-6 0-11-3.5-13.4-8.5l-8.1 6.2C6.4 42.8 14.7 48 24 48z"
          />
          <path
            fill="#FBBC05"
            d="M46.5 20H24v8.5h12.8c-1.5 4.3-5.3 7.3-9.8 7.3-3.1 0-5.9-1.3-7.8-3.4l-8.1 6.2C14 45.4 18.7 48 24 48c10.3 0 18.5-8.2 18.5-18.5 0-1.2-.1-2.3-.3-3.5z"
          />
          <path
            fill="#4285F4"
            d="M2.4 12.6C.9 16.1 0 20 0 24s.9 7.9 2.4 11.4l8-6.2c-.7-2.1-1.1-4.3-1.1-6.7s.4-4.6 1.1-6.7l-8-6.2z"
          />
        </svg>
        Sign Up with Google
      </Button>
    </div>
  );
};

export default SignUp;
