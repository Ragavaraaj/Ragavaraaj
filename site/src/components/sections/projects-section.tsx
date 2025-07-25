"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Projects, ProjectsContent } from "@/data/projects";
import Link from "next/link";
import Section from "@/components/sections/section-wrapper";

interface ProjectsSectionProps {
  projects: Projects;
  projectsContent: ProjectsContent;
}

export function ProjectsSection({
  projects,
  projectsContent,
}: ProjectsSectionProps) {
  return (
    <Section id="projects">
      <Section.Header
        title={projectsContent.title}
        subtitle={projectsContent.subtitle}
      />
      <Section.Content>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col border shadow-sm h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      {projectsContent.labels.features}
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {projectsContent.labels.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectsContent.labels.viewButton}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}
