import React, { useState } from "react";
import { BookOpen, GraduationCap, Award, ChevronDown, Sparkles } from "lucide-react";
import UALogo from "../assets/ualogo.svg";

const courses = [
  // Computing Science core
  {
    code: "CMPUT 174 / 175",
    name: "Foundations of Computation I & II",
    tag: "Core",
    description:
      "Problem‑driven introduction to Computing Science in Python: state, control flow, data structures, recursion, modularization, and testing across text analysis, map navigation, game search, simulation, and cryptography.",
  },
  {
    code: "CMPUT 201",
    name: "Practical Programming Methodology",
    tag: "Core",
    description:
      "Principles, methods, tools, and practices of the professional programmer. Focus on software engineering fundamentals using abstract data types implemented in C.",
  },
  {
    code: "CMPUT 204",
    name: "Algorithms I",
    tag: "Core",
    description:
      "Algorithm design and analysis with emphasis on searching, sorting, and graph algorithms. Covers divide and conquer, dynamic programming, greedy methods, backtracking, and local search along with efficiency analysis.",
  },
  {
    code: "CMPUT 229",
    name: "Computer Organization & Architecture I",
    tag: "Systems",
    description:
      "Number representation, instruction‑set architecture, RISC‑V assembly programming, stack frames, pointers, exceptions, computer arithmetic, datapath and control, pipelining, memory hierarchy, and virtual memory.",
  },
  {
    code: "CMPUT 272",
    name: "Formal Systems & Logic in Computing Science",
    tag: "Core",
    description:
      "Tools of set theory, logic, and induction used in reasoning about algorithms and programs. The course covers propositional and predicate logic, inductive definitions, and proofs of program correctness.",
  },
  {
    code: "CMPUT 291",
    name: "File & Database Management",
    tag: "Databases",
    description:
      "Entity‑relationship and relational models, SQL, MongoDB, storage architecture, physical organization of data, and access methods for relational data.",
  },
  {
    code: "CMPUT 301",
    name: "Introduction to Software Engineering",
    tag: "SE",
    description:
      "Object‑oriented design and analysis for interactive applications. Software process, revision control, UML, requirements, architecture, design patterns, frameworks, design guidelines, unit testing, refactoring, and software tools.",
  },
  {
    code: "CMPUT 401",
    name: "Software Process & Product Management",
    tag: "SE",
    description:
      "Managing the process and product of software development. Topics include agile and plan‑driven methodologies, requirements, estimation, quality, and team dynamics, all applied through a real client capstone project.",
  },
  {
    code: "CMPUT 402",
    name: "Software Quality",
    tag: "SE",
    description:
      "Software quality assurance and testing strategies. The course covers unit, integration, system, and regression testing, along with code coverage, mutation testing, and CI‑driven quality workflows.",
  },
  {
    code: "CMPUT 404",
    name: "Web Applications & Architecture",
    tag: "SE",
    description:
      "Design and implementation of modern web applications. The course covers HTTP, REST, client‑server architecture, distributed systems, security, and deployment of full‑stack web apps.",
  },
  {
    code: "CMPUT 200",
    name: "Ethics of Data Science & AI",
    tag: "AI / ML",
    description:
      "Ethics issues in AI and Data Science, with a focus on privacy, fairness and bias, and explainability. The course teaches how to identify and measure these aspects in algorithmic outputs and how to build algorithms that correct for them.",
  },
  {
    code: "CMPUT 267",
    name: "Machine Learning I",
    tag: "AI / ML",
    description:
      "Fundamental statistical, mathematical, and computational concepts in analyzing data. Topics include univariate models, data summarization, model estimation, generalization, and evaluation. The course provides a foundation for advanced ML.",
  },
  {
    code: "CMPUT 365",
    name: "Introduction to Reinforcement Learning",
    tag: "AI / ML",
    description:
      "Study and design of learning agents that interact with complex, uncertain environments. Multi‑armed bandits, Markov decision processes, planning, and function approximation.",
  },
  {
    code: "CMPUT 366",
    name: "Search & Planning in AI",
    tag: "AI / ML",
    description:
      "Search and planning in artificial intelligence. The course covers deterministic single‑agent and multi‑agent problems, state‑space search, combinatorial optimization, and constraint satisfaction.",
  },

  // Math & Stats
  {
    code: "MATH 125",
    name: "Linear Algebra I",
    tag: "Math",
    description:
      "Systems of linear equations, matrix algebra, determinants, vector spaces, linear transformations, eigenvalues, and eigenvectors. This course provides the foundation for applied math in computing.",
  },
  {
    code: "MATH 225",
    name: "Linear Algebra II",
    tag: "Math",
    description:
      "Vector spaces, inner product spaces, orthogonality, diagonalization, and applications. These advanced linear algebra tools are widely used in machine learning and graphics. (Transfer credit, Athabasca University.)",
  },
  {
    code: "MATH 154 / 156",
    name: "Calculus I & II",
    tag: "Math",
    description:
      "Differential and integral calculus. Topics include limits, derivatives, optimization, integration techniques, series, and applications to business and economics.",
  },
  {
    code: "MATH 241",
    name: "Geometry",
    tag: "Math",
    description:
      "Euclidean and non‑Euclidean geometry, transformations, and classical theorems with a focus on proof‑based reasoning.",
  },
  {
    code: "STAT 151",
    name: "Introduction to Applied Statistics I",
    tag: "Stats",
    description:
      "Descriptive statistics, probability, sampling distributions, estimation, hypothesis testing, and regression. These are core statistical tools for data analysis.",
  },
  {
    code: "STAT 252",
    name: "Introduction to Applied Statistics II",
    tag: "Stats",
    description:
      "ANOVA, multiple regression, categorical data analysis, and nonparametric methods. The course extends applied statistical modelling and builds on STAT 151.",
  },

  // Business & Innovation
  {
    code: "SEM 330",
    name: "Exploring Innovation & Entrepreneurship",
    tag: "I&E",
    description:
      "Exploring the innovation process and entrepreneurial mindset. The course covers opportunity recognition, idea validation, venture development, and the role of innovation in technology and society.",
  },
  {
    code: "FIN 201",
    name: "Introduction to Finance",
    tag: "Fintech",
    description:
      "Financial management fundamentals. The course covers the time value of money, valuation of securities, capital budgeting, cost of capital, and an introduction to capital markets. It is foundational for working on fintech and banking systems.",
  },
  {
    code: "ACCTG 200",
    name: "Introduction to Accounting",
    tag: "Fintech",
    description:
      "Foundations of financial and managerial accounting. The course covers financial statements, the accounting cycle, cost behaviour, and decision‑oriented reporting used by managers.",
  },
  {
    code: "ECON 101",
    name: "Introduction to Microeconomics",
    tag: "Business",
    description:
      "Supply and demand, consumer and producer theory, market structures, and the role of markets and government in resource allocation.",
  },
];

export const EducationSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="education" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education & <span className="text-gradient">Coursework</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />

        {/* Degree card */}
        <div className="gradient-border p-6 md:p-8 mb-8 text-left card-hover">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="p-3 rounded-xl bg-primary/10">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <img src={UALogo} alt="U of A logo" className="w-7 h-7" />
                <h3 className="text-xl font-semibold">University of Alberta</h3>
              </div>
              <p className="mt-1 text-muted-foreground">
                BSc. Specialization in Computing Science · Edmonton, AB
              </p>
              <p className="text-sm text-muted-foreground">
                Sep 2022 – May 2027
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="chip">
                  <Sparkles size={12} className="mr-1" />
                  Certificate in Innovation &amp; Entrepreneurship (In Progress)
                </span>
                <span className="chip">UAlberta International Admission Scholarship</span>
                <span className="chip">UAlberta Regional Excellence Scholarship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications prominent */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <Award size={18} className="text-primary" />
            <span className="text-sm uppercase tracking-wider font-medium">
              Industry Certifications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://aws.amazon.com/verification"
              target="_blank"
              rel="noreferrer"
              className="group gradient-border p-5 card-hover text-left flex gap-4 items-start"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-xl bg-[#FF9900]/40 blur-lg group-hover:bg-[#FF9900]/60 transition" />
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#232F3E] to-[#131A22] flex items-center justify-center border border-[#FF9900]/60">
                  <span className="text-[10px] font-bold text-white leading-none text-center">
                    AWS
                    <br />
                    <span className="text-[#FF9900]">SAA</span>
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-semibold text-sm">
                    AWS Certified Solutions Architect – Associate
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                    Featured
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Amazon Web Services · Issued Nov 2025 · Valid through Nov 2028
                </p>
                <p className="text-[11px] text-muted-foreground/80 mt-2 font-mono break-all">
                  ID: 74f409c8385146778b59c1d9f9055519
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 group-hover:underline">
                  Verify credential →
                </span>
              </div>
            </a>

            <a
              href="https://aws.amazon.com/verification"
              target="_blank"
              rel="noreferrer"
              className="group gradient-border p-5 card-hover text-left flex gap-4 items-start"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-xl bg-[#FF9900]/30 blur-lg group-hover:bg-[#FF9900]/50 transition" />
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#232F3E] to-[#131A22] flex items-center justify-center border border-[#FF9900]/60">
                  <span className="text-[10px] font-bold text-white leading-none text-center">
                    AWS
                    <br />
                    <span className="text-[#FF9900]">CCP</span>
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm">
                  AWS Certified Cloud Practitioner
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Amazon Web Services · Issued Nov 2025 · Valid through Nov 2028
                </p>
                <p className="text-[11px] text-muted-foreground/80 mt-2 font-mono break-all">
                  ID: cebf3101bba84e179fd07a091e5ac755
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 group-hover:underline">
                  Verify credential →
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Coursework */}
        <div className="flex items-center gap-2 mb-6 text-muted-foreground">
          <BookOpen size={18} className="text-primary" />
          <span className="text-sm uppercase tracking-wider font-medium">
            Relevant Coursework
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, idx) => {
            const isOpen = openIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => toggleOpen(idx)}
                className="relative z-10 text-left gradient-border p-5 card-hover cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={UALogo}
                    alt="U of A"
                    className="w-5 h-5 mt-0.5 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-primary text-sm">
                        {course.code}
                      </h3>
                      <ChevronDown
                        size={16}
                        className={`text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <p className="text-sm font-medium mt-0.5">{course.name}</p>
                    {course.tag && (
                      <span
                        className={`inline-block mt-1.5 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${
                          course.tag === "Fintech"
                            ? "bg-accent/10 text-accent border-accent/30"
                            : "bg-primary/5 text-primary border-primary/20"
                        }`}
                      >
                        {course.tag}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
