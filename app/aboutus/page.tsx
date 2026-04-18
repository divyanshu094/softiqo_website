import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Softiqo Technologies - a full-service software company that helps businesses solve complex challenges with elegant digital products, modern application engineering, and cloud-native infrastructure.",
  keywords: ["about softiqo", "software company", "technology partner", "digital solutions", "software engineering"],
  openGraph: {
    title: "About Softiqo Technologies - Empowering Teams with Software & Design",
    description: "Softiqo Technologies is a full-service software company that helps businesses solve complex challenges with elegant digital products and modern cloud solutions.",
  },
};

export default function AboutUsPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">About us</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">Empowering teams with software, design, and cloud platforms.</h1>
            <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              Softiqo Technologies is a full-service software company that helps businesses solve complex challenges with elegant digital products, modern application engineering, and cloud-native infrastructure.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Our mission</h2>
            <p className="text-[color:var(--muted)] leading-8">
              We exist to help growth-minded organizations convert strategy into working software with speed, clarity, and reliability.
            </p>
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Our vision</h2>
            <p className="text-[color:var(--muted)] leading-8">
              We want to be the trusted engineering partner for teams that want to build digital products customers love and scale with confidence.
            </p>
          </div>
          <div className="space-y-6 rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Our values</h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-[color:var(--foreground)]">Customer-first thinking</p>
                <p className="text-[color:var(--muted)] leading-7">Every decision is made with your end user and business outcome in mind.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[color:var(--foreground)]">Transparent collaboration</p>
                <p className="text-[color:var(--muted)] leading-7">We share progress, risks, and insights openly so your team stays aligned and informed.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[color:var(--foreground)]">Quality craftsmanship</p>
                <p className="text-[color:var(--muted)] leading-7">Clean code, thoughtful experiences, and scalable architecture are at the heart of every project.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Digital products",
              detail:
                "Design systems, web applications, and mobile products that feel polished and easy to use.",
            },
            {
              title: "Platform engineering",
              detail:
                "APIs, microservices, and cloud architecture built to support product growth and performance.",
            },
            {
              title: "Enterprise growth",
              detail:
                "Consulting, roadmap planning, and technical execution for product-led businesses.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h3>
              <p className="mt-4 text-[color:var(--muted)] leading-7">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-[color:var(--primary-dark)] p-10 text-white shadow-sm">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Join us</p>
            <h2 className="text-3xl font-semibold">We build solutions with teams that care about quality and momentum.</h2>
            <p className="max-w-3xl text-[color:var(--surface)]/80 leading-8">
              Whether you need a product prototype, a scalable cloud platform, or a partner for a long-term digital transformation, we bring the experience to move your roadmap forward.
            </p>
            <Link
              href="/contactus"
              className="inline-flex rounded-full bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--surface)]"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>
  );
}
