import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read insights on software development, design, and product strategy from Softiqo Technologies. Explore our latest thinking on building scalable digital products and modern technology stacks.",
  keywords: ["software blog", "technology insights", "product strategy", "design tips", "engineering best practices"],
  openGraph: {
    title: "Blog - Softiqo Technologies",
    description: "Insights on software, design, and product strategy from Softiqo Technologies.",
  },
};

export default function BlogPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)]">Insights on software, design, and product strategy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            Explore our latest thinking on building scalable digital products, modern technology stacks, and product-led growth.
          </p>
        </section>
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6 text-[color:var(--muted)]">
            <p className="text-lg font-semibold text-[color:var(--foreground)]">Latest updates</p>
            <ul className="space-y-4">
              <li>How to choose the right cloud platform for your product.</li>
              <li>Design tips for building intuitive user experiences.</li>
              <li>Scaling engineering teams with quality and momentum.</li>
            </ul>
          </div>
        </section>
      </main>
  );
}
