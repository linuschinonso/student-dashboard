"use client";
import React, { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    gender: "",
    contactMethod: "",
    level: "200lvl",
    reg_number: "",
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSpecialInputs = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://linus-student-backend.onrender.com/students",
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

      console.log("User signed up successfully:", data);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-black py-6">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Student Registration</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="border-0 shadow-2xl">
          <CardHeader className="border-b border-gray-100 pb-6">
            <CardTitle className="text-2xl font-light text-center text-black tracking-wide">
              STUDENT REGISTRATION FORM
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            {error && (
              <Alert
                variant="destructive"
                className="mb-6 bg-red-50 text-red-900 border border-red-200"
              >
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Personal Information
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-black focus:ring-black"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700">Gender</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) =>
                        handleSpecialInputs("gender", value)
                      }
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="text-gray-600">
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="text-gray-600">
                          Female
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="text-gray-600">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Contact Preferences */}
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Contact Preferences
                </h3>
                <div className="space-y-2">
                  <Label className="text-gray-700">
                    Preferred Contact Method
                  </Label>
                  <RadioGroup
                    value={formData.contactMethod}
                    onValueChange={(value) =>
                      handleSpecialInputs("contactMethod", value)
                    }
                    className="flex flex-wrap gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email" className="text-gray-600">
                        Email
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone" className="text-gray-600">
                        Phone Call
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="text" id="contact-text" />
                      <Label htmlFor="contact-text" className="text-gray-600">
                        Text Message
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Academic Information
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="level" className="text-gray-700">
                      Level
                    </Label>
                    <Select
                      value={formData.level}
                      onValueChange={(value) =>
                        handleSpecialInputs("level", value)
                      }
                    >
                      <SelectTrigger className="border-gray-200 focus:border-black focus:ring-black">
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100lvl">100 Level</SelectItem>
                        <SelectItem value="200lvl">200 Level</SelectItem>
                        <SelectItem value="300lvl">300 Level</SelectItem>
                        <SelectItem value="400lvl">400 Level</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg_number" className="text-gray-700">
                      Registration Number
                    </Label>
                    <Input
                      id="reg_number"
                      name="reg_number"
                      value={formData.reg_number}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-black focus:ring-black"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Account Credentials */}
              {/* <div className="space-y-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Account Credentials
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-700">
                      Username
                    </Label>
                    <Input
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-black focus:ring-black"
                      required
                    />
                  </div>
                </div>
              </div> */}

              <div className="pt-6 border-t border-gray-100">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto bg-black hover:bg-gray-900 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
