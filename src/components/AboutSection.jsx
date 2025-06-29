import React from "react";
import { Brain, Cpu, CodeSquareIcon } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Currently pursuing a BSc with Specialization in Computing Science
              at the University of Alberta 🎓
            </h3>

            <p className="text-muted-foreground">
              My academic journey and hands on projects have equipped me with a robust skill set and a deep understanding of core computing principles.
              I am proficient in programming languages such as Java, Python, SQL, HTML, C, C++, JavaScript and modern frameworks like React, Node.js, JUnit, Tailwind CSS. 
            </p>

            <p className="text-muted-foreground">
               I have developed a solid foundation in software engineering practices, object oriented programming, and full-stack development. 
               My experience extends to building responsive and dynamic web applications using both front end and back end technologies. 
            </p>

            <p className="text-muted-foreground">
               🎯 Currently, I am actively seeking internship and job opportunities in 
               software development and full stack development, where I can apply my skills, learn from industry professionals and make a meaningful impact.  
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/ROHAN_JETHWANI_RESUME.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Development</h4>
                  <p className="text-muted-foreground">
                    Developing scalable software systems and applications using modern programming languages and architectures.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CodeSquareIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks to ensure seamless user experiences across all devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning & AI</h4>
                  <p className="text-muted-foreground">
   
                    Developing intelligent agent systems that learn optimal policies and generate efficient action sequences in dynamic environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};