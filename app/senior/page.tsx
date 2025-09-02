"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Users, Trophy, Code, Cookie, Utensils } from "lucide-react";

const itinerary = [
  {
    time: "03:00 PM – 03:30 PM",
    event: "Registration & Team Check-in",
    description:
      "Teams arrive, complete registration, and settle in for the contest. Get your laptops ready and meet fellow participants.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    time: "03:30 PM – 04:30 PM",
    event: "Opening Ceremony & Briefing",
    description:
      "Kick off with a warm welcome, contest overview, rules explanation, and platform walkthrough. Clarify any last-minute questions.",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
  },
  {
    time: "04:30 PM – 06:30 PM",
    event: "Round 1: Programming Challenge",
    description:
      "First 2-hour round. Solve a set of algorithmic and logic problems as a team. Submit your solutions before the timer ends.",
    icon: <Code className="w-6 h-6 text-blue-500" />,
  },
  {
    time: "06:30 PM – 07:30 PM",
    event: "Refreshments & Namaz Break",
    description:
      "Enjoy snacks and drinks, take a break, and offer prayers. Network with other teams and discuss strategies.",
    icon: <Cookie className="w-6 h-6 text-pink-500" />,
  },
  {
    time: "07:30 PM – 09:30 PM",
    event: "Round 2: Programming Challenge",
    description:
      "Second 2-hour round. Tackle a new set of problems, test your teamwork, and race against the clock for top scores.",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
  },
  {
    time: "09:30 PM – 10:30 PM",
    event: "Dinner & Social",
    description:
      "Relax and enjoy a delicious dinner with all participants. Share experiences and celebrate your achievements.",
    icon: <Utensils className="w-6 h-6 text-green-600" />,
  },
  {
    time: "10:30 PM",
    event: "Closing Ceremony & Awards",
    description:
      "Results announcement, prize distribution for both categories, and closing remarks. Capture memories and say farewell!",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
  },
];

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
    answer:
      "The contest has two rounds. Each round includes 6–8 programming problems of varying difficulty. Teams will have 2 hours per round to solve and submit solutions.",
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
    answer:
      "Top-performing teams will receive cash prizes, certificates, goodie bags, and possible internship opportunities. Winners will be recognized at the closing ceremony on 14th September 2025.",
  },
];

export default function SeniorCompetition() {
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
        <Link href="https://tinyurl.com/senior-codebash2025">
          <Button className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 text-base shadow-lg rounded-full animate-bounce font-bold cursor-pointer">
            Register Now
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="cursor-pointer">
              Home
            </Button>
          </Link>
          <nav className="flex gap-2">
            <Link href="/junior">
              <Button variant="ghost" className="cursor-pointer" size="sm">
                Junior Competition
              </Button>
            </Link>
            <Link href="#faqs">
              <Button variant="ghost" className="cursor-pointer" size="sm">
                FAQs
              </Button>
            </Link>
            <Link href="https://tinyurl.com/senior-codebash2025">
              <Button variant="ghost" className="cursor-pointer" size="sm">
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
            Rising Experts Competition
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto font-medium text-white/90">
            The Senior Category of CodeBash 2.0 is a task-based programming
            competition designed to challenge your logic, problem-solving, and
            coding skills. Compete against peers, solve real-world inspired
            problems, and push the limits of your creativity and technical
            ability.
          </p>
          <Link
            href="https://tinyurl.com/senior-codebash2025"
            className="hidden md:block"
          >
            <Button className="bg-black text-white text-lg px-8 py-4 font-bold mb-4 rounded-full shadow-xl animate-bounce cursor-pointer">
              Register Now
            </Button>
          </Link>
          <div className="mb-4 flex gap-2 justify-center flex-wrap">
            <Image
              src="/c.png"
              alt="C"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <Image
              src="/cpp.png"
              alt="C++"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <Image
              src="/java.png"
              alt="Java"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <Image
              src="/js.png"
              alt="JavaScript"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <Image
              src="/py.png"
              alt="Python"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Countdown & Dates */}
      <section className="py-10 bg-white/80 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Registration Deadline: 7th September 2025
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-pink-600">
            Competition Date: 14th September 2025
          </h3>
          <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-600 to-pink-500 text-white p-4 rounded-lg shadow-lg"
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
          <Link href="https://tinyurl.com/senior-codebash2025">
            <Button className="bg-yellow-500 text-black text-lg px-8 py-3 font-bold shadow-md cursor-pointer">
              Register Before Deadline
            </Button>
          </Link>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-12 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            🗓️ Event Schedule
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/90 rounded-xl shadow-md p-6 hover:scale-[1.02] transition-transform"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-blue-700">
                      {item.event}
                    </h3>
                    <span className="font-semibold text-pink-600">
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

      {/* Competition Details & Learning Resources */}
      <section className="py-12 bg-white/90 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            🏁 Competition Details & Learning Resources
          </h2>
          <div className="max-w-2xl mx-auto text-lg md:text-xl mb-6 font-medium text-gray-800">
            <p className="mb-4">
              <span className="font-bold text-pink-600">Rising Experts</span> is
              a speed programming competition designed to test your logic
              building and coding speed. You may use any of the listed
              programming languages.
            </p>
            <p className="mb-4">
              <span className="font-bold">Format:</span> Two-round competitive
              programming challenge focused on speed, logic, and coding mastery.
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li className="mb-2">
                <span className="font-bold">Round 1:</span> All registered teams
                will face 6–8 programming problems revealed at the start of the
                round.
              </li>
              <li className="mb-2">
                <span className="font-bold">Round 2 (Final):</span>{" "}
                Top-performing teams will advance to face another 6–8 more
                complex problems.
              </li>
              <li className="mb-2">
                Problems are revealed only at the start of each round, ensuring
                fairness and testing adaptability under time pressure.
              </li>
              <li className="mb-2">
                You will also receive a printout of your problems.
              </li>
            </ul>
            <p className="mb-4">
              <span className="font-bold">Venue:</span> Arranged by Khoja Jamaat
              Karachi with high-speed internet and facilities. Each team must
              bring <span className="font-bold">one laptop</span> with a
              pre-installed IDE (only one laptop allowed per team).
            </p>
            <div className="mt-8">
              <h3 className="font-bold text-blue-700 mb-2">
                Recommended Practice Platforms
              </h3>
              <ul className="list-disc list-inside text-left text-base md:text-lg font-medium">
                <li>
                  <a
                    href="https://codeforces.com/problemset"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Codeforces
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codechef.com/practice#algorithms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    CodeChef
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hackerrank.com/domains/algorithms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    HackerRank
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct & Judging Criteria */}
      <section className="py-10 bg-card text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600">
            📄 Code of Conduct & Judging Criteria
          </h2>
          <p className="text-lg mb-6 font-medium text-gray-800">
            All participants must follow the event’s code of conduct and judging
            guidelines to ensure a fair and respectful competition.
          </p>
          <div className="max-w-2xl mx-auto text-left text-base md:text-lg font-medium mb-6">
            <h3 className="font-bold text-blue-700 mb-2">Judging Criteria</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                Correctness – Must produce correct results for all test cases.
              </li>
              <li>
                Time Efficiency – Code must run within required execution time.
              </li>
              <li>
                Memory Efficiency – Code must meet memory usage constraints.
              </li>
              <li>
                Submission Time – Faster correct submissions rank higher if
                scores are tied.
              </li>
              <li>
                Code Quality (Tie-Breaker) – Readability, structured logic, and
                coding best practices may be considered.
              </li>
            </ul>
          </div>
          <a
            href="https://docs.google.com/document/d/1ED67s2Zg1GqwcH-BumGamGxmrbh2SUwZphBXes5LwvY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            Read the full Code of Conduct here
          </a>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-10 bg-white/80 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            🏆 Prizes & Recognition
          </h2>
          <p className="text-lg mb-2 font-semibold">
            PKR 150,000+ cash prize pool for winners and top-performing teams:
            certificates, goodie bags, and possible internship opportunities.
          </p>
          <p className="text-lg mb-4">
            Winners will be recognized at the closing ceremony on 14th September
            2025.
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
            <li>Shia community members aged 16–23</li>
            <li>Intermediate, A Levels, or Undergraduate programs</li>
            <li>Teams may consist of 1 to 3 participants</li>{" "}
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
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">
            💸 Registration Fee
          </h2>
          <p className="text-lg mb-2 font-semibold">PKR 750 per team</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-pink-500 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔗 Register Now
          </h2>
          <p className="text-lg mb-6 font-semibold">
            Secure your spot today and compete with the best!
          </p>
          <Link href="https://tinyurl.com/senior-codebash2025">
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
          <p className="text-lg mb-4">For queries or support, reach out at:</p>
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
            For detailed rules, language support, scoring system, and
            competition format, please visit the FAQs section.
          </p>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="mb-4 rounded-lg shadow bg-white/90 p-4">
                <button
                  className={`w-full text-left font-semibold text-lg py-2 px-2 rounded transition-colors ${
                    activeFaq === idx ? "bg-blue-100" : "bg-white/90"
                  } hover:bg-blue-50`}
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
            <Link href="https://tinyurl.com/senior-codebash2025">
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
