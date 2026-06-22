import TechnologyBadge from "./TechnologyBadge";

export default function WorkItem({ id, title, description, live, github, tech }) {
  return (
    <div className="work-item flex gap-4 p-4 border-b-1 border-border mb-4">
      <div className="work-number p-4 text-muted font-mono">0{id}</div>
      <div className="work-info">
        <h4 className="font-playfair text-[min(12vw,1.25rem)] font-bold text-text leading-[1.2] mb-2">{title}</h4>
        <p className="mb-4 text-muted font-inter text-light-text font-light">{description}</p>
        <div className="work-links flex flex-wrap gap-2 items-center mb-4">
          {tech.map((tech) => (
            <TechnologyBadge title={tech} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 min-w-[fit-content] justify-center ml-auto">
        <a href={live} target="_blank" className="mb-2 text-accent uppercase font-mono text-xs hover:scale-110 duration-300">
          Live →
        </a>
        <a href={github} target="_blank" className="mb-2 text-accent uppercase font-mono text-xs hover:scale-110 duration-300">
          GitHub →
        </a>
      </div>
    </div>
  );
}
