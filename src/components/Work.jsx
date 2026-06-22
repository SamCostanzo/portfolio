import TechnologyBadge from "./TechnologyBadge";
import WorkItem from "./WorkItem";
import projects from "../data/projects.json";

export default function Work() {
  return (
    <div className="work bg-background px-4 py-20">
      <div className="items-center max-w-container mx-auto">
        <div className="flex justify-between border-b-1 border-border pb-2 mb-12">
          <h2 className="font-playfair text-[min(12vw,2rem)] font-bold text-text leading-[1.2]">Work</h2>
          <p className="font-mono text-muted">Selected Projects</p>
        </div>

        <div className="work-list">
          {projects.map((project) => (
            <WorkItem id={project.id} title={project.title} description={project.description} live={project.live} github={project.github} tech={project.tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
