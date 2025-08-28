"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Trophy, Users, Code, Zap, ArrowLeft, Cookie } from "lucide-react"
import Link from "next/link"

export default function JuniorCompetition() {
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
      time: "02:00 PM",
      event: "Registration & Check-in",
      description: "Welcome & registration of junior participants",
      icon: <Users className="w-5 h-5" />,
    },
    {
      time: "02:30 PM",
      event: "Opening Ceremony",
      description: "Introduction, Contest rules and platform walkthrough",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      time: "03:00 PM",
      event: "Junior Contest Begins",
      description: "30 mins platform exploration & 2-hour Scratch Challenge",
      icon: <Code className="w-5 h-5" />,
    },
    {
      time: "05:30 PM",
      event: "Contest Ends",
      description: "Final submissions and judging begins",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      time: "06:00 PM",
      event: " Refreshments",
      icon: <Cookie className="w-5 h-5" />,
    },
  ]

  const faqs = [
    {
      question: "Who can participate in the Junior Competition?",
      answer: "The Junior Competition is open to students from Grade 6 to 10 and O Levels (ages 11–16) who are registered members of KPSIAJ and hold a valid JCIC card. Students may belong to any school or educational system.",
    },
    {
      question: "Do I need prior coding experience?",
      answer:
        "No, prior programming knowledge is not required. The Junior Competition is designed to be fun and beginner-friendly, encouraging creativity and imagination while introducing students to coding in a supportive way.",
    },
    {
      question: "Which programming platform will be used?",
      answer: "All projects must be made in Scratch. This ensures that the focus remains on storytelling, creativity, and problem-solving rather than technical depth.",
    },
    {
      question: "When and how will the competition take place?",
      answer:
        "The Junior round will be held onsite at Fatimiyah Boys School and Fatimiyah Girls School on 13th September 2025 in a single two-hour session. Internet access will be restricted during the contest, and all submissions must be provided as a Scratch file.",
    },
    {
      question: "What should I bring on the competition day?",
      answer:
        "Participants must bring their JCIC card for verification. You do not need to bring your own laptop, as computers with Scratch installed will be provided onsite for all participants.",
    },
    {
      question: "How should I prepare for the event?",
      answer:
        "Students are encouraged to practice Scratch basics in advance. Working with loops, conditions, and variables will help build confidence and allow participants to focus on creativity during the contest.",
    },
    {
      question: "What support will be available during the competition?",
      answer:
        "Organizers and mentors will be available to provide technical assistance with Scratch setup and ensure everything runs smoothly. However, they will not help with solving the actual challenge.",
    },
    {
      question: "What rewards can participants expect?",
      answer: "Top performers will receive prizes worth up to PKR 100,000 such as Laptops and much more, along with recognition at the closing ceremony. However, all the participants will get e-certificates. More importantly, participants will gain confidence, exposure, and the chance to showcase their talent.",
    },
    {
      question: "What type of questions will be asked in the competition?",
      answer:
        "The questions in the Junior Competition will be based around a problem statement. Participants will be asked to create a Scratch project, such as a game, story, or animation, that addresses the given challenge. These problem statements are designed to test creativity, logical thinking, and the ability to translate ideas into interactive Scratch projects.",
    },
    {
      question: "What is the judging criteria for the Junior Competition?",
      answer: "Projects will be judged on creativity, functionality, coding logic, code organization, user experience, and bonus features such as sound, levels, or animations. A total of 100 marks will be distributed across these categories.",
    },
    {
      question: "Are Grade 11 students allowed to participate in the Junior Competition?",
      answer:
        "No, Grade 11 students are not eligible for the Junior Competition. They can participate in the Senior Competition instead.",
    },
    {
      question: "Will there be a viva or presentation of the project?",
      answer:
        "Some shortlisted participants may be asked to briefly present their project to the judges, explain the logic they used, and answer simple questions about how it works.",
    },
    {
      question: "Can I use pre-made projects or templates in my submission?",
      answer:
        "No, pre-made Scratch templates or previously built projects are not allowed. However, participants are free to use all built-in Scratch assets such as sprites, sounds, and backgrounds that are already available within the Scratch library.",
    },
    {
      question: "How can I practice before the competition?",
      answer:
        "You can practice on: Scratch official website (Scratch - Imagine, Program, Share), Scratch tutorials on YouTube, Beginner courses on Khan Academy – Computer Science basics",
    },
    {
      question: "How will the winners be announced?",
      answer:
        "Judging will take place after all submissions are reviewed. Winners will be announced at the Awards & Closing Ceremony of CodeBash Seniors on 14th September 2025, and the top participants will be contacted by the management.",
    }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-secondary">Hey, Spark Minds</h1>
          <p className="text-xl md:text-2xl mb-8">
            A solo, in-person logic-building contest on Scratch. 🎨💡
            <br />
            No tricky codes — just creativity, colorful blocks, and fresh ideas!
          </p>
          <Link href="https://tinyurl.com/junior-codebash2025">
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
            <h3 className="text-2xl font-bold mb-4">CODEBASH 2.0 - Junior</h3>
            <p className="text-background/80 max-w-2xl mx-auto">Start your competitive programming journey with us!</p>
          </div>
          <div className="text-sm text-background/60">© 2025 CODEBASH. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
