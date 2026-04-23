import React, { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";

const roles = [
  "Software Developer",
  "Full Stack Engineer",
  "Cloud & Backend Enthusiast",
  "Computing Science Student",
];

export const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium opacity-0 animate-fade-in">
            <Sparkles size={14} className="animate-pulse-subtle" />
            <span>Incoming Software Development Intern @ City of Edmonton</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block opacity-0 animate-fade-in-delay-1">Hi, I'm</span>
            <span className="block opacity-0 animate-fade-in-delay-2 mt-2">
              <span className="text-gradient">Rohan Jethwani</span>
            </span>
          </h1>

          {/* typewriter line */}
          <div className="h-8 md:h-10 flex items-center justify-center opacity-0 animate-fade-in-delay-3">
            <span className="text-lg md:text-2xl font-medium text-muted-foreground">
              <span className="text-primary">&lt;/&gt;</span> {text}
              <span className="inline-block w-0.5 h-6 md:h-7 bg-primary ml-1 align-middle animate-blink" />
            </span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            4th‑year Computing Science student at the{" "}
            <span className="text-foreground font-semibold">University of Alberta</span>,
            passionate about building scalable full‑stack systems, cloud‑native backends,
            and clean developer experiences.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/ROHAN_JETHWANI_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="ghost-button"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* social icons */}
          <div className="flex justify-center gap-5 pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://github.com/rohanjethwani17"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohanjethwani17/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:rohanjethwani17@gmail.com"
              aria-label="Email"
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};
