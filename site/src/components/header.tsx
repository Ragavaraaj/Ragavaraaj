"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme";
import { MobileMenu } from "@/components/mobile-menu";
import { useActiveSection } from "@/hooks/useActiveSection";

const routes = [
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Education", path: "#education" },
  { name: "Achievements", path: "#achievements" },
];

export function Header() {
  const { activeSection } = useActiveSection();

  // Convert activeSection to hash format for comparison
  const activeHash = activeSection === "hero" ? "" : `#${activeSection}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-12 flex h-16 max-w-screen-xl items-center m-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">RD</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      activeHash === route.path &&
                        "bg-accent text-accent-foreground"
                    )}
                    href={route.path}
                  >
                    {route.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <MobileMenu routes={routes} activeHash={activeHash} />
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link
                href="/ResumeSimple.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
