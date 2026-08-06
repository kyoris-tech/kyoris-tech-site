import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type { ProjectItem } from "./projects-data";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  isLast: boolean;
}

export function ProjectCard({ project, index, isLast }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <div>
      <div className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className={cn(isReversed && "lg:order-2")}>
          <div className="overflow-hidden rounded-3xl border border-[var(--surface-border-color)] shadow-lg shadow-neutral-900/5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <Image
              src={project.image}
              alt={`Captura de tela do projeto ${project.title}`}
              width={project.imageWidth}
              height={project.imageHeight}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className={cn("flex flex-col gap-4", isReversed && "lg:order-1")}>
          <Text
            as="h3"
            size="2xl"
            weight="bold"
            className="transition-colors duration-300 group-hover:text-[var(--text-color-primary)]"
          >
            {project.title}
          </Text>

          <Text color="muted">{project.description}</Text>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-neutral-50"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button
            as="a"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="mt-2 self-start"
          >
            Visitar projeto <span aria-hidden className="ml-1">→</span>
          </Button>
        </div>
      </div>

      {!isLast && (
        <div className="my-8 border-t border-[var(--surface-border-color)]" />
      )}
    </div>
  );
}
