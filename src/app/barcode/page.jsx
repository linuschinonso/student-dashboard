"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!inputValue) return;
    setLoading(true);
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        inputValue
      )}&size=256x256`
    );

    if (response.ok) {
      const url = response.url;
      setQrCodeUrl(url);
      setLoading(false);
    } else {
      console.error("Failed to generate QR code");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#121212] p-4 text-white">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text or URL"
          className="p-2 mb-2 w-full text-black"
        />
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {!loading ? "Generate" : "Loading..."}
        </button>
        {qrCodeUrl && (
          <div className="mt-4">
            <img src={qrCodeUrl} alt="Generated QR Code" />
          </div>
        )}
      </div>
    </>
  );
};

export default QRCodeGenerator;
