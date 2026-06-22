import TechnologyBadge from "./TechnologyBadge";

export default function WorkItem({}) {
  return (
    <div className="work-item flex justify-between gap-4 p-4 border-b-1 border-border mb-4">
      <div className="work-number p-4 text-muted font-mono">1</div>
      <div className="work-info">
        <h4 className="font-playfair text-[min(12vw,1.25rem)] font-bold text-text leading-[1.2] mb-2">Project One</h4>
        <p className="mb-4 text-muted font-inter">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum numquam minus exercitationem, dolor corrupti similique distinctio praesentium cumque ab at ut molestiae quisquam? Nemo,
          laudantium?
        </p>
        <div className="work-links flex flex-wrap gap-2 items-center mb-4">
          <TechnologyBadge title="React" />
          <TechnologyBadge title="TypeScript" />
        </div>
      </div>
      <div className="flex flex-col gap-2 min-w-[fit-content] justify-center">
        <a href="#" target="_blank" className="mb-2 text-accent uppercase font-mono text-xs hover:scale-110 duration-300">
          Live →
        </a>
        <a href="#" target="_blank" className="mb-2 text-accent uppercase font-mono text-xs hover:scale-110 duration-300">
          GitHub →
        </a>
      </div>
    </div>
  );
}
