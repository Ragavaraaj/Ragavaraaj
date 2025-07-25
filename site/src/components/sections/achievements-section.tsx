"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Achievements, AchievementsContent } from "@/data/achievements";
import { Trophy } from "lucide-react";
import Section from "@/components/sections/section-wrapper";

interface AchievementsSectionProps {
  achievements: Achievements;
  achievementsContent: AchievementsContent;
}

export function AchievementsSection({
  achievements,
  achievementsContent,
}: AchievementsSectionProps) {
  return (
    <Section id="achievements">
      <Section.Header
        title={achievementsContent.title}
        subtitle={achievementsContent.subtitle}
      />
      <Section.Content>
        <Card className="border shadow-sm">
          <CardContent className="p-6">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <Trophy className="w-4 h-4" />
                  </span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Section.Content>
    </Section>
  );
}
