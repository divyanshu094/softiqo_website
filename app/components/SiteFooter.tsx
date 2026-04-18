import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 text-[color:var(--foreground)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary-dark)] text-lg font-semibold text-white">
              S
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">Softiqo</p>
              <p className="text-xs text-[color:var(--muted)]">Technologies</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-[color:var(--muted)]">
            Softiqo Technologies delivers digital products, software engineering, and cloud solutions that help teams build faster and grow with confidence.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">Company</p>
          <div className="space-y-2 text-sm text-[color:var(--muted)]">
            <Link href="/aboutus" className="block transition hover:text-[color:var(--foreground)]">
              About Us
            </Link>
            <Link href="/careers" className="block transition hover:text-[color:var(--foreground)]">
              Careers
            </Link>
            <Link href="/blog" className="block transition hover:text-[color:var(--foreground)]">
              Blog
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">Solutions</p>
          <div className="space-y-2 text-sm text-[color:var(--muted)]">
            <Link href="/services" className="block transition hover:text-[color:var(--foreground)]">
              Services
            </Link>
            <Link href="/technology" className="block transition hover:text-[color:var(--foreground)]">
              Technology
            </Link>
            <Link href="/contactus" className="block transition hover:text-[color:var(--foreground)]">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">Resources</p>
          <div className="space-y-2 text-sm text-[color:var(--muted)]">
            <Link href="/privacy" className="block transition hover:text-[color:var(--foreground)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block transition hover:text-[color:var(--foreground)]">
              Terms of Service
            </Link>
            <Link href="/contactus" className="block transition hover:text-[color:var(--foreground)]">
              Support
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)] bg-[color:var(--background)] py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-6 text-sm text-[color:var(--muted)] lg:flex-row lg:justify-between lg:px-10">
          <p>© 2026 Softiqo Technologies. All rights reserved.</p>
          <p>info@softiqo.com · +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
}
