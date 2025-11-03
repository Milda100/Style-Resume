import { Briefcase, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export function ExperienceItem({ title, company, location, startDate, endDate, responsibilities }: ExperienceItemProps) {
  return (
    <div className="mb-6 last:mb-0 relative">
      {/* Timeline dot */}
      <div className="absolute -left-[1.3rem] top-2 w-3 h-3 bg-[var(--cyber-cyan)] rotate-45 shadow-[0_0_10px_var(--cyber-cyan)]"></div>
      
      <div className="bg-[var(--cyber-gray)] p-4 clip-corner relative border-l-2 border-[var(--cyber-cyan)]">
        <div className="flex justify-between items-start mb-2 gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-[var(--cyber-cyan)]" />
              <h3 className="text-white">{title}</h3>
            </div>
            <div className="flex items-center gap-2 text-[var(--cyber-light)] text-sm font-mono">
              <span>{company}</span>
              <span className="text-[var(--cyber-cyan)]">•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-[var(--cyber-cyan)] font-mono whitespace-nowrap bg-[var(--cyber-darker)] px-3 py-1 border border-[var(--cyber-cyan)]">
            {startDate} → {endDate}
          </div>
        </div>
        <ul className="space-y-1.5 mt-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-[var(--cyber-light)] text-sm flex gap-2">
              <span className="text-[var(--cyber-cyan)] font-mono">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
