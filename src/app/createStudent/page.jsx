"use client";
import Navbar from "@/components/Navbar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

function page() {
  return (
    <div className="bg-[#121212]">
      <Navbar />
      {/* <Sidebar /> */}
      {/* <Dropdown /> */}
      <br />
      <Breadcrumb
        className="lg:hidden"
        spacing="4px"
        color={"white"}
        ml={5}
        separator={<ChevronRightIcon />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#" color={"white"} className="text-white">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink color={"white"} href="/dashboard">
            Create Student
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default page;
