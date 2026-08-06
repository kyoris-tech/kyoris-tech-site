import { FlowArrowIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

interface MethodConnectorProps {
  direction: "left" | "right";
  visible: boolean;
  delayMs: number;
}

export function MethodConnector({
  direction,
  visible,
  delayMs,
}: MethodConnectorProps) {
  return (
    <div
      className={cn(
        "hidden h-10 items-center text-secondary transition-all duration-500 ease-out sm:flex",
        direction === "right" ? "justify-start pl-8" : "justify-end pr-8",
        visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <FlowArrowIcon
        className={cn("h-6 w-6", direction === "left" && "scale-x-[-1]")}
      />
    </div>
  );
}
