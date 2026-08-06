import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import type { ServiceItem } from "./services-data";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="flex flex-col gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" />
      </span>

      <Text as="h3" size="xl" weight="semibold">
        {service.title}
      </Text>

      <Text size="sm" color="muted">
        {service.description}
      </Text>
    </Card>
  );
}
