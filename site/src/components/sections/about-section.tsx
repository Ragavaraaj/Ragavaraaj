"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AboutContent, Highlights, Skills } from "@/data/about";
import Section from "@/components/sections/section-wrapper";

interface AboutSectionProps {
  aboutContent: AboutContent;
  skills: Skills;
  highlights: Highlights;
}

export function AboutSection({
  aboutContent,
  skills,
  highlights,
}: AboutSectionProps) {
  return (
    <Section id="about">
      <Section.Header
        title={aboutContent.title}
        subtitle={aboutContent.subtitle}
      />
      <Section.Content>
        <div className="space-y-8">
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <p>{aboutContent.description}</p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-primary">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{aboutContent.skillsTitle}</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {aboutContent.skillsCategories.frontend}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {aboutContent.skillsCategories.backend}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {aboutContent.skillsCategories.devops}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.devops.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {aboutContent.skillsCategories.tools}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {aboutContent.skillsCategories.dataBase}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.dataBase.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section.Content>
    </Section>
  );
}
