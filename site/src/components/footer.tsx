import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={cn("border-t py-8 bg-muted/40", className)}>
      <div className="px-12 flex flex-col items-center justify-between gap-4 md:flex-row m-auto">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; 2025 Ragavaraaj Dhurairaj. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/ragavaraaj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/ragavaraaj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/ragavaraaj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
