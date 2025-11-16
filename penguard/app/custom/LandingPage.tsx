"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import { ArrowDown, LucideIcon, Menu, Star, X } from "lucide-react";
import AboutUsCards from "./AboutUsCards";
import { LucideIconName } from "./DynamicLucideIcon";
import Footer from "./Footer";
import About from "./About";
import Service from "./Services";
import PricingCard from "./Pricing";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
 const prices= [
  {
    id: 0,
    title: "Free",
    price: "Free",
    description: "Essential safety alerts and basic access for individual protection.",
    features: [
      "Basic Panic Alert (Location Share)",
      "Call Police on Behalf (Manual Action)",
      "Limited to 1 User",
      "5 Proactive Risk Assessments (Chatbot)",
      "Ad-Supported"
    ],
    "idx": 0,
    "buttonText": "Start for Free"
  },
  {
    id: 1,
    title: "Basic",
    price: "R20",
    description: "Full-featured, coordinated community response for your entire household.",
    features: [
      "Real-Time Navigation to Victim",
      "Up to 8 Users per Subscription.pdf]",
      "Coordinated Backup ('I'm Going' Feature)",
      "Unlimited Proactive Risk Assessments (Chatbot)",
      "Group Chat for Responders.pdf]"
    ],
    "idx": 1,
    "buttonText": "Get Started"
  },
  {
    id: 2,
    title: "Pro",
    price: "R69",
    description: "Advanced safety, comprehensive data analytics, and priority support for larger groups.",
    features: [
      "Includes All Basic Features",
      "Full Analytics Dashboard Access (Hotspot Reporting)",
      "Extended 15 User Limit",
      "Priority Server Access & Support",
      "Secure & Encrypted Group Chat"
    ],
    "idx": 2,
    "buttonText": "Upgrade to Pro"
  }
]
  return (
    <main className="overflow-x-hidden">
      {" "}
      <section className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 relative overflow-hidden font-poppins overflow-x-hidden">
        {/* Top Bar */}
        <div className="w-full p-4 flex justify-between items-center z-40">
          <h1 className="text-purple-200 font-bold text-lg">PanGuard ®</h1>

          <div className="flex flex-row space-x-2 items-center">
            <Menu
              className={`cursor-pointer text-purple-200 ${
                isOpen ? "hidden" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
            <X
              className={`cursor-pointer text-purple-200 ${
                isOpen ? "" : "hidden"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {/* Text at bottom-left */}
        <div className="absolute bottom-10 left-6 w-4/5 md:w-2/3">
          <h1 className="text-purple-100 font-semibold font-inter text-3xl md:text-4xl leading-snug drop-shadow-lg">
            PanGuard turns your phone into a lifeline connecting you to
            trusted help instantly.
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {isOpen ? <Navbar /> : null}
        </AnimatePresence>
      </section>
      <About/>
      <Service/>
      <div className="space-y-10 p-6 md:p-10 ">
         <div className="flex w-full max-w-7xl mx-auto items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-purple-600 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-neutral-800">P</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-purple-600  whitespace-nowrap">PRICING</h2>
            <div className="flex-1 border-t border-purple-600 "></div>
          </div>
        </div>
      <div className="grid grid-cols-1 md:gap-5 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
        prices.map((items)=>(
            <PricingCard key={items.id} price={items.price} description={items.description} features={items.features} idx={items.idx} buttonText={items.buttonText} />
        ))
      }
      </div>
      </div>
      <Footer/>
    </main>
  );
}

export default LandingPage;
