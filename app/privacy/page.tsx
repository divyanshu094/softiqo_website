import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Softiqo Technologies' privacy policy to understand how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "personal information", "privacy"],
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)]">Your privacy is important to us</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            Softiqo Technologies is committed to protecting your personal information and using it only in ways that are transparent and secure.
          </p>
        </section>
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6 text-[color:var(--muted)]">
            <p className="text-lg font-semibold text-[color:var(--foreground)]">Key points</p>
            <ul className="space-y-4">
              <li>We collect only the data needed to respond to inquiries and deliver services.</li>
              <li>We do not sell your personal information to third parties.</li>
              <li>We secure data with industry-standard controls and access restrictions.</li>
            </ul>
          </div>
        </section>
      </main>
  );
}
