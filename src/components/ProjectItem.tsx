import { ExternalLink, Github, Code2 } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectItem({ title, description, technologies, githubUrl, liveUrl }: ProjectItemProps) {
  return (
    <div className="mb-4 last:mb-0 relative">
      {/* Timeline dot */}
      <div className="absolute -left-[1.3rem] top-2 w-3 h-3 bg-[var(--cyber-purple)] rotate-45 shadow-[0_0_10px_var(--cyber-purple)]"></div>
      
      <div className="bg-[var(--cyber-gray)] p-4 border-l-2 border-[var(--cyber-purple)] hover:border-[var(--cyber-cyan)] transition-colors">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-center gap-2 flex-1">
            <Code2 className="w-4 h-4 text-[var(--cyber-purple)]" />
            <h3 className="text-white">{title}</h3>
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[var(--cyber-light)] hover:text-[var(--cyber-cyan)] transition-colors font-mono border border-[var(--cyber-gray)] hover:border-[var(--cyber-cyan)] px-2 py-1"
              >
                <Github className="w-3 h-3" />
                Code
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[var(--cyber-light)] hover:text-[var(--cyber-cyan)] transition-colors font-mono border border-[var(--cyber-gray)] hover:border-[var(--cyber-cyan)] px-2 py-1"
              >
                <ExternalLink className="w-3 h-3" />
                Live
              </a>
            )}
          </div>
        </div>
        <p className="text-[var(--cyber-light)] text-sm mb-2">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.split(',').map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-mono px-2 py-0.5 bg-[var(--cyber-darker)] text-[var(--cyber-cyan)] border border-[var(--cyber-cyan)]"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
