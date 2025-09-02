"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Users, Trophy, Code, Zap, Cookie } from "lucide-react";

const itinerary = [
  {
    time: "03:30 PM – 03:45 PM",
    event: "Registration & Check-in",
    description:
      "Arrival, welcome, and registration of all junior participants.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    time: "03:45 PM – 04:00 PM",
    event: "Orientation & Rules",
    description: "Briefing on contest rules, platform walkthrough, and Q&A.",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
  },
  {
    time: "04:00 PM - 04:30 PM",
    event: "Scratch Exploration",
    description: "Hands-on time to explore Scratch and test your equipment.",
    icon: <Code className="w-6 h-6 text-blue-500" />,
  },
  {
    time: "04:30 PM – 06:30 PM",
    event: "Junior Contest",
    description:
      "2-hour Scratch challenge. Receive your task and marking criteria.",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
  },
  {
    time: "06:30 PM – 06:45 PM",
    event: "Submission & Certificates",
    description:
      "Submit your project via Google Form and receive your certificate.",
    icon: <Zap className="w-6 h-6 text-orange-500" />,
  },
  {
    time: "06:45 PM – 07:00 PM",
    event: "Refreshments",
    description: "Enjoy snacks and social time with fellow participants.",
    icon: <Cookie className="w-6 h-6 text-pink-500" />,
  },
];

const faqs = [
  {
    question: "Who can participate in the Junior Competition?",
    answer:
      "The Junior Competition is open to students from Grade 6 to 10 and O Levels (ages 11–16) who are registered members of KPSIAJ and hold a valid JCIC card. Students may belong to any school or educational system.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No, prior programming knowledge is not required. The Junior Competition is designed to be fun and beginner-friendly, encouraging creativity and imagination while introducing students to coding in a supportive way.",
  },
  {
    question: "Which programming platform will be used?",
    answer:
      "All projects must be made in Scratch. This ensures that the focus remains on storytelling, creativity, and problem-solving rather than technical depth.",
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
    answer:
      "Top performers will receive prizes worth up to PKR 100,000 such as Laptops and much more, along with recognition at the closing ceremony. However, all the participants will get e-certificates. More importantly, participants will gain confidence, exposure, and the chance to showcase their talent.",
  },
  {
    question: "What type of questions will be asked in the competition?",
    answer:
      "The questions in the Junior Competition will be based around a problem statement. Participants will be asked to create a Scratch project, such as a game, story, or animation, that addresses the given challenge. These problem statements are designed to test creativity, logical thinking, and the ability to translate ideas into interactive Scratch projects.",
  },
  {
    question: "What is the judging criteria for the Junior Competition?",
    answer:
      "Projects will be judged on creativity, functionality, coding logic, code organization, user experience, and bonus features such as sound, levels, or animations. A total of 100 marks will be distributed across these categories.",
  },
  {
    question:
      "Are Grade 11 students allowed to participate in the Junior Competition?",
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
  },
];

export default function JuniorCompetition() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date("2025-09-07T23:59:59");
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 flex flex-col">
      {/* Floating Register Button (Mobile) */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Link href="https://tinyurl.com/junior-codebash2025">
          <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 text-base shadow-lg rounded-full animate-bounce font-bold">
            Register Now
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Button className="cursor-pointer" variant="ghost">
              Home
            </Button>
          </Link>
          <nav className="flex gap-2">
            <Link href="/senior">
              <Button className="cursor-pointer" variant="ghost" size="sm">
                Senior Competition
              </Button>
            </Link>
            <Link href="#faqs">
              <Button className="cursor-pointer" variant="ghost" size="sm">
                FAQs
              </Button>
            </Link>
            <Link href="https://tinyurl.com/junior-codebash2025">
              <Button className="cursor-pointer" variant="ghost" size="sm">
                Register
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground text-center shadow-lg">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Spark Minds Competition
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto font-medium text-white/90">
            A fun, task-based Scratch programming challenge designed to spark
            creativity and curiosity among students. Whether you’ve coded before
            or are just starting, this competition gives you the chance to
            learn, create, and showcase your imagination in an exciting way.
          </p>
          <Link
            href="https://tinyurl.com/junior-codebash2025"
            className="hidden md:block"
          >
            <Button className="bg-black text-white text-lg px-8 py-4 font-bold mb-4 rounded-full shadow-xl animate-bounce hover:bg-secondary cursor-pointer">
              Register Now
            </Button>
          </Link>
          <div className="flex justify-center mt-6">
            <Image
              src="/scratch.png"
              alt="Scratch Logo"
              width={200}
              height={200}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Countdown & Dates */}
      <section className="py-10 bg-white/80 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            Registration Deadline: 7th September 2025
          </h2>
          <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-4 rounded-lg shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base font-semibold mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <Link href="https://tinyurl.com/junior-codebash2025">
              <Button className="bg-yellow-500 text-black text-lg px-8 py-3 font-bold shadow-md cursor-pointer">
                Register Before Deadline
              </Button>
            </Link>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
            Competition Date: 13th September 2025
          </h3>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-12 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            🗓️ Event Schedule (13th September 2025)
          </h2>
          <p className="text-center text-base md:text-lg text-gray-700 mb-8">
            <span className="font-semibold text-pink-600">Note:</span> If we
            receive more than 50 registrations, the contest may be divided into
            two slots to ensure a smooth experience for all participants.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/90 rounded-xl shadow-md p-6 hover:scale-[1.02] transition-transform"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-pink-700">
                      {item.event}
                    </h3>
                    <span className="font-semibold text-blue-600">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/90 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            📝 How the Competition Works
          </h2>
          <div className="max-w-2xl mx-auto text-lg md:text-xl mb-6 font-medium text-gray-800">
            <p className="mb-4">
              This is a{" "}
              <span className="font-bold text-pink-600">
                task-based competition
              </span>{" "}
              designed to spark creativity and logical thinking.
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li className="mb-2">
                Each participant will be assigned a desktop computer with
                Scratch installed.
              </li>
              <li className="mb-2">
                You’ll have <span className="font-bold">30 minutes</span> to
                explore Scratch and check your equipment.
              </li>
              <li className="mb-2">
                After the warm-up, you’ll receive your{" "}
                <span className="font-bold">task on paper</span> (with pen for
                brainstorming) and the marking criteria.
              </li>
              <li className="mb-2">
                You’ll have <span className="font-bold">2 hours</span> to
                complete your Scratch project.
              </li>
              <li className="mb-2">
                Once time is up, internet access will be provided so you can
                submit your file via Google Form as an attachment.
              </li>
            </ul>
            <p className="mb-4 text-blue-700 font-medium">
              <span className="font-semibold">Note:</span> Your assigned
              location and contest slot will be communicated in your
              confirmation message before 10th September.
            </p>
            <p>
              Use your creativity, logic, and problem-solving skills to impress
              the judges!
            </p>
            <p className="mt-6">
              <a
                href="https://docs.google.com/document/d/1MUsumX4iv5fhqKKThKD2BU6-qf6b9rTv5RKbiVKUv_I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-semibold"
              >
                Read the full Code of Conduct here
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-10 bg-card text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            📚 Resources & Practice
          </h2>
          <p className="text-lg mb-6">
            Prepare for the competition with these helpful resources and
            tutorials.
          </p>
          <div className="flex flex-col items-center gap-6 mb-6">
            {/* Embedded YouTube Video */}
            <div className="w-full flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NqMd44Oi2l4?si=nCMwOVJeWj7xoklS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            {/* Resource Links */}
            <ul className="max-w-xl mx-auto text-left list-disc list-inside text-base md:text-lg font-medium">
              <li>
                <a
                  href="https://scratch.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Scratch Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=D-nW4jvzRr8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Scratch Tutorials on YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-10 bg-white/80 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600">
            🏆 Prizes & Recognition
          </h2>
          <p className="text-lg mb-2 font-semibold">
            PKR 100,000+ worth prizes for winners and top performers: laptops,
            Chromebooks, and more.
          </p>
          <p className="text-lg mb-4">
            Top 10 participants will be invited to the closing ceremony on 14th
            September 2025.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-10 bg-card text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            👥 Eligibility
          </h2>
          <ul className="max-w-md mx-auto mb-6 text-base md:text-lg list-disc list-inside text-left font-medium">
            <li>Students in Grades 6–10 & O Levels</li>
            <li>Ages 11–16</li>
            <li>Must have a valid JCIC</li>
          </ul>
          <Link href="#faqs">
            <Button variant="outline" size="sm" className="cursor-pointer">
              Check FAQs
            </Button>
          </Link>
        </div>
      </section>

      {/* Registration Fee */}
      <section className="py-8 bg-white/80 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-pink-600">
            💸 Registration Fee
          </h2>
          <p className="text-lg mb-2 font-semibold">PKR 250 per participant</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-yellow-500 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔗 Register Now
          </h2>
          <p className="text-lg mb-6 font-semibold">
            Don’t wait — spots are limited!
          </p>
          <Link href="https://tinyurl.com/junior-codebash2025">
            <Button className="bg-black text-white text-xl px-10 py-5 font-bold rounded-full shadow-lg cursor-pointer">
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-8 bg-white/80 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">
            📩 Contact Us
          </h2>
          <p className="text-lg mb-4">For further queries, reach out at:</p>
          <Link href="mailto:codebash@kpsiaj.org">
            <Button variant="outline" size="lg" className="cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        className="py-12 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            ❓ FAQs
          </h2>
          <p className="text-lg mb-4">
            For detailed rules, participation guidelines, and other
            clarifications, please visit the FAQs section.
          </p>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="mb-4 rounded-lg shadow bg-white/90 p-4">
                <button
                  className={`w-full text-left font-semibold text-lg py-2 px-2 rounded transition-colors ${
                    activeFaq === idx ? "bg-pink-100" : "bg-white/90"
                  } hover:bg-pink-50`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  {faq.question}
                </button>
                {activeFaq === idx && (
                  <div className="mt-2 text-base text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-background py-10 mt-auto shadow-inner">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <nav className="mb-4 flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-background cursor-pointer"
              >
                Home
              </Button>
            </Link>
            <Link href="#faqs">
              <Button
                variant="ghost"
                size="sm"
                className="text-background cursor-pointer"
              >
                FAQs
              </Button>
            </Link>
            <Link href="https://tinyurl.com/junior-codebash2025">
              <Button
                variant="ghost"
                size="sm"
                className="text-background cursor-pointer"
              >
                Register
              </Button>
            </Link>
          </nav>
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
