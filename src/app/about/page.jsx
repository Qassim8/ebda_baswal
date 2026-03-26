import About from "@/components/about/AboutSection";
import Features from "@/components/about/Features";
import Founder from "@/components/about/Founder";
import Story from "@/components/about/Story";
import Breadcrumb from "@/components/Breadcrumb";
import Goals from "@/components/home/Goals";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <Breadcrumb title="من نحن" pageName="من نحن" />
      <Founder />
      <Story />
      <About about={true} />
      <Features />
      <Goals about={true} />
      <Testimonials />
    </>
  );
}
