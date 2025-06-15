import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";

interface EducationItemProps {
  role: string;
  company: string;
  dates: string;
  description: string;
  logo: string;
  relatedLink?: string;
}

const EducationItem = ({
  role,
  company,
  dates,
  description,
  logo,
  relatedLink,
}: EducationItemProps) => {
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
            <Image src={logo} alt={company} width={36} height={36} />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{role}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{dates}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        {relatedLink && relatedLink !== "" && (
          <a href={relatedLink} target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">
            関連リンク
          </a>
        )}
      </div>
    </div>
  );
};

const Educations = () => {
  const educations = [
    {
      role: "Student ",
      company: "Cornerstone International Community College of Canada @ CAN",
      dates: "September 2025 · September 2026",
      description: "Acquire knowledge of web development and engage in projects and extracurricular activities to become a globally competent engineer.",
      logo: "/canada.png",
      relatedLink: "",
    },
    {
      role: "Student (MASTER of Science)",
      company: "University of Tokyo @ JPN",
      dates: "April 2020 · March 2022",
      description: "Research theme is 'Three-dimensional hand guidance by midair haptic display'. Proposed a method of guidance to an arbitrary 3D location using ultrasonic tactile sensation for visually impaired people and in situations where visibility is poor.",
      logo: "/japan.png",
      relatedLink: "https://arxiv.org/abs/2304.11413",
    },
    {
      role: "Student (BACHELOR of Engineering)",
      company: "Kyushu University @ JPN",
      dates: "April 2016 · March 2020",
      description: "Studied mechanical engineering, especially marine engineering. Research theme was on the application of image recognition technology using Machine Learning to the factory(the content of this research was undisclosed because it was conducted in collaboration with a company). Experienced in design drawing and simulation of large offshore structures.",
      logo: "/japan.png",
      relatedLink: "",
    },
  ];

  return (
    <section id="educations" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Education
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Academic Background
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            学歴・研究・活動の概要
          </p>
        </div>

        <div className="relative">
          {educations.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations; 