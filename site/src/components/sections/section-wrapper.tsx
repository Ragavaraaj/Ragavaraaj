import { useSectionRef } from "@/hooks/useSectionRef";
import { SectionId } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id: SectionId;
  sectionRef?: React.RefObject<HTMLElement | null>;
  children: ReactNode;
  className?: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

interface SectionContentProps {
  children: ReactNode;
}

interface SectionComponent extends React.FC<SectionProps> {
  Header: React.FC<SectionHeaderProps>;
  Content: React.FC<SectionContentProps>;
}

const Section: SectionComponent = ({ id, children, className }) => {
  const sectionRef = useSectionRef(id);
  return (
    <section
      id={id}
      className={cn(`px-14 md:py-20 py-18 my-20`, className)}
      ref={sectionRef}
    >
      {children}
    </section>
  );
};

Section.Header = function Header({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

Section.Content = function Content({ children }) {
  return <>{children}</>;
};

export default Section;
