import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border mt-12 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl py-10 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-bold">
            <span className="text-gradient">Rohan</span>
            <span className="text-foreground">.dev</span>
          </span>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rohan Jethwani. Built with React &amp; Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rohanjethwani17"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohanjethwani17/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:rohanjethwani17@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Mail size={18} />
          </a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="ml-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
