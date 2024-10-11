"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Sidebar from "@/components/Sidebar";
import { BarChart, ChartContainer, PieChart } from "@mui/x-charts";
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
// import { Button } from "primereact/button";

export default function BasicDemo() {
  function addCommas(number) {
    if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [products, setproducts] = useState([]);
  async function fetchAllStudents() {
   // const endpoint = "https://linus-student-backend-fmzv.onrender.com/students";
      const endpoint = "https://linus-student-backend.vercel.app/students"
    try {
      const response = await axios.get(endpoint);

      if (response.status === 200) {
        console.log("Students:", response.data);
        setproducts(response.data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error(
          "Response error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Error setting up the request
        console.error("Error setting up request:", error.message);
      }
    }
  }

  useEffect(() => {
    fetchAllStudents();
  }, []);

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
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <p className="text-white text-2xl font-bold m-4 ml-8 sm:text-center">
        College Dashboard
      </p>
      <div className="flex flex-row  items-center justify-center flex-wrap gap-4">
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white"> Admin Users</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(1)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white"> 100 Level</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(820)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white"> 200 Level</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(620)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white"> 300 Level</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(340)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white"> 400 Level</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(100)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white"> 500 Level</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(125)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white">Teachers</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(18)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white">Number Of Alumni</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(18)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-[1px] border-[#fff] mt-2 h-[105px] w-[90%] rounded-lg flex items-center justify-around p-1 lg:w-[25%] glass2 shadow-sm transition duration-300 ease-in-out">
          <div className="gap-5 gap-y-0 w-[60%]">
            <Stat>
              <StatLabel>
                <p className="text-white">Number Of Departments</p>
              </StatLabel>
              <StatNumber>
                <p className="text-white"> {addCommas(18)}</p>
              </StatNumber>
              <StatHelpText>
                <p className="text-white">
                  {/* {Date(user?.joinDate).slice(4, 15)} */}
                </p>
              </StatHelpText>
            </Stat>
          </div>
          <div className="flex self-end items-center justify-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeWidth={1}
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <br />
      {/* <p className="text-white text-2xl font-bold m-4 ml-10 sm:text-center">
        Analytics
      </p> */}
      {/* <div className="md:flex flex-row space-x-4 lg:self-center justify-center sm:flex-col">
        <div>
          <p className="text-white text-xl font-medium m-4 ml-10 sm:text-center">
            Students
          </p>
          <div className="flex flex-row text-white  items-center justify-center flex-wrap gap-4">
            <PieChart
              className="text-white"
              series={[
                {
                  data: [
                    { id: 0, value: 160, label: "Male", color: "dodgerblue" },
                    { id: 1, value: 140, label: "Female", color: "#F72D93" },
                  ],
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },

                  // highlighted: { color: "white" },
                },
              ]}
              width={400}
              height={250}
            />
          </div>
        </div>
        <div>
          <p className="text-white text-xl font-medium m-4 mt-2 ml-10 sm:text-center">
            Teachers
          </p>
          <div className="flex flex-row text-white  items-center justify-center flex-wrap gap-4">
            <>
              <PieChart
                className="text-white"
                series={[
                  {
                    data: [
                      { id: 0, value: 160, label: "Male", color: "dodgerblue" },
                      { id: 1, value: 140, label: "Female", color: "#9B1FE8" },
                    ],
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: "gray",
                    },

                    // highlighted: { color: "white" },
                  },
                ]}
                sx={{
                  ":-moz-placeholder": "white",
                  color: "white",
                }}
                width={400}
                height={250}
              />
            </>
          </div>
        </div>
      </div> */}
      <p className="text-white text-2xl font-bold m-4 ml-10 sm:text-center">
        Students
      </p>
      <div className="flex justify-center items-center text-white border border-white m-2">
        <Box
          sx={{
            overflow: "auto",
            color: "white",
            width: "95%", // Adjust the width as necessary
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{ color: "white" }}
                    variant="subtitle2"
                    fontWeight={600}
                  >
                    #
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{ color: "white" }}
                    variant="subtitle2"
                    fontWeight={600}
                  >
                    Reg Number
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{ color: "white" }}
                    variant="subtitle2"
                    fontWeight={600}
                  >
                    Full Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{ color: "white" }}
                    variant="subtitle2"
                    fontWeight={600}
                  >
                    Attendance Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "white",
                      }}
                    >
                      {product.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ color: "white" }}
                      variant="subtitle2"
                      fontWeight={600}
                    >
                      {product.reg_number}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                      sx={{ color: "white" }}
                    >
                      {product.full_name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                      sx={{ color: "white" }}
                    >
                      {product.status ? product.status : "Absent"}{" "}
                      {/* Attendance Status */}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </div>

      <br />
    </div>
  );
}
