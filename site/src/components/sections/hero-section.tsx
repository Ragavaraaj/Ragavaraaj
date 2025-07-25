"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeroContent } from "@/data/hero";
import Link from "next/link";
import Section from "@/components/sections/section-wrapper";

export function HeroSection({ heroContent }: { heroContent: HeroContent }) {
  return (
    <Section id="hero" className="min-h-[95vh] flex md:py-20 py-28 m-0">
      <Section.Content>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 m-auto">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {heroContent.name}
              </h1>
              <h2 className="text-xl text-primary md:text-2xl">
                {heroContent.title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                {heroContent.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href={heroContent.buttons.primary.link}>
                  {heroContent.buttons.primary.text}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={heroContent.buttons.secondary.link}>
                  {heroContent.buttons.secondary.text}
                </Link>
              </Button>
            </div>
          </div>
          <div className="m-auto mt-12 md:mt-0 md:ml-auto relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/60 opacity-75 blur-xl"></div>
            <Avatar className="h-60 w-60 border-4 border-muted bg-muted">
              <AvatarImage
                src={heroContent.avatar.src}
                alt={heroContent.avatar.alt}
              />
              <AvatarFallback className="text-4xl">
                {heroContent.avatar.fallback}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </Section.Content>
    </Section>
  );
}
