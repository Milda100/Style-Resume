import { Terminal } from 'lucide-react';

interface SkillsSectionProps {
  categories: {
    name: string;
    skills: string[];
  }[];
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <div className="space-y-4">
      {categories.map((category, index) => (
        <div key={index} className="relative">
          {/* Timeline dot */}
          <div className="absolute -left-[1.3rem] top-2 w-3 h-3 bg-[var(--cyber-green)] rotate-45 shadow-[0_0_10px_var(--cyber-green)]"></div>
          
          <div className="bg-[var(--cyber-gray)] p-4 border-l-2 border-[var(--cyber-green)]">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-[var(--cyber-green)]" />
              <p className="text-white font-mono uppercase text-sm tracking-wider">{category.name}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="text-xs font-mono px-3 py-1.5 bg-[var(--cyber-darker)] text-[var(--cyber-green)] border border-[var(--cyber-green)] hover:shadow-[0_0_10px_var(--cyber-green)] transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
