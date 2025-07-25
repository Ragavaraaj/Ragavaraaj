import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ActiveSectionProvider } from "@/context/active-section-context";
import {
  ScrollToTopButton,
  ScrollProgressBar,
} from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Ragavaraaj Dhurairaj - Full Stack Developer",
  description:
    "Senior Full Stack Developer with expertise in React.js and Node.js",
  keywords: ["developer", "full stack", "React", "Node.js", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveSectionProvider>
            <Header />
            <ScrollProgressBar />
            {children}
            <div className="hidden md:block">
              <Footer />
            </div>
            <ScrollToTopButton />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
