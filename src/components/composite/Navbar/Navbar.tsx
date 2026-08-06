"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/cn";
import { useTheme } from "@/providers/theme";
import { navItems } from "./nav-items";

const DARK_BACKDROP_SECTION_IDS = new Set(["contact"]);

interface IndicatorStyle {
  left: number;
  width: number;
}

export function Navbar() {
  const { theme } = useTheme();
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [indicator, setIndicator] = useState<IndicatorStyle | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLAnchorElement>());

  const updateIndicator = useCallback(() => {
    const list = listRef.current;
    const activeItem = itemRefs.current.get(activeId);

    if (!list || !activeItem) return;

    const listBounds = list.getBoundingClientRect();
    const itemBounds = activeItem.getBoundingClientRect();

    setIndicator({
      left: itemBounds.left - listBounds.left,
      width: itemBounds.width,
    });
  }, [activeId]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveId(mostVisible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleNavigate(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setActiveId(id);
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const isDarkBackdrop = theme === "dark" || DARK_BACKDROP_SECTION_IDS.has(activeId);
  const activeLabel = navItems.find((item) => item.id === activeId)?.label ?? navItems[0].label;

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div className="flex flex-col items-center">
        <div className="inline-flex items-center gap-6 rounded-full border border-white/40 bg-white/30 px-5 py-2 shadow-lg shadow-neutral-900/5 backdrop-blur-xl">
          <nav
            ref={listRef}
            className="relative hidden items-center gap-1 rounded-full bg-white/10 p-1 sm:flex"
          >
            {indicator && (
              <span
                className="absolute inset-y-1 rounded-full bg-primary transition-all duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}

            {navItems.map((item) => (
              <a
                key={item.id}
                ref={(element) => {
                  if (element) itemRefs.current.set(item.id, element);
                }}
                href={`#${item.id}`}
                onClick={(event) => handleNavigate(event, item.id)}
                className={cn(
                  "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                  activeId === item.id
                    ? "text-neutral-50"
                    : isDarkBackdrop
                      ? "text-neutral-200 hover:text-neutral-50"
                      : "text-neutral-500 hover:text-neutral-900",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-4 sm:hidden">
            <span
              className={cn(
                "px-2 text-sm font-semibold",
                isDarkBackdrop ? "text-neutral-50" : "text-neutral-900",
              )}
            >
              {activeLabel}
            </span>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300",
                isDarkBackdrop ? "text-neutral-50" : "text-neutral-900",
              )}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "w-56 overflow-hidden transition-all duration-300 ease-out sm:hidden",
            isMobileMenuOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-1 rounded-3xl border border-white/40 bg-white/70 p-3 shadow-lg shadow-neutral-900/5 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavigate(event, item.id)}
                className={cn(
                  "rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors duration-300",
                  activeId === item.id
                    ? "bg-primary text-neutral-50"
                    : "text-neutral-500 hover:bg-white/60 hover:text-neutral-900",
                )}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 flex items-center justify-center border-t border-neutral-200/60 pt-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
