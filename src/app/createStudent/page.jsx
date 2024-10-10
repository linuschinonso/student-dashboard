"use client";
import Navbar from "@/components/Navbar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { useState } from "react";

function Page() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    full_name: "",  // Corrected to match state
    email: "",
    phone: "",
    gender: "",
    contactMethod: "",
    level: "200lvl",  // Initial default value
    reg_number: "",
    username: "",
    password: "",
  });

  // State to manage API response and errors
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://linus-student-backend-fmzv.onrender.com/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      // Handle success, show feedback to the user, redirect, etc.
      console.log("User signed up successfully:", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <Navbar />
      <br />

      {/* Breadcrumb navigation */}
      <Breadcrumb
        className="lg:hidden"
        spacing="4px"
        color="white"
        ml={5}
        separator={<ChevronRightIcon />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#" color="white">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink color="white" href="/dashboard">
            Create Student
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Registration Form */}
      <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Registration Form
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="full_name" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Gender</label>
            <div className="flex space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Other</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Preferred Contact Method
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Email</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === "phone"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Phone Call</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="text"
                  checked={formData.contactMethod === "text"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Text Message</span>
              </label>
            </div>
          </div>

          {/* New fields */}
          <div>
            <label htmlFor="level" className="block text-gray-700 font-medium">
              Level
            </label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="100lvl">100lvl</option>
              <option value="200lvl">200lvl</option>
              <option value="300lvl">300lvl</option>
              <option value="400lvl">400lvl</option>
            </select>
          </div>

          <div>
            <label htmlFor="reg_number" className="block text-gray-700 font-medium">
              Registration Number
            </label>
            <input
              type="text"
              id="reg_number"
              name="reg_number"
              value={formData.reg_number}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
