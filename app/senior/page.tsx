"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, MapPin, Trophy, Users, Code, Zap, ArrowLeft, Cookie, Utensils } from "lucide-react"
import Link from "next/link"

export default function SeniorCompetition() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const registraionDeadline = new Date("2025-09-07T23:59:59")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = registraionDeadline.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const itinerary = [
    {
      time: "03:00 PM",
      event: "Registration & Check-in",
      description: "Welcome and team registration for senior participants",
      icon: <Users className="w-5 h-5" />,
    },
    {
      time: "03:30 PM",
      event: "Opening Ceremony",
      description: "Introduction, Contest rules and platform walkthrough",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      time: "04:30 PM",
      event: "Round 1 Begins",
      description: "2-hour competitive programming challenge",
      icon: <Code className="w-5 h-5" />,
    },
    {
      time: "06:30 PM",
      event: "Refreshment & Namaz Break",
      icon: <Cookie className="w-5 h-5" />,
    },
    {
      time: "07:30 PM",
      event: "Round 2 Begins",
      description: "2-hour competitive programming challenge",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      time: "09:30 PM",
      event: "Dinner",
      icon: <Utensils className="w-5 h-5" />,
    },
    {
      time: "10:00 PM",
      event: "Closing Ceremony",
      description: "Results & Prize Distribution",
      icon: <Trophy className="w-5 h-5" />,
    }
  ]

  const faqs = [
    {
      question: "Who can participate in the Senior Competition?",
      answer:
        "The Senior Competition is open to Shia community members aged 16–23. Participants may be enrolled in Intermediate, A Levels, or Undergraduate programs (at least until January 2025). Those not currently enrolled in an institute are also eligible to participate.",
    },
    {
      question: "Do I need prior coding experience?",
      answer:
        "Yes, at least one team member must have prior coding experience in one of the allowed languages. The contest is designed to test problem-solving, teamwork, and speed programming skills.",
    },
    {
      question: "Is the competition individual or team-based?",
      answer:
        "It is strictly a team contest. Each team must have 2–3 members. Solo participation is not allowed.",
    },
    {
      question: "What should teams bring on competition day?",
      answer:
        "Each team must bring one laptop only with a pre-installed IDE of their choice",
    },
    {
      question: "Which programming languages are allowed?",
      answer:
        "Participants can solve problems in: C++, Java, Javascript, Python, C",
    },
    {
      question: "What is the format of the competition?",
      answer: "The contest has two rounds. Each round includes 6–8 programming problems of varying difficulty. Teams will have 2 hours per round to solve and submit solutions.",
    },
    {
      question: "What kind of problems will be given?",
      answer:
        "Problems will focus on logic, algorithms, and competitive programming concepts. They are revealed only at the start of each round, ensuring fairness and testing adaptability under pressure.",
    },
    {
      question: "Can we use AI tools like ChatGPT, Copilot, or Gemini?",
      answer:
        "No. The use of AI assistants or mobile/smart devices is strictly prohibited.",
    },
    {
      question: "What rewards can participants expect?",
      answer: "Top-performing teams will receive cash prizes, certificates, goodie bags, and possible internship opportunities. Winners will be recognized at the closing ceremony on 14th September 2025.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-secondary">Hey, Rising Experts</h1>
          <p className="text-xl md:text-2xl mb-8">Ready to race the clock, crack challenges, and shine? </p>
          <Link href="https://tinyurl.com/senior-codebash2025">
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-8 font-semibold">
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-card-foreground">Registration Ends In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="bg-primary text-primary-foreground p-6 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-secondary">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base font-semibold mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Event Schedule</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {itinerary.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-card-foreground">{item.event}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{item.time}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-primary-foreground/20">
                  <AccordionTrigger className="text-left hover:text-secondary text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary-foreground/90 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">CODE BASH 2.0 - Senior</h3>
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
