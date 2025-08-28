"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("junior")

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
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">CODE BASH 2.0</h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              Join the ultimate competitive programming challenge. Push your limits, showcase your skills, and compete
              for glory.
            </p>
          </div>
          <div className="text-sm text-background/60">
            © 2025 CODEBASH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
