"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DownloadResumeContent } from "@/data/download";
import Section from "@/components/sections/section-wrapper";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";

interface DownloadResumeSectionProps {
  downloadResumeContent: DownloadResumeContent;
}

export function DownloadResumeSection({
  downloadResumeContent,
}: DownloadResumeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "download":
        return <Download />;
      case "file-text":
        return <FileText />;
      default:
        return null;
    }
  };

  return (
    <Section id="download" sectionRef={sectionRef} className="bg-muted/50">
      <Section.Content>
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter">
                {downloadResumeContent.title}
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[600px]">
                {downloadResumeContent.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href={downloadResumeContent.buttons.pdf.link} download>
                  {renderIcon(downloadResumeContent.buttons.pdf.icon)}
                  {downloadResumeContent.buttons.pdf.text}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href={downloadResumeContent.buttons.docx.link} download>
                  {renderIcon(downloadResumeContent.buttons.docx.icon)}
                  {downloadResumeContent.buttons.docx.text}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section.Content>
    </Section>
  );
}
