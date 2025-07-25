"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Education, EducationContent } from "@/data/education";
import Section from "@/components/sections/section-wrapper";

interface EducationSectionProps {
  education: Education;
  educationContent: EducationContent;
}

export function EducationSection({
  education,
  educationContent,
}: EducationSectionProps) {
  return (
    <Section id="education">
      <Section.Header
        title={educationContent.title}
        subtitle={educationContent.subtitle}
      />
      <Section.Content>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader>
                <CardTitle>{item.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.institution}</span>
                  <span className="text-muted-foreground">{item.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}
