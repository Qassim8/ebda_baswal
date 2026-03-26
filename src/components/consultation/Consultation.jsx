"use client";
import { useState } from "react";
import Image from "next/image";
import MainTitle from "../MainTitle";
import { Send } from "tabler-icons-react";
import { IconSend2 } from "@tabler/icons-react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا تقدر تربط مع الـ Backend بتاعك
    console.log("Form Submitted:", formData);
    alert("تم استلام استشارتك بنجاح، سنتواصل معك قريباً.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="py-20 relative overflow-hidden bg-(--second-color)"
      id="consultation"
    >
      <div className="container mx-auto px-5 md:px-0 relative z-20">
        <MainTitle
          title="استشر فريقنا"
          subtitle="نحن هنا لدعمك! ارسل استشارتك وسيتواصل معك فريقنا المتخصص لمساعدتك في إيجاد الحلول."
          center={true}
        />

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-rose-50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block font-bold text-slate-700 mb-2"
              >
                الاسم الكامل
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="اكتب اسمك"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-main focus:border-main focus:outline-none transition-all"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block font-bold text-slate-700 mb-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-main focus:border-main focus:outline-none transition-all"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block font-bold text-slate-700 mb-2"
              >
                الاستشارة
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="اكتب استشارتك هنا..."
                className="w-full resize-none border border-gray-200 rounded-lg px-4 py-3 focus:ring-main focus:border-main focus:outline-none transition-all"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-(--main-color) text-white px-10 py-3 rounded-lg font-bold hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-200 flex items-center justify-center gap-2 mx-auto active:scale-95"
              >
                <IconSend2 />
                <span>إرسال الاستشارة</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Decorative Background Icon */}
      <div className="absolute -left-20 -bottom-20 w-75 z-10 opacity-10 pointer-events-none">
        <Image
          src="/bg-logo-removebg-preview.png"
          alt="icon decoration"
          width={300}
          height={300}
          className="max-w-full"
        />
      </div>
    </section>
  );
}
