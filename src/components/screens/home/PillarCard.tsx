import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import type { Pillar } from "./pillars-data";

interface PillarCardProps {
  pillar: Pillar;
}

export function PillarCard({ pillar }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <Card className="flex flex-col gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>

      <Text as="h4" size="lg" weight="bold">
        {pillar.title}
      </Text>

      <Text size="sm" color="muted">
        {pillar.description}
      </Text>
    </Card>
  );
}
