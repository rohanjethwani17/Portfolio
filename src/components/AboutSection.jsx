import React from "react";
import { Brain, Cpu, CodeSquareIcon, Cloud, Database, Layers } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "Shipping end‑to‑end features with React, Next.js, Node.js, Spring Boot, and Django. My work spans UI polish all the way to robust REST APIs.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS Certified Solutions Architect. Comfortable with Lambda, EC2, S3, GCP, Docker, Jenkins, and GitHub Actions CI/CD.",
  },
  {
    icon: Database,
    title: "Scalable Backends",
    desc: "I design event‑driven systems with Kafka, Redis, and PostgreSQL that process thousands of updates per minute. I am especially curious about the low‑latency, high‑integrity backends that power fintech and banking.",
  },
  {
    icon: Brain,
    title: "AI & ML",
    desc: "Exploring agent systems, reinforcement learning, and LLM‑powered products using PyTorch, TensorFlow, and Gemini.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold leading-snug">
              4th‑year Computing Science student at the{" "}
              <span className="text-primary">University of Alberta</span>{" "}
              <span className="inline-block animate-float">🎓</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I build software that is pragmatic, scalable, and pleasant to use.
              My focus is on full‑stack development, cloud infrastructure, and
              distributed backends. I also have a growing interest in applied
              AI.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am currently a Software Developer Intern at the{" "}
              <span className="text-foreground font-medium">City of Edmonton</span>.
              Before that, I interned at{" "}
              <span className="text-foreground font-medium">ILXS</span> on Spring
              Boot microservices and at{" "}
              <span className="text-foreground font-medium">Arcus Partners</span>{" "}
              building Python ETL pipelines for a wealth‑management team. That
              was my first real look at the kind of engineering that powers
              financial products. I also recently shipped a full‑stack capstone
              MVP deployed on GCP for a real client.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              🎯 I am especially drawn to{" "}
              <span className="text-foreground font-medium">fintech and
              banking</span>. I love the challenge of building reliable,
              high‑throughput systems where correctness matters and where clean
              software directly shapes how people move money. Outside coursework
              and internships, I ship side projects such as a real‑time transit
              tracking service with Kafka, a serverless AI‑powered LMS on AWS,
              and a smart home platform with TDD‑driven CI/CD.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "AWS Solutions Architect",
                "AWS Cloud Practitioner",
                "Fintech & Banking",
                "Innovation & Entrepreneurship",
                "Java",
                "Spring Boot",
              ].map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="/ROHAN_JETHWANI_RESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="ghost-button"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="gradient-border p-5 card-hover text-left opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.15 * idx}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold">{h.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
