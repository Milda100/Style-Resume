import { Mail, Phone, Linkedin, Github, MapPin, Cpu } from 'lucide-react';

interface ResumeHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export function ResumeHeader({ name, title, email, phone, location, linkedin, github }: ResumeHeaderProps) {
  return (
    <header className="relative border-b-2 border-[var(--cyber-cyan)] pb-6 mb-8">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--cyber-cyan)]"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--cyber-cyan)]"></div>
      
      {/* Decorative CPU icon */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <Cpu className="w-12 h-12 text-[var(--cyber-cyan)]" strokeWidth={1.5} />
          <div className="absolute inset-0 w-12 h-12 text-[var(--cyber-cyan)] opacity-50 blur-sm">
            <Cpu className="w-12 h-12" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <h1 className="text-center mb-2 text-[var(--cyber-cyan)] glitch-text tracking-wider uppercase text-4xl">{name}</h1>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-[var(--cyber-cyan)] to-transparent"></div>
        <p className="text-center text-[var(--cyber-light)] tracking-widest uppercase text-sm font-mono">{title}</p>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-[var(--cyber-cyan)] to-transparent"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--cyber-light)] font-mono">
        {email && (
          <div className="flex items-center gap-1.5 hover:text-[var(--cyber-cyan)] transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>{phone}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>
        {linkedin && (
          <div className="flex items-center gap-1.5 hover:text-[var(--cyber-cyan)] transition-colors">
            <Linkedin className="w-3.5 h-3.5" />
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        )}
        {github && (
          <div className="flex items-center gap-1.5 hover:text-[var(--cyber-cyan)] transition-colors">
            <Github className="w-3.5 h-3.5" />
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
