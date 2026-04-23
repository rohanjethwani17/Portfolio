import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "City of Edmonton",
    location: "Edmonton, AB",
    period: "May 2026 – Present",
    points: [
      "Contributing to civic‑impact software initiatives across the full software development lifecycle.",
      "Building and maintaining internal tools and resident‑facing systems used across City of Edmonton teams.",
    ],
    tags: ["Software Engineering", "Full Stack"],
  },
  {
    role: "Software Developer Intern",
    company: "University of Alberta — Client Capstone",
    location: "Edmonton, AB",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Engineered a drag‑and‑drop floorplan editor in React and TypeScript, translating complex landlord workflows into an intuitive UI.",
      "Deployed scalable backend services on Google Cloud Platform using Node.js and Cloud SQL, supporting stable end‑to‑end releases.",
      "Executed the full SDLC in a collaborative team, translating client requirements into a deployed full‑stack MVP.",
      "Reviewed 15+ pull requests per sprint in an agile environment, improving code quality and reducing bugs by 20%.",
    ],
    tags: ["React", "TypeScript", "Node.js", "GCP", "Cloud SQL", "Agile"],
  },
  {
    role: "Software Developer Intern",
    company: "IXLS Pvt. Ltd.",
    location: "Mumbai, India",
    period: "May 2025 – Aug 2025",
    points: [
      "Engineered production‑grade REST APIs in Java and Spring Boot to facilitate secure data exchange between IETM backend and frontend interfaces.",
      "Configured Jenkins CI/CD pipelines to automate build and deployment, reducing manual release time by 40%.",
      "Completed 20+ code reviews with senior developers, enforcing coding standards and reducing integration issues.",
      "Authored 2 technical documentation sets for backend API endpoints, easing onboarding and improving cross‑team collaboration.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Jenkins", "CI/CD"],
  },
  {
    role: "Software Developer Intern",
    company: "Arcus Partners",
    location: "Pune, India",
    period: "May 2024 – Aug 2024",
    points: [
      "Delivered a Python data migration tool in 8 weeks, implementing agile sprints to ship business‑aligned features.",
      "Built Python ETL pipelines for financial data collection, transformation, and SQL storage — improving data availability and analytics performance by 30%.",
      "Optimized complex SQL queries for internal dashboards, cutting report generation time by 25% for the wealth management team.",
      "Implemented automated unit tests with Pytest, raising code coverage by 20% and ensuring data accuracy for stakeholders.",
    ],
    tags: ["Python", "ETL", "SQL", "Pytest", "Agile"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />

        <div className="relative">
          {/* vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-accent/60 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const leftAligned = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row ${
                    leftAligned ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background shadow-glow animate-pulse-subtle" />

                  {/* card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      leftAligned ? "md:pr-10" : "md:pl-10 md:ml-auto"
                    } opacity-0 animate-fade-in`}
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    <div className="gradient-border p-6 card-hover text-left">
                      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase size={16} />
                          <span className="text-sm font-medium">{exp.role}</span>
                        </div>
                        {exp.badge && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 animate-pulse-subtle">
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold mb-2">{exp.company}</h3>

                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} /> {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.points.map((p, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed relative pl-4"
                          >
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60" />
                            {p}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
