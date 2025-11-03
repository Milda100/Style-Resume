import { GraduationCap } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  school: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string;
}

export function EducationItem({ degree, school, location, graduationDate, gpa, honors }: EducationItemProps) {
  return (
    <div className="mb-4 last:mb-0 relative">
      {/* Timeline dot */}
      <div className="absolute -left-[1.3rem] top-2 w-3 h-3 bg-[var(--cyber-cyan)] rotate-45 shadow-[0_0_10px_var(--cyber-cyan)]"></div>
      
      <div className="bg-[var(--cyber-gray)] p-4 border-l-2 border-[var(--cyber-cyan)]">
        <div className="flex justify-between items-start gap-4 mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-4 h-4 text-[var(--cyber-cyan)]" />
              <h3 className="text-white">{degree}</h3>
            </div>
            <p className="text-[var(--cyber-light)] text-sm font-mono">{school} • {location}</p>
          </div>
          <div className="text-xs text-[var(--cyber-cyan)] font-mono whitespace-nowrap bg-[var(--cyber-darker)] px-3 py-1 border border-[var(--cyber-cyan)]">
            {graduationDate}
          </div>
        </div>
        {(gpa || honors) && (
          <div className="text-[var(--cyber-light)] text-sm mt-2 font-mono">
            {gpa && <p>GPA: <span className="text-[var(--cyber-cyan)]">{gpa}</span></p>}
            {honors && <p className="text-[var(--cyber-green)]">{honors}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
