import React from "react";
import { ArrowRight, Github, Bus, Home, GraduationCap, Database, BookOpen } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RouteForge",
    subtitle: "Real-time Transit Tracking",
    description:
      "Built a real‑time transit tracking system using Java Spring Boot microservices, processing 5,000+ vehicle updates per minute. Architected an event‑driven pipeline with Kafka, Redis pooling, and PostgreSQL batch processing — reducing write latency by 80%.",
    icon: Bus,
    gradient: "from-blue-500/30 to-purple-500/30",
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/rohanjethwani17",
  },
  {
    id: 2,
    title: "Tartan Smart Home",
    subtitle: "TDD & A/B Testing Platform",
    description:
      "Implemented TDD with JUnit and integration tests to raise code coverage above 85%. Enhanced CI/CD workflows with GitHub Actions (60% faster builds) and engineered an A/B testing framework that generated 3 data‑driven reports guiding key decisions.",
    icon: Home,
    gradient: "from-emerald-500/30 to-teal-500/30",
    tags: ["Java", "JUnit", "CI/CD", "GitHub Actions", "A/B Testing"],
    githubUrl: "https://github.com/rohanjethwani17",
  },
  {
    id: 3,
    title: "Learning Management System",
    subtitle: "AI-Powered Serverless LMS",
    description:
      "Built an AI‑powered LMS frontend with Next.js and Google Gemini, reducing course creation time by 40%. Engineered a serverless backend on AWS (Lambda, DynamoDB, S3) with low‑latency video streaming and Stripe‑backed role‑based access.",
    icon: GraduationCap,
    gradient: "from-orange-500/30 to-pink-500/30",
    tags: ["Next.js", "Google Gemini", "AWS Lambda", "DynamoDB", "S3", "Stripe"],
    githubUrl: "https://github.com/rohanjethwani17",
  },
  {
    id: 4,
    title: "Ocelot-Novels",
    subtitle: "Android Novel Reader",
    description:
      "Delivered a fully featured Android novel‑reading app during a 4‑month sprint using Java, UML, Firebase, CI/CD, JUnit, and Android Studio — shipped with full test coverage and a clean architecture.",
    icon: BookOpen,
    gradient: "from-fuchsia-500/30 to-rose-500/30",
    tags: ["Java", "UML", "Firebase", "CI/CD", "JUnit", "Android"],
    githubUrl: "https://github.com/CMPUT301F24ocelot/ocelot-novels",
  },
  {
    id: 5,
    title: "MongoDB Data Pipeline",
    subtitle: "Scalable ETL with PyMongo",
    description:
      "Implemented a Python ETL pipeline that ingested ~20,000 messages into MongoDB, optimized indexing for 90% faster queries, and maintained robustness under heavy loads.",
    icon: Database,
    gradient: "from-green-500/30 to-cyan-500/30",
    tags: ["Python", "MongoDB", "PyMongo", "ETL", "JSON"],
    githubUrl: "https://github.com/ualberta-cmput291/w24-mp2-satijapaints",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4" />

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects spanning distributed backends, cloud‑native web apps,
          and developer tooling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative gradient-border overflow-hidden card-hover flex flex-col opacity-0 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Icon header */}
                <div
                  className={`relative h-36 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <Icon
                    size={52}
                    className="relative text-foreground/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 text-left">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-xs text-primary font-medium mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-primary/20 bg-primary/5 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit mx-auto"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rohanjethwani17"
          >
            <Github size={16} />
            Check My GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
