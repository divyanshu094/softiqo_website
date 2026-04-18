import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive software engineering and digital product services including custom development, cloud architecture, product design, platform integration, and MVP launches.",
  keywords: ["software services", "custom development", "cloud architecture", "product design", "DevOps", "platform integration", "MVP development"],
  openGraph: {
    title: "Software Engineering Services - Softiqo Technologies",
    description: "From product discovery to launch and ongoing support, we deliver end-to-end services that help teams ship more consistently and confidently.",
  },
};

const services = [
  {
    title: "Custom software development",
    description: "Bespoke web and mobile applications built for your business, users, and market goals.",
  },
  {
    title: "Cloud architecture & DevOps",
    description: "Reliable cloud infrastructure, deployment automation, and scalable systems for modern teams.",
  },
  {
    title: "Product design & UX",
    description: "Customer-centered product design, interaction design, and product validation for digital experiences.",
  },
  {
    title: "Platform integration",
    description: "API design, third-party integrations, and data synchronization that improves workflows.",
  },
  {
    title: "MVP launches",
    description: "Rapid prototyping and early stage product launches to validate your biggest ideas quickly.",
  },
  {
    title: "Maintenance & support",
    description: "Ongoing product support, performance optimization, and release planning for sustained growth.",
  },
];

export default function ServicesPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Our services</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">Software engineering and digital product services designed to scale.</h1>
            <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              From product discovery to launch and ongoing support, we deliver end-to-end services that help teams ship more consistently and confidently.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm transition hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">{service.title}</h2>
              <p className="mt-4 text-[color:var(--muted)] leading-7">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-[color:var(--primary-dark)] p-10 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Approach</p>
            <h2 className="mt-4 text-3xl font-semibold">Fast, transparent delivery without sacrificing quality.</h2>
            <p className="mt-6 text-[color:var(--surface)]/80 leading-8">
              We combine strong engineering practices with cloud-first thinking to deliver predictable outcomes, shorter feedback loops, and software that grows with your business.
            </p>
          </div>
          <div className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
            <div className="grid gap-5">
              {[
                {
                  title: "Discovery",
                  detail: "Product direction, user research, and technical planning before any code is written.",
                },
                {
                  title: "Build",
                  detail: "Iterative development with continuous validation, code reviews, and real user feedback.",
                },
                {
                  title: "Optimize",
                  detail: "Performance tuning, release planning, and operational improvements for long-term success.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-[color:var(--border)] p-6">
                  <p className="text-xl font-semibold text-[color:var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-[color:var(--muted)] leading-7">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Ready to build?</p>
              <h2 className="mt-3 text-3xl font-semibold text-[color:var(--foreground)]">Let’s turn your next idea into a production-ready experience.</h2>
            </div>
            <Link
              href="/contactus"
              className="inline-flex rounded-full bg-[color:var(--primary-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary)]"
            >
              Contact our team
            </Link>
          </div>
        </section>
      </main>
  );
}
