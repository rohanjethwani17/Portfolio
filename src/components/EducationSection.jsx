import React from "react";
import { useState } from "react";
import UALogo from "../assets/ualogo.svg";

const courses = [
  {
    code: "CMPUT 174/175",
    name: "Introduction to the Foundations of Computation I & II",
    description:
      "CMPUT 174 and 175 use a problem-driven approach to introduce the fundamental ideas of Computing Science in Python language. Basic notions of state, control flow, data structures, recursion, modularization, and testing are introduced through solving simple problems in a variety of domains such as text analysis, map navigation, game search, simulation, and cryptography.",
  },
  {
    code: "CMPUT 201",
    name: "Practical Programming Methodology",
    description:
      "Introduction to the principles, methods, tools, and practices of the professional programmer. The lectures focus on the fundamental principles of software engineering based on abstract data types and their implementations in C language.",
  },
  {
    code: "CMPUT 204",
    name: "Algorithms I",
    description:
      "A course on algorithm design and analysis, with emphasis on fundamentals of searching, sorting, and graph algorithms. Examples include divide and conquer, dynamic programming, greedy methods, backtracking, and local search methods, together with analysis techniques to estimate program efficiency.",
  },
  {
    code: "CMPUT 229",
    name: "Computer Organization and Architecture I",
    description:
      "Number representation, computer architecture and organization, instruction-set architecture, assembly-level programming, procedures, stack frames, memory access through pointers, exception handling, computer arithmetic, floating-point representation, datapath, control logic, pipelining, memory hierarchy, virtual memory.",
  },
  {
    code: "CMPUT 272",
    name: "Formal Systems and Logic in Computing Science",
    description:
      "An introduction to the tools of set theory, logic, and induction, and their use in the practice of reasoning about algorithms and programs. Basic set theory; the notion of a function; counting; propositional and predicate logic and their proof systems; inductive definitions and proofs by induction; program specification and correctness.",
  },
  {
    code: "CMPUT 291",
    name: "Introduction to File and Database Management",
    description:
      "Basic concepts in computer data organization and information processing; entity-relationship model; relational model; SQL and MongoDB; storage architecture; physical organization of data; access methods for relational data.",
  },
  {
    code: "CMPUT 200",
    name: "Ethics of Data Science and Artificial Intelligence",
    description:
      "This course focuses on ethics issues in Artificial Intelligence (AI) and Data Science (DS). The main themes are privacy, fairness/bias, and explainability in DS. The objectives are to learn how to identify and measure these aspects in outputs of algorithms, and how to build algorithms that correct for these issues.",
  },
  {
    code: "CMPUT 267",
    name: "Machine Learning I",
    description:
      "This course introduces the fundamental statistical, mathematical, and computational concepts in analyzing data. The goal for this introductory course is to provide a solid foundation in the mathematics of machine learning, in preparation for more advanced machine learning concepts. The course focuses on univariate models, to simplify some of the mathematics and emphasize some of the underlying concepts in machine learning, including: how should one think about data, how can data be summarized, how models can be estimated from data, what sound estimation principles look like, how generalization is achieved, and how to evaluate the performance of learned models.",
  },
  {
    code: "CMPUT 301",
    name: "Introduction to Software Engineering",
    description:
      "Object-oriented design and analysis, with interactive applications as the primary example. Topics include: software process; revision control; Unified Modeling Language (UML); requirements; software architecture, design patterns, frameworks, design guidelines; unit testing; refactoring; software tools.",
  },
  {
    code: "CMPUT 366",
    name: "Search and Planning in AI",
    description:
      "This course provides an introduction to search and planning in artificial intelligence. The course covers deterministic single-agent and multi-agent problems. This course teaches how to model real-world problems as state-space search problems and how to solve such problems. The course covers algorithms for solving deterministic shortest path problems with factored and non-factored states, combinatorial optimization problems, constraint satisfaction problems, and multi-agent problems.",
  },
  {
    code: "CMPUT 365",
    name: "Introduction to Reinforcement Learning",
    description:
      "This course provides an introduction to reinforcement learning, which focuses on the study and design of learning agents that interact with a complex, uncertain world to achieve a goal. The course covers multi-armed bandits, Markov decision processes, reinforcement learning, planning, and function approximation (online supervised learning). The course takes an information-processing approach to the study of intelligence and briefly touch on perspectives from psychology, neuroscience, and philosophy. The course uses the University of Alberta MOOC on Reinforcement Learning.",
  },
];

export const EducationSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState({});

  const toggleOpen = (idx) => setOpenIndex(openIndex === idx ? null : idx);
  const toggleExpand = (idx) => setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section id="education" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Coursework</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => {
            const isOpen = openIndex === idx;
            const isExpanded = expanded[idx];
            const shortDesc = course.description.slice(0, 100);
            const needsTruncate = course.description.length > 100;

            return (
              <div
                key={idx}
                className="relative z-10 group bg-card p-6 rounded-lg shadow-xs cursor-pointer"
                onClick={() => toggleOpen(idx)}
              >
                <div className="flex items-center mb-4">
                  {/* UAlberta logo next to course code */}
                  <img src={UALogo} alt="U of A logo" className="w-6 h-6 mr-2" />
                  <div>
                    <h3 className="font-semibold text-lg">{course.code}</h3>
                    <p className="text-sm text-muted-foreground">{course.name}</p>
                  </div>
                </div>

                {/* "Read More" hint on front */}
                {!isOpen && (
                  <div className="mt-4">
                    <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more &rarr;
                    </span>
                  </div>
                )}

                {/* Description expandable */}
                {isOpen && (
                  <div className="mt-4">
                    <p className="text-gray-700 dark:text-white">
                      {needsTruncate && !isExpanded
                        ? `${shortDesc}...`
                        : course.description}
                    </p>
                    {needsTruncate && (
                      <button
                        className="mt-2 text-primary hover:underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(idx);
                        }}
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};