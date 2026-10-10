import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type { ProjectItem } from "./projects-data";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { featured = false } = project;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-[var(--surface-border-color)] bg-[var(--surface-color)] shadow-lg shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        featured && "md:col-span-2 lg:grid lg:grid-cols-[1.4fr_1fr]",
      )}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden
        className={cn(
          "relative block overflow-hidden border-b border-[var(--surface-border-color)]",
          featured && "lg:flex lg:items-center lg:border-b-0 lg:border-r lg:bg-neutral-950",
        )}
      >
        <Image
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          width={project.imageWidth}
          height={project.imageHeight}
          className={cn(
            "w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]",
            featured ? "aspect-[16/9] lg:my-auto lg:aspect-auto" : "aspect-[16/9]",
          )}
        />
      </a>

      <div
        className={cn(
          "flex flex-1 flex-col gap-3 p-6",
          featured && "lg:justify-center lg:p-10",
        )}
      >
        <span className="text-xs font-semibold tracking-wide text-[var(--text-color-primary)] uppercase">
          {featured ? `Destaque · ${project.category}` : project.category}
        </span>

        <Text as="h3" size={featured ? "2xl" : "xl"} weight="bold">
          {project.title}
        </Text>

        <Text color="muted">{project.description}</Text>

        {project.highlights && (
          <ul className="flex flex-col gap-1.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-[var(--text-color-muted)]">
                <span aria-hidden className="text-[var(--text-color-primary)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}

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
          className="mt-auto self-start"
        >
          Visitar projeto <span aria-hidden className="ml-1">→</span>
        </Button>
      </div>
    </article>
  );
}
