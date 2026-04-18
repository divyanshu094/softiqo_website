"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contactus" },
];

const themes = [
  { id: "softiqo", label: "Softiqo Blue" },
  { id: "logo", label: "Logo" },
  { id: "dark", label: "Dark" },
  { id: "teal", label: "Teal" },
  { id: "green", label: "Green" },
  { id: "indigo", label: "Indigo" },
];

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    if (typeof window === "undefined") return "softiqo";
    const storedTheme = localStorage.getItem("softiqo-theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    return storedTheme && themes.some((theme) => theme.id === storedTheme)
      ? storedTheme
      : prefersDark
      ? "dark"
      : "softiqo";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme;
  }, [activeTheme]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (event: MediaQueryListEvent) => {
        if (!localStorage.getItem("softiqo-theme")) {
          const nextTheme = event.matches ? "dark" : "softiqo";
          setActiveTheme(nextTheme);
        }
      };
      mediaQuery.addEventListener?.("change", handleChange);
      return () => mediaQuery.removeEventListener?.("change", handleChange);
    }
  }, []);

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem("softiqo-theme", themeId);
    setThemeOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--surface)]/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 lg:px-5">
        <Link href="/" className="flex items-center text-[color:var(--foreground)]">
          <Image
            src="/images/new_logo.png"
            alt="Softiqo Technologies logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--muted)] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[color:var(--primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* <div className="relative hidden items-center gap-2 md:flex">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-medium text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--background)]"
              onClick={() => setThemeOpen((current) => !current)}
            >
              Theme
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]" />
            </button>
            {themeOpen && (
              <div className="absolute right-0 top-full z-10 mt-3 w-44 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 shadow-lg">
                <div className="space-y-2">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      className={`flex w-full items-center justify-between rounded-3xl px-3 py-2 text-sm transition hover:bg-[color:var(--background)] ${
                        activeTheme === theme.id ? "font-semibold text-[color:var(--primary)]" : "text-[color:var(--muted)]"
                      }`}
                      onClick={() => handleThemeChange(theme.id)}
                    >
                      {theme.label}
                      {activeTheme === theme.id && <span>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div> */}

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] transition hover:bg-[color:var(--background)] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/98 px-6 pb-5 pt-4 shadow-md md:hidden">
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-3xl px-4 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:bg-[color:var(--background)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
