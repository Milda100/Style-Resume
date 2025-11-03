import { ResumeHeader } from "./components/ResumeHeader";
import { ResumeSection } from "./components/ResumeSection";
import { ExperienceItem } from "./components/ExperienceItem";
import { EducationItem } from "./components/EducationItem";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectItem } from "./components/ProjectItem";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--cyber-darker)] cyber-grid py-12 px-4">
      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--cyber-cyan)] to-transparent animate-[scan-line_8s_linear_infinite]"></div>
      </div>

      <div className="max-w-4xl mx-auto bg-[var(--cyber-dark)] shadow-[0_0_50px_rgba(0,243,255,0.1)] p-8 md:p-12 relative border-2 border-[var(--cyber-cyan)]">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[var(--cyber-cyan)]"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[var(--cyber-cyan)]"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[var(--cyber-cyan)]"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[var(--cyber-cyan)]"></div>

        <ResumeHeader
          name="Milda Satkute"
          title="Junior Software Developer"
          email="mildasatkute0@gmail.com"
          phone="+37065164282"
          location="Vilnius, Lithuania"
          linkedin="https://www.linkedin.com/in/milda-satkute-a31235166/"
          github="https://github.com/Milda100"
        />

        <ResumeSection title="Summary">
          <p className="text-[var(--cyber-light)] leading-relaxed">
            Self-taught Junior Developer working with React, JavaScript, Python, and GIS technologies. Currently at 
            Cellular-Expert, developing web applications, validating data in PostgreSQL, and integrating AI-driven 
            geospatial solutions using ArcGIS and satellite imagery.
          </p>
          <p className="text-[var(--cyber-light)] leading-relaxed mt-3">
            Transitioned from international leadership roles across Australia, Canada, and Lithuania, bringing adaptability, 
            problem-solving, and strong collaboration skills to software development. Passionate about clean, accessible code 
            and building tools that connect technology with real-world impact.
          </p>
        </ResumeSection>

        <ResumeSection title="Relevant Experience">
          <ExperienceItem
            title="Junior Developer"
            company="Cellular-Expert"
            location="Vilnius, Lithuania"
            startDate="Jun 2025"
            endDate="Present"
            responsibilities={[
              "Build web applications with React, JavaScript, TypeScript, and CSS",
              "Work with ArcGIS tools, satellite imagery, and AI models for geospatial solutions",
              "Handle data validation in PostgreSQL and automate workflows with Python and DBeaver"
            ]}
          />
          <ExperienceItem
            title="Restaurant Manager"
            company="The Distillery Restaurants Corp."
            location="Toronto, Canada"
            startDate="Jul 2021"
            endDate="Jul 2022"
            responsibilities={[
              "Led a team of 30+ employees and strengthened leadership, communication, and collaboration skills — now applied to software projects"
            ]}
          />
          <ExperienceItem
            title="Executive Suite Supervisor"
            company="Pinnacle Caterers"
            location="Toronto, Canada"
            startDate="Sep 2019"
            endDate="Mar 2020"
            responsibilities={[
              "Coordinated large-scale corporate events, maintaining client satisfaction through clear communication and reliability"
            ]}
          />
          <ExperienceItem
            title="Bartender/Supervisor"
            company="The Tilbury Hotel"
            location="Sydney, Australia"
            startDate="Sep 2017"
            endDate="Mar 2019"
            responsibilities={[
              "Supervised daily operations and managed events in a fast-paced environment"
            ]}
          />
          <ExperienceItem
            title="Retail Sales Specialist"
            company="Telia"
            location="Vilnius, Lithuania"
            startDate="Apr 2016"
            endDate="Aug 2017"
            responsibilities={[
              "Surpassed sales goals and maintained performance reports, developing data-driven and goal-oriented habits"
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Projects">
          <ProjectItem
            title="Star Wars Browser App"
            description="Explore Star Wars movies & characters with server-side search and debounced input for smooth performance."
            technologies="React, Redux, TypeScript, Bootstrap, Sass, Vite, SWAPI API, Jest/Vitest"
            githubUrl="https://github.com/Milda100/StarWars"
            liveUrl="https://milda100.github.io/StarWars/"
          />
          <ProjectItem
            title="Weather Application"
            description="Real-time weather dashboard with most-viewed cities tracking and API-driven city search."
            technologies="React, Vite, Bootstrap, SCSS, Axios, OpenWeather API"
            githubUrl="https://github.com/Milda100/WeatherApp"
            liveUrl="https://milda100.github.io/WeatherApp/"
          />
          <ProjectItem
            title="25+5 Clock Timer"
            description="Pomodoro timer for productivity tracking."
            technologies="JavaScript, React, Vite, Bootstrap, SCSS"
            githubUrl="https://github.com/Milda100/Timer"
            liveUrl="https://milda100.github.io/Timer/"
          />
          <ProjectItem
            title="JavaScript Calculator"
            description="Fully functional calculator built with JavaScript."
            technologies="JavaScript, React, Vite, Bootstrap, SCSS"
            githubUrl="https://github.com/Milda100/Calculator"
            liveUrl="https://milda100.github.io/Calculator/"
          />
          <ProjectItem
            title="Drum Machine"
            description="Interactive drum machine with keyboard sound triggers."
            technologies="JavaScript, React, Vite, Bootstrap, SCSS"
            githubUrl="https://github.com/Milda100/Drum-Machine"
            liveUrl="https://milda100.github.io/Drum-Machine/"
          />
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <SkillsSection
            categories={[
              {
                name: "Languages",
                skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "SQL"]
              },
              {
                name: "Frameworks & Libraries",
                skills: ["React", "Redux", "Bootstrap", "Sass"]
              },
              {
                name: "GIS Tools",
                skills: ["ArcGIS Online", "ArcGIS Enterprise", "ArcGIS Pro", "Survey123", "Field Maps", "Dashboards", "Experience Builder", "Sites", "Hub", "Airbus OneAtlas"]
              },
              {
                name: "Databases & Tools",
                skills: ["PostgreSQL", "DBeaver", "Git", "Bitbucket", "GitHub", "Jira", "Vite", "VS Code", "Chrome DevTools"]
              },
              {
                name: "Concepts",
                skills: ["Responsive Design", "REST APIs", "OOP", "Agile Development", "Data Validation", "AI-Assisted Geospatial Analysis"]
              }
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Education">
          <EducationItem
            degree="freeCodeCamp Certifications"
            school="Responsive Web Design, JavaScript Algorithms and Data Structures, and Front-End Development Libraries Certifications"
            location="Online"
            graduationDate="2024"
          />
          <EducationItem
            degree="Advanced Diploma in Business"
            school="George Brown College"
            location="Toronto, ON"
            graduationDate="2020 - 2021"
            gpa="3.91"
            honors="Entrepreneurship Management"
          />
          <EducationItem
            degree="Advanced Diploma in Business"
            school="Bridge Business College"
            location="Sydney, NSW"
            graduationDate="2017 - 2018"
          />
          <EducationItem
            degree="Bachelor's Degree in Choreography"
            school="Klaipeda University"
            location="Klaipeda, Lithuania"
            graduationDate="2010 - 2014"
          />
        </ResumeSection>
      </div>
    </div>
  );
}
