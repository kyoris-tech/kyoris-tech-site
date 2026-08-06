import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { navItems } from "@/components/composite/Navbar/nav-items";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-500/10 bg-neutral-950 py-10">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Text size="sm" weight="semibold" className="!text-neutral-50">
              © {year} Kyoris Tech
            </Text>

            <Text size="sm" className="mt-1 !text-neutral-400">
              Construindo experiências digitais com propósito.
            </Text>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-neutral-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="my-8 border-t border-neutral-500/10" />

        <div className="flex flex-col gap-2 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Desenvolvido com{" "}
            <span className="font-semibold text-neutral-300">Next.js</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
