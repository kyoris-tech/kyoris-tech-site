"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const isDarkBackdrop = theme === "dark" || DARK_BACKDROP_SECTION_IDS.has(activeId);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div className="flex items-center gap-6 rounded-full border border-white/40 bg-white/30 px-5 py-2 shadow-lg shadow-neutral-900/5 backdrop-blur-xl">
        <a href="#home" onClick={(event) => handleNavigate(event, "home")} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Kyoris Tech"
            width={140}
            height={70}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav ref={listRef} className="relative flex items-center gap-1 rounded-full bg-white/10 p-1">
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

        <ThemeToggle />
      </div>
    </header>
  );
}
