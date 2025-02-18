"use client";
import Image from "next/image";
import cover from "@/app/components/Images/type.jpg";
import { useState } from "react";
import AnimatedText from "@/components/Animation"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-[auto] relative w-full overflow-hidden">
        <Image
          src={cover}
          alt="Cover image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="z-[-1]"
        />
      <div className="bg-white  p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          <AnimatedText text= 'Contact Us'/></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-red-800 p-2 w-full rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-red-800 p-2 w-full rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-red-800 p-2 w-full rounded"
            required
          />
          <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 w-full">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-center">{status}</p>}
      </div>
    </div>
  );
}
