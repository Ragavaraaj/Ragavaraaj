"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExperienceContent, Experiences } from "@/data/experience";
import Section from "@/components/sections/section-wrapper";

interface ExperienceSectionProps {
  experiences: Experiences;
  experienceContent: ExperienceContent;
}

export function ExperienceSection({
  experiences,
  experienceContent,
}: ExperienceSectionProps) {
  return (
    <Section id="experience">
      <Section.Header
        title={experienceContent.title}
        subtitle={experienceContent.subtitle}
      />
      <Section.Content>
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-md">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <CardDescription className="text-md font-medium">
                    {experience.period}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {experience.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Projects:</h4>
                  <div className="space-y-6">
                    {experience.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="space-y-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <p className="font-medium">{project.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {project.period}
                          </p>
                        </div>
                        <ul className="list-disc pl-5 mt-1">
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}
