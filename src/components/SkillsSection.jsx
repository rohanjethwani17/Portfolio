import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Award, ExternalLink } from "lucide-react";

// Import available skill logos
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

// Define skills. Items without a logo render a stylized gradient badge.
const skills = [
  // Languages
  { name: "Java", logo: JavaLogo, category: "languages" },
  { name: "Python", logo: PythonLogo, category: "languages" },
  { name: "TypeScript", logo: TSLogo, category: "languages" },
  { name: "JavaScript", logo: JSLogo, category: "languages" },
  { name: "C / C++", logo: CLogo, category: "languages" },
  { name: "SQL", logo: SQLLogo, category: "languages" },
  { name: "HTML", logo: HTMLLogo, category: "languages" },
  { name: "CSS", logo: CSSLogo, category: "languages" },
  { name: "R", logo: RLogo, category: "languages" },
  { name: "RISC-V Assembly", logo: RiscVLogo, category: "languages" },

  // Frameworks
  { name: "React", logo: ReactLogo, category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Node.js", logo: NodeLogo, category: "frameworks" },
  { name: "Spring Boot", category: "frameworks" },
  { name: "Django", category: "frameworks" },
  { name: "PyTorch", category: "frameworks" },
  { name: "JUnit", logo: JUnitLogo, category: "frameworks" },
  { name: "Tailwind CSS", logo: TailwindLogo, category: "frameworks" },

  // Databases
  { name: "PostgreSQL", logo: SQLLogo, category: "databases" },
  { name: "MongoDB", logo: MongoDBLogo, category: "databases" },
  { name: "DynamoDB", category: "databases" },
  { name: "MySQL", category: "databases" },
  { name: "Redis", category: "databases" },
  { name: "Firebase", logo: FirebaseLogo, category: "databases" },

  // Tools & Cloud
  { name: "AWS", logo: AWSLogo, category: "tools" },
  { name: "GCP", logo: GCPLogo, category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Jenkins", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "Kafka", category: "tools" },
  { name: "Git", logo: GitLogo, category: "tools" },
  { name: "Linux", logo: UnixLogo, category: "tools" },
  { name: "Android Studio", logo: AndroidLogo, category: "tools" },
  { name: "Power BI", logo: PowerBILogo, category: "tools" },

  // Libraries
  { name: "Pandas", logo: PandasLogo, category: "libraries" },
  { name: "NumPy", logo: NumPyLogo, category: "libraries" },
  { name: "Matplotlib", logo: MatplotlibLogo, category: "libraries" },
  { name: "Scikit-learn", logo: SklearnLogo, category: "libraries" },
  { name: "TensorFlow", logo: TensorFlowLogo, category: "libraries" },
];

const categories = ["all", "languages", "frameworks", "databases", "tools", "libraries"];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issued: "Nov 2025",
    expires: "Nov 2028",
    credentialId: "74f409c8385146778b59c1d9f9055519",
    verifyUrl: "https://aws.amazon.com/verification",
    featured: true,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "Nov 2025",
    expires: "Nov 2028",
    credentialId: "cebf3101bba84e179fd07a091e5ac755",
    verifyUrl: "https://aws.amazon.com/verification",
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="gradient-border p-4 card-hover flex flex-col items-center justify-center gap-3 opacity-0 animate-fade-in"
              style={{ animationDelay: `${Math.min(idx * 0.04, 0.6)}s` }}
            >
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-10 h-10 transition-transform duration-300 hover:scale-110"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow">
                  {skill.name.charAt(0)}
                </div>
              )}
              <h3 className="font-medium text-sm text-center">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="text-primary" size={20} />
            <h3 className="text-xl md:text-2xl font-semibold">
              AWS Certifications
            </h3>
          </div>
          <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
            Industry‑recognized cloud credentials earned while pursuing my undergraduate degree.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="group gradient-border p-5 card-hover text-left flex gap-4 items-start relative overflow-hidden"
              >
                {cert.featured && (
                  <span className="absolute top-2 right-2 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 animate-pulse-subtle">
                    Featured
                  </span>
                )}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-[#FF9900]/30 blur-lg group-hover:bg-[#FF9900]/55 transition" />
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#232F3E] to-[#131A22] flex flex-col items-center justify-center border border-[#FF9900]/60">
                    <span className="text-[10px] font-bold text-white leading-none">
                      AWS
                    </span>
                    <span className="text-[9px] font-bold text-[#FF9900] mt-0.5">
                      {cert.name.includes("Solutions") ? "SAA" : "CCP"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-2">
                    Issued {cert.issued} · Expires {cert.expires}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 group-hover:underline">
                    Verify credential <ExternalLink size={11} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
