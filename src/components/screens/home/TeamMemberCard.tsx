import { ImagePlaceholderIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/Text";
import type { TeamMember } from "./team-data";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--surface-border-color)] bg-[var(--surface-color)]">
        <ImagePlaceholderIcon className="h-8 w-8 text-[var(--text-color-muted)]" />
      </div>

      <div>
        <Text as="h4" size="lg" weight="bold">
          {member.name}
        </Text>

        {member.badge ? (
          <span className="mt-1 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-neutral-900">
            {member.badge}
          </span>
        ) : (
          <Text size="sm" weight="medium" color="secondary" className="mt-1">
            {member.role}
          </Text>
        )}
      </div>

      <Text size="sm" color="muted">
        {member.bio}
      </Text>
    </div>
  );
}
