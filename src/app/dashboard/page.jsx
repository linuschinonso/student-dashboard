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
import { Box, Chip, Typography } from "@mui/material";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
// import { Button } from "primereact/button";

export default function BasicDemo() {
  function addCommas(number) {
    if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [count100lvls, setCount100lvls] = useState(0);
  const [products, setproducts] = useState([]);
  async function fetchStudentsCountByLevel() {
    try {
      const response = await fetch(
        "https://linus-student-backend.onrender.com/student/lvls"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data; // Returns an array of { level, count }
    } catch (error) {
      console.error("Error fetching student count by level:", error);
    }
  }
  async function fetchAllStudents() {
    const endpoint = "https://linus-student-backend-grop.vercel.app/students";
    try {
      const response = await axios.get(endpoint);

      if (response.status === 200) {
        console.log("Students:", response.data);
        // alert(JSON.stringify(response.data));
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
  const [studentCounts, setStudentCounts] = useState([]);

  useEffect(() => {
    const getStudentCounts = async () => {
      const counts = await fetchStudentsCountByLevel();
      setStudentCounts(counts);
      console.log(counts);
    };

    getStudentCounts();
  }, []);

  useEffect(() => {
    fetchAllStudents();
  }, []);
  useEffect(() => {
    const levelCount = studentCounts.find((item) => item.level === "100lvls");
    setCount100lvls(levelCount ? levelCount.count : 0);
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
                <p className="text-white">
                  {" "}
                  {addCommas(
                    studentCounts.find((item) => item.level === "100lvl")
                      ?.count || 0
                  )}
                </p>
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
                <p className="text-white">
                  {" "}
                  {addCommas(
                    studentCounts.find((item) => item.level === "200lvl")
                      ?.count || 0
                  )}
                </p>
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
                <p className="text-white">
                  {" "}
                  {addCommas(
                    studentCounts.find((item) => item.level === "300lvl")
                      ?.count || 0
                  )}
                </p>
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
                <p className="text-white">
                  {" "}
                  {addCommas(
                    studentCounts.find((item) => item.level === "400lvl")
                      ?.count || 0
                  )}
                </p>
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
      <div className="w-full p-4">
        <Card className="border border-white/20">
          <ScrollArea className="h-[calc(100vh-200px)] w-full">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-white/5">
                  <TableHead className="text-white font-semibold">ID</TableHead>
                  <TableHead className="text-white font-semibold">
                    Reg Number
                  </TableHead>
                  <TableHead className="text-white font-semibold hidden md:table-cell">
                    Full Name
                  </TableHead>
                  <TableHead className="text-white font-semibold hidden sm:table-cell">
                    Level
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="hover:bg-white/5">
                    <TableCell className="text-white">{product.id}</TableCell>
                    <TableCell className="text-white font-medium">
                      {product.reg_number}
                    </TableCell>
                    <TableCell className="text-white/90 hidden md:table-cell">
                      {product.full_name}
                    </TableCell>
                    <TableCell className="text-white/90 hidden sm:table-cell">
                      {product?.level}
                    </TableCell>
                    <TableCell className="text-white/90">
                      {product.status || "Absent"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </Card>

        {/* Mobile View - Displayed under each row for smaller screens */}
        <div className="md:hidden space-y-4 mt-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="p-4 border border-white/20 space-y-2"
            >
              <div className="flex justify-between">
                <span className="text-white/70">ID:</span>
                <span className="text-white">{product.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Reg Number:</span>
                <span className="text-white">{product.reg_number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Full Name:</span>
                <span className="text-white">{product.full_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Level:</span>
                <span className="text-white">{product?.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Status:</span>
                <span className="text-white">{product.status || "Absent"}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <br />
    </div>
  );
}
