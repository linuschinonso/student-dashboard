"use client";
import Navbar from "@/components/Navbar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

function Page() {
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

        <form action="#" method="post" className="space-y-6">
          <div>
            <label
              htmlFor="fullname"
              className="block text-gray-700 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="regname"
              className="block text-gray-700 font-medium"
            >
              Registration Name (if applicable)
            </label>
            <input
              type="text"
              id="regname"
              name="regname"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-gray-700 font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Other</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="prefer-not"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Prefer not to say</span>
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
                  name="contact"
                  value="email"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Email</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contact"
                  value="phone"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Phone Call</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contact"
                  value="text"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Text Message</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="emergency-contact-name"
              className="block text-gray-700 font-medium"
            >
              Emergency Contact Name
            </label>
            <input
              type="text"
              id="emergency-contact-name"
              name="emergency-contact-name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="emergency-contact-phone"
              className="block text-gray-700 font-medium"
            >
              Emergency Contact Phone Number
            </label>
            <input
              type="tel"
              id="emergency-contact-phone"
              name="emergency-contact-phone"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="signature"
              className="block text-gray-700 font-medium"
            >
              Signature
            </label>
            <input
              type="text"
              id="signature"
              name="signature"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
