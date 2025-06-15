import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import Image from "next/image";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  img: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  img,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            {/* <Building2 className="size-5 text-muted-foreground" /> */}
            <Image src={img} alt="Common Thread Collective" width={36} height={36} />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Back-end Developer",
      company: "Common Thread Collective",
      period: "2025/05 - Present",
      description:
        "Participated in a project for E-commerce platform development, focusing on backend development using Node.js and AWS. Optimized the application performance and scalability in Cloud Architecture and improve the application by debugging and refactoring.",
      technologies: ["Typescript", "Node.js", "AWS", "PostgreSQL", "API"],
      img: "/usa.png",
    },
    {
      title: "Full Stack Developer",
      company: "Anycloud, Ltd.",
      period: "2025/01 - 2025/04",
      description:
        "Developed and maintained client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
      technologies: ["React", "Next.js", "PostgreSQL", "Supabase", "Docker", "API", "TailwindCSS"],
      img: "/japan.png",
    },
    {
      title: "Full Stack Developer",
      company: "Hitachi, Ltd.",
      period: "2022/04 - 2024/08",
      description:
        "Developed management software applications for hardware products. Experienced in Scrum and Agile development methods. Experienced a wide range of front-end, back-end, and testing processes. Also participated in a generative AI project.",
      technologies: ["React", "Typescript", "Node.js", "Java", "PostgreSQL", "Docker", "API", "Quarkus", "JUnit", "Mockito", "Jest"],
      img: "/japan.png",
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
