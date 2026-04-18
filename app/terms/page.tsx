import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using the Softiqo Technologies website and services.",
  keywords: ["terms of service", "terms and conditions", "website terms", "service agreement"],
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Terms of Service</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)]">Terms and conditions for using our site</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            These terms govern your use of the Softiqo Technologies website and any inquiries or contact through the site.
          </p>
        </section>
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6 text-[color:var(--muted)]">
            <p className="text-lg font-semibold text-[color:var(--foreground)]">Important notes</p>
            <ul className="space-y-4">
              <li>Your use of this website constitutes agreement to these terms.</li>
              <li>We may update terms from time to time; continued use is acceptance of changes.</li>
              <li>Contact us for information on licensing, consulting, or other services.</li>
            </ul>
          </div>
        </section>
      </main>
  );
}
