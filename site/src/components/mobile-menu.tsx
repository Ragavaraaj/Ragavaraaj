import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme";

interface MobileMenuProps {
  routes: { name: string; path: string }[];
  activeHash?: string;
}

export function MobileMenu({ routes, activeHash = "" }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open mobile menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col h-full">
        <div className="flex flex-col flex-grow px-2 py-6">
          <div className="mb-8 px-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">RD</span>
            </Link>
          </div>

          <nav className="flex flex-col gap-2 mb-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "px-3 py-2 text-lg rounded-md transition-colors",
                  activeHash === route.path
                    ? "bg-accent text-accent-foreground font-medium"
                    : "hover:bg-accent/50"
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-4 px-2">
            <Button asChild variant="outline" className="justify-center">
              <Link
                href="/ResumeSimple.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
            <Button asChild className="justify-center">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-auto px-2">
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="border-t py-4 px-4">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2025 Ragavaraaj Dhurairaj. All rights reserved.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
