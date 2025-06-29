import React from "react";
import { ArrowRight } from "lucide-react";
import OcelotNovels from "../assets/ocelot-novels.svg";
import MongoDB from "../assets/mongodb.svg";

const projects = [
  {
    id: 1,
    title: "Ocelot-Novels",
    description:
      "Delivered a fully featured Android novel-reading app during a 4‑month sprint using Java, UML, Firebase, CI/CD, JUnit, Android Studio, and Git.",
    image: OcelotNovels,
    tags: ["Java", "UML", "Firebase", "CI/CD", "JUnit", "Android Studio", "Git"],
    githubUrl: "https://github.com/CMPUT301F24ocelot/ocelot-novels",
  },
  {
    id: 2,
    title: "Scalable MongoDB Data Pipeline",
    description:
      "Implemented a Python-based ETL pipeline to load ~20,000 messages into MongoDB, optimized indexing for 90% faster queries, and maintained robustness under heavy loads.",
    image: MongoDB,
    tags: ["Python", "MongoDB", "PyMongo", "ETL", "JSON", "Git"],
    githubUrl: "https://github.com/ualberta-cmput291/w24-mp2-satijapaints",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some projects I’ve worked on. Each demonstrates my ability to deliver robust, high-quality solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div className="h-48 flex items-center justify-center bg-card overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-32 h-32 object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rohanjethwani17"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
