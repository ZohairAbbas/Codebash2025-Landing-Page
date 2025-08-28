"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("junior");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/code-bash-banner.png)" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          {/* Competition Selection Tabs */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Choose Your Competition</h2>

            {/* Tab Buttons */}
            <div className="flex gap-4 mb-8 justify-center">
              <Link href="/junior">
                <button
                  onClick={() => setActiveTab("junior")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "junior"
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  Junior Competition
                </button>
              </Link>
              <Link href="/senior">
                <button
                  onClick={() => setActiveTab("senior")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "senior"
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  Senior Competition
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-background py-10 mt-auto shadow-inner">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <div className="flex gap-6 items-center justify-center mb-4">
            <Link
              href="https://www.instagram.com/kpsiaj_youth/"
              target="_blank"
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <Image
                src="/youth-logo.png"
                alt="Instagram"
                width={96}
                height={96}
                className="rounded-full border-2 border-background shadow"
              />
            </Link>
          </div>
          <div className="mb-2 text-base flex flex-wrap justify-center">
            <a href="mailto:codebash@kpsiaj.org" className="underline">
              📩 codebash@kpsiaj.org
            </a>
            <span className="">
              | 📍 Organized by <b>KPSIAJ Youth Forum</b>
            </span>
          </div>
          <div className="text-xs text-background/70 mt-2">
            &copy; 2025 CodeBash 2.0. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
