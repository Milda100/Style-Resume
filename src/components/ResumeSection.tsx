import { ChevronRight } from 'lucide-react';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-8 last:mb-0">
      <div className="relative mb-4">
        <div className="flex items-center gap-2">
          <ChevronRight className="w-5 h-5 text-[var(--cyber-cyan)]" />
          <h2 className="text-[var(--cyber-cyan)] uppercase tracking-wider font-mono">{title}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--cyber-cyan)] to-transparent"></div>
        </div>
      </div>
      <div className="pl-4 border-l-2 border-[var(--cyber-gray)]">
        {children}
      </div>
    </section>
  );
}
