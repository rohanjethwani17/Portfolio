import React from "react";
import { useState } from "react";
import { cn } from "../lib/utils";

// Import skill logos (place relevant SVGs in src/assets/)
import JavaLogo from "../assets/java.svg";
import PythonLogo from "../assets/python.svg";
import CLogo from "../assets/c.svg";
import RiscVLogo from "../assets/riscv.svg";
import SQLLogo from "../assets/postgresql.svg";
import JSLogo from "../assets/javascript.svg";
import HTMLLogo from "../assets/html.svg";
import CSSLogo from "../assets/css.svg";
import RLogo from "../assets/r.svg";
import TSLogo from "../assets/typescript.svg";

import ReactLogo from "../assets/react.svg";
import NodeLogo from "../assets/nodejs.svg";
import JUnitLogo from "../assets/junit.svg";
import TailwindLogo from "../assets/tailwind.svg";

import GitLogo from "../assets/git.svg";
import MongoDBLogo from "../assets/mongodb.svg";
import PowerBILogo from "../assets/powerbi.svg";
import AWSLogo from "../assets/aws.svg";
import GCPLogo from "../assets/gcp.svg";
import FirebaseLogo from "../assets/firebase.svg";
import AndroidLogo from "../assets/android.svg";
import UnixLogo from "../assets/unix.svg";

import PandasLogo from "../assets/pandas.svg";
import NumPyLogo from "../assets/numpy.svg";
import MatplotlibLogo from "../assets/matplotlib.svg";
import SklearnLogo from "../assets/sklearn.svg";
import TensorFlowLogo from "../assets/tensorflow.svg";

// Define your skills with logo and category
const skills = [
  // Languages
  { name: "Java", logo: JavaLogo, category: "languages" },
  { name: "Python", logo: PythonLogo, category: "languages" },
  { name: "C", logo: CLogo, category: "languages" },
  { name: "RISC-V Assembly", logo: RiscVLogo, category: "languages" },
  { name: "SQL", logo: SQLLogo, category: "languages" },
  { name: "JavaScript", logo: JSLogo, category: "languages" },
  { name: "HTML", logo: HTMLLogo, category: "languages" },
  { name: "CSS", logo: CSSLogo, category: "languages" },
  { name: "R", logo: RLogo, category: "languages" },
  { name: "TypeScript", logo: TSLogo, category: "languages" },

  // Frameworks
  { name: "React", logo: ReactLogo, category: "frameworks" },
  { name: "Node.js", logo: NodeLogo, category: "frameworks" },
  { name: "JUnit", logo: JUnitLogo, category: "frameworks" },
  { name: "Tailwind CSS", logo: TailwindLogo, category: "frameworks" },

  // Tools
  { name: "Git", logo: GitLogo, category: "tools" },
  { name: "MongoDB", logo: MongoDBLogo, category: "tools" },
  { name: "Power BI", logo: PowerBILogo, category: "tools" },
  { name: "AWS", logo: AWSLogo, category: "tools" },
  { name: "GCP", logo: GCPLogo, category: "tools" },
  { name: "Firebase", logo: FirebaseLogo, category: "tools" },
  { name: "Android Studio", logo: AndroidLogo, category: "tools" },
  { name: "Linux CLI", logo: UnixLogo, category: "tools" },

  // Libraries
  { name: "Pandas", logo: PandasLogo, category: "libraries" },
  { name: "NumPy", logo: NumPyLogo, category: "libraries" },
  { name: "Matplotlib", logo: MatplotlibLogo, category: "libraries" },
  { name: "Sklearn", logo: SklearnLogo, category: "libraries" },
  { name: "TensorFlow", logo: TensorFlowLogo, category: "libraries" },
];

// Updated categories
const categories = ["all", "languages", "frameworks", "tools", "libraries"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-xs flex flex-col items-center"
            >
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-10 h-10 mb-4" />
              <h3 className="font-semibold text-lg text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};